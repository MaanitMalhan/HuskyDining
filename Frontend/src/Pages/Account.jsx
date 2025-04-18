import React, { useState, useEffect, useMemo } from "react"; // Added useMemo
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
import { format } from 'date-fns'; // Added date-fns import

const { HeaderCell, Cell, Column } = Table;

export const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const { data: profile, isLoading: isProfileLoading, isError: isProfileError, error: profileError } = useGetUserProfileQuery();
  const { data: ledger, isLoading: isLedgerLoading, isError: isLedgerError, error:LedgerError} = useGetUserLedgerTransactionsQuery(userInfo._id);
  const {data: balance, isLoading: isBalanceLoading, isError: isBalanceError, error:balanceError} = useGetBalanceQuery(userInfo._id);
  // const { data: requests,isLoading: isRequestLoading, isError: isRequestError, error:RequestError } = useGetRequestsQuery(page);

  // --- START: Added pre-processing logic ---
  const processedLedger = useMemo(() => {
    if (!ledger || ledger.length === 0) {
      return [];
    }

    return ledger.map(transaction => {
      let formattedDate = 'N/A'; // Default value

      try {
        const dateString = transaction.createdAt; // Get the date string

        // Check if dateString is a non-empty string
        if (dateString && typeof dateString === 'string') {
          // Attempt to create a Date object directly from the string
          const dateObject = new Date(dateString);

          // Check if the created Date object is valid
          if (!isNaN(dateObject.getTime())) {
            // Format the valid Date object using date-fns
            // Adjust 'MM/dd/yyyy h:mm a' format as desired
            formattedDate = format(dateObject, 'MM/dd/yyyy h:mm a');
          } else {
            // Handle cases where the string might be invalid format
            console.warn(`Could not parse date string: ${dateString}`);
            formattedDate = 'Invalid Date Format';
          }
        } else {
            // Handle cases where createdAt might be missing or not a string
             console.warn(`createdAt field is missing or not a string for transaction: ${transaction._id}`);
        }
      } catch (error) {
        console.error(`Error processing date for transaction ${transaction._id}:`, error);
        formattedDate = 'Formatting Error';
      }

      // Return new object with formatted date
      return {
        ...transaction,
        formattedCreatedAt: formattedDate
      };
    });
  }, [ledger]); // Dependency array remains the same
  // --- END: Corrected pre-processing logic ---


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

  const mockTransactions = [
    { id: 1, date: "2025-03-01", amount: 2, type: "Flex Passes", status: "Completed" },
    { id: 2, date: "2025-03-05", amount: 100, type: "Points", status: "Pending" },
    { id: 3, date: "2025-03-10", amount: 3, type: "Flex Passes", status: "Completed" },
    { id: 4, date: "2025-03-01", amount: 2, type: "Flex Passes", status: "Completed" },
    { id: 5, date: "2025-03-05", amount: 100, type: "Points", status: "Pending" },
    { id: 6, date: "2025-03-10", amount: 3, type: "Flex Passes", status: "Completed" },
    { id: 7, date: "2025-03-01", amount: 2, type: "Flex Passes", status: "Completed" },
    { id: 8, date: "2025-03-05", amount: 100, type: "Points", status: "Pending" },
    { id: 9, date: "2025-03-10", amount: 3, type: "Flex Passes", status: "Completed" },
  ];

  // const userRequest = requests?.filter((req) => req.userID === userInfo._id)
  // .filter((req) => req.status === "fullfilled")

  // console.log(userRequest)



  // const [sortColumn, setSortColumn] = React.useState();
  // const [sortType, setSortType] = React.useState();
  // const [loading, setLoading] = React.useState(false);


  // const getData = () => {
  //   if (sortColumn && sortType) {
  //     return [...mockTransactions].sort((a, b) => {
  //       let x = a[sortColumn];
  //       let y = b[sortColumn];
  //       if (typeof x === 'string') {
  //         x = x.charCodeAt();
  //       }
  //       if (typeof y === 'string') {
  //         y = y.charCodeAt();
  //       }
  //       if (sortType === 'asc') {
  //         return x - y;
  //       } else {
  //         return y - x;
  //       }
  //     });
  //   }

  //   return mockTransactions;
  // };

  // const handleSortColumn = (sortColumn, sortType) => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSortColumn(sortColumn);
  //     setSortType(sortType);
  //   }, 500);
  // };


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
        {/* Table with the same max width */}
        <h3>Transactions</h3>
        {/* <Table height={300}
            data= {mockTransactions}
            // data = {getData()}
            bordered hover
            style={styles.table}
            // sortColumn={sortColumn}
            // onSortColumn={handleSortColumn}
            // sortType={sortType}
            >
          <Column width={80} align="center">
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={150} sortable>
            <HeaderCell>Date</HeaderCell >
            <Cell dataKey="date" />
          </Column>
          <Column width={120} sortable>
            <HeaderCell>Amount</HeaderCell>
            <Cell dataKey="amount" />
          </Column>
          <Column width={180} sortable>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>
          <Column width={150} sortable>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>
          <Column width={100}>
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {(rowData) => (
                <Button appearance="link" onClick={() => alert(`Transaction ID: ${rowData.id}`)}>
                  View
                </Button>
              )}
            </Cell>
          </Column>
        </Table > */}

        <Table
          height={400}
          // --- START: Updated Table data prop ---
          data={processedLedger}
          // --- END: Updated Table data prop ---
          bordered hover
          style = {styles.table}>
          <Column width={200} align="center">
            <HeaderCell>Processed At</HeaderCell>
            {/* --- START: Updated Cell dataKey --- */}
            <Cell dataKey="formattedCreatedAt"/>
            {/* --- END: Updated Cell dataKey --- */}
          </Column>
          <Column width={250} align="center">
            <HeaderCell>Recipient</HeaderCell>
            <Cell dataKey="recipient_name" />
          </Column>
          <Column width={40} align="center">
            <HeaderCell>Amount</HeaderCell>
            <Cell dataKey="amount" />
          </Column>
          <Column width={250} align="center">
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>

        </Table>
      </div>
    </main>
  );
};