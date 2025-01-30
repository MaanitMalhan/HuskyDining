import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import { useGetRequestsQuery } from "../../slices/requestApiSlice";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import axios from "axios";

export const Menu = ({ color }) => {
  const { data: requests = [], isLoading, isError } = useGetRequestsQuery();
  const [panelSizes, setPanelSizes] = useState([80, 10, 10]);

  const handleClick = (panelIndex) => {
    const newSizes = panelSizes.map((_, index) =>
      index === panelIndex ? 80 : 20 / (panelSizes.length - 1)
    );
    setPanelSizes(newSizes);
  };

  return (
    <div className={`${color} rounded-lg  p-3 h-[100%] text-white`}>
      <PanelGroup direction="vertical" className="rounded-md">
        <Panel defaultSize={85}>
          <PanelGroup direction="horizontal">
            {panelSizes.map((size, index) => (
              <React.Fragment key={index}>
                <Panel
                  defaultSize={size}
                  style={{ flexGrow: size }}
                  className="bg-[#9b69f1] rounded-md "
                >
                  <div
                    onClick={() => handleClick(index)}
                    className="cursor-pointer p-4 h-[100%] text-white"
                  >
                    Panel {index + 1}
                  </div>
                </Panel>
                {index < panelSizes.length - 1 && (
                  <PanelResizeHandle className="w-1 bg-primary" />
                )}
              </React.Fragment>
            ))}
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="h-2" />

        <Panel defaultSize={15}>
          <Carousel>
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
          </Carousel>
        </Panel>
      </PanelGroup>
    </div>
  );
};

const Card = ({ data, isloading }) => {
  if (isloading) {
    return (
      <div className="flex-[0_0_20%] rounded-lg min-w-0 bg-gray-200 text-black h-[100%] ml-2 p-1 animate-pulse">
        <div className="h-4 rounded-sm bg-gray-100 animate-pulse"></div>
        <div className="space-y-1.5 pt-2.5">
          <div className="h-3 bg-gray-100 animate-pulse rounded-sm"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-sm w-5/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-sm w-3/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-[0_0_20%] rounded-lg min-w-0 bg-white text-black h-[100%] ml-1 p-0.5 border-[2px] border-black">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={30} className="bg-white rounded-l-md">
          {data.priority}
        </Panel>
        <PanelResizeHandle disabled="true" className="bg-white w-0.5" />
        <Panel defaultSize={70} className="bg-white rounded-r-lg"></Panel>
      </PanelGroup>
    </div>
  );
};

const Carousel = ({ children }) => {
  const autoscrollOptions = {
    speed: 1,
    startDelay: 300,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true },
    [Autoscroll(autoscrollOptions)]
  );

  return (
    <div className="overflow-hidden h-[100%]" ref={emblaRef}>
      <div className="flex touch-pan-y touch-pinch-zoom h-[100%]">
        {children}
      </div>
    </div>
  );
};
