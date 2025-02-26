import React from "react";
import { useGetUserRequestsQuery } from "../../slices/requestApiSlice";
import { useSelector } from "react-redux";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Transactions = ({ color }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: requests = [],
    isLoading,
    isError,
  } = useGetUserRequestsQuery(userInfo._id);

  return (
    <div className={`rounded-lg ${color} py-3 px-2 text-white h-[100%]`}>
      <PanelGroup direction="vertical" className="h-[100%]">
        <Panel defaultSize={90} className="h-[100%]">
          <div className="h-[100%] overflow-y-auto flex flex-col gap-2 p-0.5">
            {isLoading ? (
              Array(10)
                .fill(null)
                .map((_, index) => <Card key={index} isloading={isLoading} />)
            ) : isError ? (
              <div>{isError?.data?.message || error.error}</div>
            ) : (
              requests.map((data) => (
                <Card data={data} key={data._id} isloading={isLoading} />
              ))
            )}
          </div>
        </Panel>
        <PanelResizeHandle disabled="true" className="h-2" />

        <Panel defaultSize={5} className="border border-dashed">
          request
        </Panel>
        <PanelResizeHandle disabled="true" className="h-1" />

        <Panel defaultSize={5} className="border border-dashed">
          donate
        </Panel>
      </PanelGroup>
    </div>
  );
};

const Card = ({ data, isloading }) => {
  if (isloading) {
    return (
      <div className="bg-gray-200 animate-pulse rounded-lg h-32 min-h-32 p-2 w-full">
        <div className="h-6 rounded-md bg-gray-100 animate-pulse"></div>
        <div className="space-y-1.5 pt-2.5">
          <div className="h-3 bg-gray-100 animate-pulse rounded-md"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-5/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-3/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black p-4 w-full rounded-lg h-32 min-h-20 hover:min-h-32">
      {/* Customize this content based on your data */}
      <div>Priority: {data?.priority || "N/A"}</div>
    </div>
  );
};
