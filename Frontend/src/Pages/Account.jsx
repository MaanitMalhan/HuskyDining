import React from "react";
import { useGetUserProfileQuery } from "../slices/authApiSlice";
import { Navbar } from "../components/navigation/Nav";
import { useSelector } from "react-redux";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Account = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: profile, isLoading, isError, error } = useGetUserProfileQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Account</h1>
      <p>{`Hello ${userInfo.name}`}</p>
      <div>
        <h2>Profile</h2>
        {profile ? (
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </div>
  );
};
