import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/ui/button";
import { dummyDeveloperData } from "./content";
import { FilterBar, FilterSort } from "./components/FilterBar";
import DeveloperCard from "./components/DeveloperCard";

function App() {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedResponseTime, setSelectedResponseTime] = useState("");

  const [selectedSort, setSelectedSort] = useState("");

  const [filteredDevelopers, setFilteredDevelopers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const filtered = dummyDeveloperData.filter((dev) => {
      const matchesRating = selectedRating
        ? dev.rating.value === Number(selectedRating)
        : true;
      const matchesLocation = selectedLocation
        ? dev.companyLocation === selectedLocation
        : true;
      const matchesResponseTime = selectedResponseTime
        ? dev.responseTime === selectedResponseTime
        : true;
      return matchesRating && matchesLocation && matchesResponseTime;
    });
    setFilteredDevelopers(filtered);
  }, [selectedRating, selectedLocation, selectedResponseTime]);

  return (
    <main className="flex flex-col gap-6 lg:gap-12 max-w-screen-2xl mx-auto bg-[#FFFFFF] p-2.5 sm:p-4 2xl:p-0">
      <header className="h-fit w-full flex flex-col items-center">
        <Navbar />
        <div className="w-full h-fit">
          <div className="w-full h-fit lg:min-h-[12rem] flex items-center gap-6 py-8 px-2.5 sm:px-4 xl:px-[5.5rem] 2xl:px-0">
            <Button aria-label="back" className="bg-[#D9D9D9] hidden lg:block">Back</Button>
            <div className="grow h-full flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl sm:text-3xl text-[#000000] font-semibold">
                Web Designer
              </h1>
              <p className="block lg:hidden text-[.875rem] text-[#828282] text-center">
                Your Top 5 local professional matches are below. You can contact
                any of the professionals to get more information using the
                contact button.
              </p>
              <div className="flex gap-3.5 mt-4 sm:mt-0">
                <Button aria-label="your-matches">Your matches</Button>
                <Button aria-label="replies" className="bg-[#000000]">Replies</Button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit">
            <div className="w-full h-fit flex items-end lg:items-center justify-between bg-[#E3F6FC] p-2 pt-4 lg:p-4 xl:p-6">
              <div className="flex items-start lg:items-center flex-col-reverse lg:flex-row gap-2 lg:gap-4 w-full h-fit">
                <FilterBar
                  selectedRating={selectedRating}
                  onChangeRating={setSelectedRating}
                  selectedLocation={selectedLocation}
                  onChangeLocation={setSelectedLocation}
                  selectedResponseTime={selectedResponseTime}
                  onChangeResponseTime={setSelectedResponseTime}
                />
                <h2 className="text-[0.875rem] sm:text-[1.25] font-medium sm:font-semibold">{`${filteredDevelopers.length} matches`}</h2>
              </div>
              <FilterSort
                selectedSort={selectedSort}
                onChangeSort={setSelectedSort}
              />
            </div>
            <div className="w-full h-fit bg-gradient-to-r from-[#8ED5EC] to-[#00AFE3] flex items-center p-4 sm:p-6 justify-between">
              <h2 className="text-[0.938rem] sm:text-[1.375rem] font-light text-[#FFFFFF] text-center lg:text-left">
                <span className="text-[#FFF600] font-semibold">
                  Recommended:{" "}
                </span>
                Request replies from your{" "}
                <strong className="font-semibold">top 5 matches</strong> to hear
                back faster
              </h2>
              <Button aria-label="request-best-matches" className="bg-[#000000] text-lg font-medium hidden lg:flex">
                Request your best matches here
              </Button>
            </div>
          </div>
        </div>
      </header>
      {filteredDevelopers.length > 0 && (
        <div className="w-full h-fit text-center">
          <Button className="bg-[#F74B00]">
            Request your best matches here
          </Button>
        </div>
      )}
      <section className="w-full flex flex-col items-center gap-4">
        {filteredDevelopers.length === 0 ? (
          <p className="text-center text-xl font-light text-[#AAC9D2] capitalize">
            no match found
          </p>
        ) : (
          filteredDevelopers
            .slice(0, visibleCount)
            .map((dev) => <DeveloperCard key={dev.id} detail={dev} />)
        )}
      </section>
      {filteredDevelopers.length > visibleCount && (
        <div className="w-full h-fit text-center mb-12">
          <Button aria-label="see-more" onClick={() => setVisibleCount(visibleCount + 5)}>
            See More Professionals
          </Button>
        </div>
      )}
    </main>
  );
}

export default App;
