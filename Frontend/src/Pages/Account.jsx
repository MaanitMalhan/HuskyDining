import React, { useState, useEffect, useMemo } from "react";
import { useGetUserProfileQuery, useGetBalanceQuery } from "../slices/authApiSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useGetUserLedgerTransactionsQuery } from "../slices/ledgerSlice";
import "rsuite/dist/rsuite.min.css";
import { Panel, Table } from "rsuite";
import { format } from 'date-fns';

const { HeaderCell, Cell, Column } = Table;

export const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();

  const { data: profile, isLoading: isProfileLoading, isError: isProfileError, error: profileError } = useGetUserProfileQuery();
  const { data: ledger, isLoading: isLedgerLoading, isError: isLedgerError, error: LedgerError } = useGetUserLedgerTransactionsQuery(userInfo._id);
  const { data: balance, isLoading: isBalanceLoading, isError: isBalanceError, error: balanceError } = useGetBalanceQuery(userInfo._id);

  const processedLedger = useMemo(() => {
    if (!ledger || ledger.length === 0) return [];

    return ledger.map(transaction => {
      let formattedDate = 'N/A';

      try {
        const dateString = transaction.createdAt;

        if (dateString && typeof dateString === 'string') {
          const dateObject = new Date(dateString);

          if (!isNaN(dateObject.getTime())) {
            formattedDate = format(dateObject, 'MM/dd/yyyy h:mm a');
          } else {
            console.warn(`Could not parse date string: ${dateString}`);
            formattedDate = 'Invalid Date Format';
          }
        } else {
          console.warn(`createdAt field is missing or not a string for transaction: ${transaction._id}`);
        }
      } catch (error) {
        console.error(`Error processing date for transaction ${transaction._id}:`, error);
        formattedDate = 'Formatting Error';
      }

      return {
        ...transaction,
        formattedCreatedAt: formattedDate
      };
    });
  }, [ledger]);

  if (isProfileLoading || isBalanceLoading || isLedgerLoading) {
    return <div>Loading...</div>;
  }

  if (isProfileError) {
    return <div>Error fetching profile: {profileError?.message || "Unknown error"}</div>;
  }

  if (isBalanceError) {
    return <div>Error fetching balance: {balanceError?.message || "Unknown error"}</div>;
  }

  if (isLedgerError) {
    return <div>Error fetching ledger: {LedgerError?.message || "Unknown error"}</div>;
  }

  const styles = {
    panel: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      margin: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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
      return [...processedLedger].sort((a, b) => {
        let x, y;

        if (sortColumn === "amount") {
          x = getSignedAmount(a);
          y = getSignedAmount(b);
        } else if (sortColumn === "createdAt") {
          x = new Date(a.createdAt).getTime();
          y = new Date(b.createdAt).getTime();
        } else if (sortColumn === "formattedCreatedAt") {
          x = new Date(a.formattedCreatedAt).getTime();
          y = new Date(b.formattedCreatedAt).getTime();
        } else {
          x = a[sortColumn];
          y = b[sortColumn];
        }

        return sortType === "asc" ? (x > y ? 1 : -1) : (x < y ? 1 : -1);
      });
    }
    return processedLedger;
  };

  return (
    <main style={{ backgroundColor: "#f3f5f3", minHeight: "100vh", padding: "20px" }}>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "xx-large", fontWeight: "bold", marginBottom: "20px" }}>
        User Dashboard
      </h1>

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <h3>Account Information</h3>
        <Panel bordered style={styles.panel}>
          <p>{`Hello, ${userInfo.name}`}</p>
          {balance ? (
            <pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
              <p>{`Current Flexpasses: ${balance.flexpass}`}</p>
              <p>{`Current Points: ${balance.points}`}</p>
            </pre>
          ) : (
            <p>No profile data available</p>
          )}
        </Panel>

        <h3>Transactions</h3>
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
          style={styles.table}
        >
          <Column width={180} align="center" sortable>
            <HeaderCell>Processed At</HeaderCell>
            <Cell dataKey="formattedCreatedAt" />
          </Column>
          <Column width={200} align="center" sortable>
            <HeaderCell>Recipient</HeaderCell>
            <Cell dataKey="recipient_name" />
          </Column>
          <Column width={100} align="center" sortable>
            <HeaderCell>Amount</HeaderCell>
            <Cell>
              {(rowData) => {
                const isDonation = rowData.transaction === "donate";
                const signedAmount = isDonation ? `- ${rowData.amount}` : `+ ${rowData.amount}`;
                return <span style={{ color: isDonation ? "red" : "green" }}>{signedAmount}</span>;
              }}
            </Cell>
          </Column>
          <Column width={200} align="center" sortable>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>
        </Table>
      </div>
    </main>
  );
};
