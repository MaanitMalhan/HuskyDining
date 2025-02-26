import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Home/Menu";
import { Balance } from "../../components/Home/Balance";
import { Transactions } from "../../components/Home/Transactions";
import { Navbar } from "../../components/Navbar/Navbar";
import { Review } from "../../components/Home/Reviews";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Home = () => {
  const [outerPanelSizes, setOuterPanelSizes] = useState(75); // Default sizes of the outer panels
  const [outerPanelSize, setOuterPanelSize] = useState(25);
  const [requestPanelSize, setRequestPanelSize] = useState(20);
  const [menuPanelSize, setMenuPanelSize] = useState(80);
  const [balancePanelSize, setBalancePanelSize] = useState(67);
  const [reviewPanelSize, setReviewPanelSize] = useState(33);

  const navigate = useNavigate();

  // Size threshold
  const SIZE_THRESHOLD = 91;

  // Check and navigate if any panel exceeds the threshold
  useEffect(() => {
    if (requestPanelSize > SIZE_THRESHOLD && outerPanelSizes > SIZE_THRESHOLD) {
      navigate("/request"); // Navigate to Request page
    } else if (
      menuPanelSize > SIZE_THRESHOLD &&
      outerPanelSizes > SIZE_THRESHOLD
    ) {
      navigate("/menu"); // Navigate to Menu page
    } else if (
      balancePanelSize > SIZE_THRESHOLD &&
      outerPanelSize > SIZE_THRESHOLD
    ) {
      navigate("/account"); // Navigate to Balance page
    } else if (
      reviewPanelSize > SIZE_THRESHOLD &&
      outerPanelSize > SIZE_THRESHOLD
    ) {
      navigate("/review"); // Navigate to Reviews page
    }
  }, [
    requestPanelSize,
    outerPanelSizes,
    menuPanelSize,
    balancePanelSize,
    reviewPanelSize,
    navigate,
  ]);

  return (
    <div className="">
      <Navbar title={"home"} />

      <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] mt-[51px]">
        <PanelGroup direction="horizontal">
          {/* Request and Menu Panels */}
          <Panel
            defaultSize={80}
            maxSize={SIZE_THRESHOLD + 1}
            onResize={(sizes) => {
              setOuterPanelSizes(sizes); // Track sizes of outer panels
            }}
          >
            <PanelGroup direction="vertical">
              <Panel
                defaultSize={80}
                minSize={75}
                maxSize={SIZE_THRESHOLD + 1}
                onResize={(size) => setMenuPanelSize(size)}
              >
                <Menu color={"bg-primary"} />
              </Panel>

              <PanelResizeHandle className="h-[3px]" />

              <Panel
                defaultSize={20}
                maxSize={SIZE_THRESHOLD + 1}
                onResize={(size) => setRequestPanelSize(size)}
              >
                <Review bgcolor={"bg-projblack"} />
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle disabled={true} className="w-[3px]" />

          {/* Balance and Review Panels */}
          <Panel
            defaultSize={20}
            onResize={(sizes) => {
              setOuterPanelSize(sizes); // Track sizes of outer panels
            }}
            maxSize={SIZE_THRESHOLD + 1}
          >
            <PanelGroup direction="vertical">
              <Panel
                defaultSize={15}
                maxSize={SIZE_THRESHOLD + 1}
                onResize={(size) => setBalancePanelSize(size)}
              >
                <Balance bgColor={"bg-secondary"} />
              </Panel>

              <PanelResizeHandle disabled={true} className="h-[3px]" />

              <Panel
                defaultSize={85}
                maxSize={SIZE_THRESHOLD + 1}
                onResize={(size) => setReviewPanelSize(size)}
              >
                <Transactions color={"bg-[#87cefa]"} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};
