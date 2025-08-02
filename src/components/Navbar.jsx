import OptimizedImage from "./ui/optimized-image";

const Navbar = () => {
  return (
    <nav className="w-full h-fit px-[5.5rem] py-[1.5rem] flex justify-between items-center bg-[#FFFFFF] border-b-[1px] border-[#DEDEDE]">
      <OptimizedImage
        src="/src/assets/images/brand-logo.svg"
        alt={"Brand logo"}
        className="w-auto h-[2.5rem]"
      />
      <div></div>
    </nav>
  );
};

export default Navbar;
