import Button from "./ui/button";
import OptimizedImage from "./ui/optimized-image";
import RatingStars from "./ui/rating-star";

const DeveloperCardDescription = ({ detail }) => {
  return (
    <>
      <p className="text-[0.875rem] lg:text-[.75rem] font-medium text-[#828282]">
        {detail.description}
      </p>
      <div className="w-full flex items-center justify-between mt-4">
        <Button className="flex items-center gap-2 text-[#00AFE3] bg-transparent text-sm p-0">
          View Profile
          <OptimizedImage
            src={"/icons/right-arrow.svg"}
            alt={"right arrow icon"}
            className="w-4 h-4"
          />
        </Button>
        <Button className="flex items-center gap-2 rounded-full text-sm bg-[#AAC9D2] capitalize">
          <OptimizedImage
            src={"/icons/action.svg"}
            alt={" action icon"}
            className="w-4 h-4"
          />
          {detail?.responseTime}
        </Button>
      </div>
    </>
  );
};

const DeveloperCard = ({ detail }) => {
  return (
    <div className="w-full h-fit lg:h-[15.5rem] py-4 px-2 lg:p-0 bg-[#FFFFFF] flex flex-col lg:flex-row xl:portrait:flex-col items-center shadow-[0_0_4px_0_rgba(0,0,0,0.1)] lg:shadow-none lg:border-b border-[#D9D9D9] rounded sm:rounded-none overflow-hidden">
      <div className="w-full h-full flex items-center gap-4 p-0 lg:p-6 grow">
        <OptimizedImage
          src={detail.src}
          alt={detail.alt}
          className="w-auto h-full"
        />
        <div className="flex flex-col font-semibold text-[#000000] relative">
          <h2 className="text-[1rem] sm:text-[1.2rem] flex items-center gap-2">
            <OptimizedImage
              src={"/icons/circle-check.svg"}
              alt="circle check icon"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />{" "}
            {detail.companyName}
          </h2>
          <p className="text-[.75rem] flex items-center gap-2">
            <OptimizedImage
              src={"/icons/location.svg"}
              alt="location icon"
              className="w-3.5 h-3.5"
            />
            {detail.companyLocation}
          </p>
          {detail.service && detail.service.length > 0 && (
            <div className="items-center gap-2 py-4 hidden xl:flex">
              {detail.service.map((service, index) => (
                <Button
                  key={index}
                  className="rounded-full border border-[#B3B3B3] text-[.75rem] text-[#B3B3B3] bg-transparent"
                >
                  {service}
                </Button>
              ))}
            </div>
          )}
          <div className="hidden lg:block xl:portrait:block">
          <DeveloperCardDescription detail={detail} />
          </div>
          <div className="absolute top-2 xl:top-5 right-2 xl:right-5 items-center gap-2 hidden lg:flex">
            <RatingStars rating={detail?.rating?.value} />
            <h2>{detail?.rating?.count}</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-6 block lg:hidden">
        <div className="w-full flex xl:hidden items-center justify-between pb-4">
          <Button className="rounded-full border border-[#B3B3B3] text-[.75rem] text-[#B3B3B3] bg-transparent">
            {"Patio Services"}
          </Button>
          <div className="w-fit h-fit flex items-center gap-2 mr-3">
            <RatingStars rating={detail?.rating?.value} />{" "}
            <h2 className="text-[0.75rem] sm:text-[1.2rem] font-semibold">{detail?.rating?.count}</h2>
          </div>
        </div>
        <DeveloperCardDescription detail={detail} />
      </div>
      <div className="w-fit lg:min-w-[15.5rem] h-full p-6 lg:p-0 bg-[#E3F6FC] flex flex-row lg:flex-col items-center justify-center gap-2.5">
        <OptimizedImage
          src={"/icons/square-check.svg"}
          alt="square check icon"
          className="w-6 h-6"
        />
        <Button>Request reply</Button>
      </div>
    </div>
  );
};

export default DeveloperCard;
