import Button from "./ui/button";
import CustomDropdown from "./ui/custom-dropdown";
import OptimizedImage from "./ui/optimized-image";

const Navbar = () => {
  return (
    <nav className="w-screen h-fit px-2.5 sm:px-4 xl:px-[5.5rem] py-[1rem] sm:py-[1.5rem] flex items-center justify-between bg-[#FFFFFF] border-b-[1px] border-[#DEDEDE]">
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        <OptimizedImage
          src="/images/brand-logo.svg"
          alt={"Brand logo"}
          className="w-auto h-[1.2rem] sm:h-[2.4rem]"
        />
        <CustomDropdown isMobile title="Our Service" className="block lg:hidden"/>
      </div>
      <div className="items-center gap-2 sm:gap-4 lg:gap-6 hidden lg:flex">
        <h1 className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#00AFE3]">
          My requests
        </h1>
        <CustomDropdown title="Chander"/>
      </div>
      <Button aria-label="login" className="bg-transparent flex lg:hidden items-center gap-2 text-[#000000]">
        <OptimizedImage src={"/icons/search.svg"} alt="search icon" className="w-5 h-5" /> Login
      </Button>
    </nav>
  );
};

export default Navbar;
