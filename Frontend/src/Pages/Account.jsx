import React, { useState, useEffect } from "react";
import { useGetUserProfileQuery, useGetBalanceQuery } from "../slices/authApiSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useGetRequestsQuery } from "../slices/requestApiSlice";
import "rsuite/dist/rsuite.min.css";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Panel, PanelGroup, Table, Button, Placeholder } from "rsuite";
import { getDate } from "rsuite/esm/internals/utils/date";
import { useGetUserLedgerTransactionsQuery} from "../slices/ledgerSlice";
import { ConsoleLogEntry } from "selenium-webdriver/bidi/logEntries";

const { HeaderCell, Cell, Column } = Table;

export const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const { data: profile, isLoading: isProfileLoading, isError: isProfileError, error: profileError } = useGetUserProfileQuery();
  const { data: ledger, isLoading: isLedgerLoading, isError: isLedgerError, error:LedgerError} = useGetUserLedgerTransactionsQuery(userInfo._id);
  const {data: balance, isLoading: isBalanceLoading, isError: isBalanceError, error:balanceError} = useGetBalanceQuery(userInfo._id);
  // const { data: requests,isLoading: isRequestLoading, isError: isRequestError, error:RequestError } = useGetRequestsQuery(page);
  
  if (isProfileLoading || isBalanceLoading || isLedgerLoading ) {
    return <div>Loading...</div>;
  }
  
  if (isProfileError ) {
    return <div>Error fetching profile: {profileError?.message || "Unknown error"}</div>;
  }
  
  if (isBalanceError) {
    return <div>Error fetching balance: {balanceError?.message || "Unknown error"}</div>;
  }

  if (isLedgerError) {
    return <div>Error fetching ledger: {balanceError?.message || "Unknown error"}</div>;
  }

  console.log(userInfo._id);

  console.log(ledger);


  const styles = {
    title: {
      backgroundColor: "#f3f5f3",
      color: "#00007b",
      width: "100%",
      textAlign: "center",
      fontSize: "xx-large",
      fontWeight: "bold",
      padding: "20px 0",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#333",
    },
    panel: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      margin: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    pre: {
      backgroundColor: "#f5f5f5",
      padding: "10px",
      borderRadius: "5px",
      overflowX: "auto",
    },
    table: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      margin: "10px",
      padding: "10px",
    }
  };

  const getSignedAmount = (transaction) => {
    return transaction.transaction === "donate" ? -transaction.amount : transaction.amount;
  };
  
  const getSortedData = () => {
    if (sortColumn && sortType) {
      return [...ledger].sort((a, b) => {
        let x, y;
  
        if (sortColumn === "amount") {
          x = getSignedAmount(a);
          y = getSignedAmount(b);
        } else if (sortColumn === "createdAt") {
          x = new Date(a[sortColumn]).getTime();
          y = new Date(b[sortColumn]).getTime();
        } else {
          x = a[sortColumn];
          y = b[sortColumn];
        }
  
        return sortType === "asc" ? (x > y ? 1 : -1) : (x < y ? 1 : -1);
      });
    }
    return ledger;
  };


  return (
    <main style={{ backgroundColor: "#f3f5f3", minHeight: "100vh", padding: "20px" }}>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "xx-large", fontWeight: "bold", marginBottom: "20px" }}>
        User Dashboard
      </h1>

      {/* Centered container with max width for consistency */}
      <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h3>Account Information</h3>
        <Panel bordered style={styles.panel}> 
          <p>{`Hello, ${userInfo.name}`}</p>
          {balance ? (
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "auto"
              }}
            >
            <p>{`Current Flexpasses: ${balance.flexpass}`}</p>
            <p>{`Current Points: ${balance.points}`}</p>
            </pre>
          ) : (
            <p>No profile data available</p>
          )}
        </Panel>
        <Table 
          height={400} 
          data={getSortedData()} 
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={(column, type) => {
            setSortColumn(column);
            setSortType(type);
          }}
          bordered 
          hover 
          style = {styles.table}>
          <Column width={150} align="center" sortable>
            <HeaderCell>Processed At</HeaderCell>
            <Cell>
            {rowData => new Date(rowData.createdAt).toLocaleString()}
            </Cell>
          </Column>
          <Column width={200} align="center" sortable>
            <HeaderCell>Recipient</HeaderCell>
            <Cell dataKey="recipient_name" />
          </Column>
          <Column width={100} align="center" sortable sortColumn="amount">
            <HeaderCell>Amount</HeaderCell>
            <Cell dataKey="amount">
              {(rowData) => {
                const isDonation = rowData.transaction === "donate";
                const signedAmount = isDonation ? `- ${rowData.amount}` : `+ ${rowData.amount}`;
                return <span style={{ color: isDonation ? "red" : "green" }}>{signedAmount}</span>;
              }}
            </Cell>
          </Column>
          <Column width={250} align="center" sortable>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>
        </Table>
      </div>
    </main>
  );
};