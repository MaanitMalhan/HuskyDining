import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGetReviewsQuery } from "../../slices/reviewAiSlice";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const Review = ({ bgcolor }) => {
  const { data: reviews = [], isLoading, isError } = useGetReviewsQuery();

  return (
    <div className={`rounded-lg ${bgcolor} p-3 text-white h-[100%] `}>
      <div className=" h-[100%] text-bl">
        <Carousel>
          {isLoading ? (
            Array(10)
              .fill(null)
              .map((_, index) => <Card key={index} isloading={isLoading} />)
          ) : isError ? (
            <div>{isError?.data?.message || error.error}</div>
          ) : (
            reviews.map((data) => (
              <Card data={data} key={data._id} isloading={isLoading} />
            ))
          )}
        </Carousel>
      </div>
    </div>
  );
};

const Card = ({ data, isloading }) => {
  if (isloading) {
    return (
      <div
        className={`flex-[0_0_20%] rounded-md min-w-0 bg-gray-200 text-black h-[100%] ml-2 p-1 animate-pulse`}
      >
        <div className="h-6 rounded-md bg-gray-100 animate-pulse"></div>
        <div className="space-y-1.5 pt-2.5">
          <div className="h-3 bg-gray-100 animate-pulse rounded-md"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-5/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-3/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md w-4/6"></div>
          <div className="h-3 bg-gray-100 animate-pulse rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex-[0_0_20%] rounded-md min-w-0 bg-white text-black h-[100%] ml-2 p-1`}
    >
      {data.rating}
    </div>
  );
};

const Carousel = ({ children }) => {
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true, slidesToScroll: 2 },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="overflow-hidden h-[100%]" ref={emblaRef}>
      <div className="flex touch-pan-y touch-pinch-zoom h-[100%]">
        {children}
      </div>
    </div>
  );
};
