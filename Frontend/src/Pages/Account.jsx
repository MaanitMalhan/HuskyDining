import React from "react";
import { useGetUserProfileQuery, useGetBalanceQuery } from "../slices/authApiSlice";
import { Navbar } from "../components/navigation/Nav";
import { useSelector } from "react-redux";
import "rsuite/dist/rsuite.min.css";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Panel, PanelGroup, Table, Button, Placeholder } from "rsuite";

const { HeaderCell, Cell, Column } = Table;

export const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: profile, isLoading, isError, error } = useGetUserProfileQuery();
  const { data: balance } = useGetBalanceQuery(profile.user.id);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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


  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);


  const getData = () => {
    if (sortColumn && sortType) {
      return mockTransactions.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }

    return mockTransactions;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };


  return (
    <main style={{ backgroundColor: "#f3f5f3", minHeight: "100vh", padding: "20px" }}>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "xx-large", fontWeight: "bold", marginBottom: "20px" }}>
        User Dashboard
      </h1>

      {/* Centered container with max width for consistency */}
      <div style={{ maxWidth: "800px", margin: "auto" }}>
      <PanelGroup
        direction="horizontal"
        style={styles.panel}
      >
          <Panel header="Account Information" bordered>
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
        </PanelGroup>

        {/* Table with the same max width */}
        <Table height={300} 
            data= {getData()} 
            bordered hover 
            style={styles.table}
            sortColumn={sortColumn}
            onSortColumn={handleSortColumn}
            sortType={sortType}
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
          <Column width={100} sortable>
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {(rowData) => (
                <Button appearance="link" onClick={() => alert(`Transaction ID: ${rowData.id}`)}>
                  View
                </Button>
              )}
            </Cell>
          </Column>
        </Table>
      </div>
    </main>
  );



  return (
    <main style={{ backgroundColor: "#f3f5f3", minHeight: "100vh" }}>
      <Navbar />
      <h1 style={styles.title}>User Dashboard</h1>

      <PanelGroup direction= "horizontal">
        {/* user info */}
        <Panel defaultSize={50} style={styles.panel}>
          <h2 className={`text-2xl font-semibold`}>Account Information</h2>
          <p>{`Hello, ${userInfo.name}`}</p>
          {profile ? (
            <pre style={styles.pre}>{JSON.stringify(profile, null, 2)}</pre>
          ) : (
            <p>No profile data available.</p>
          )}
        </Panel>

        {/* trasnactions panel */}
        <Panel defaultSize={50} style={styles.panel}>
          
          <h2 className={`text-2xl font-semibold`}>Previous transactions</h2>
          <ul style={styles.transactionList}>
            {mockTransactions.map((tx) =>(
            <li key={tx.id} style={styles.transactionItem}>
              <strong>{tx.date}</strong> - {tx.amount} - <em>{tx.type}</em> - <em>{tx.status}</em>
            </li>
            ))}
          </ul>
        </Panel>
      </PanelGroup>

      {/* <Table height={400} data={mockTransactions} autoHeight>
        <Column width={100} align="center">
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={200}>
          <HeaderCell>Date</HeaderCell>
          <Cell dataKey="date" />
        </Column>
        <Column width={200}>
          <HeaderCell>Amount</HeaderCell>
          <Cell dataKey="amount" />
        </Column>
        <Column width={200}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey="type" />
        </Column>
        <Column width={200}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>
      </Table>
   */}
  

      {/* <h1>Account</h1>
      <p>{`Hello ${userInfo.name}`}</p>
      <div>
        <h2>Profile</h2>
        {profile ? (
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        ) : (
          <p>No profile data available.</p>
        )}
      </div> */}
    </main>
  );
};
