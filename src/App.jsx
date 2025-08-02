import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/ui/button";
import { dummyDeveloperData } from "./content";
import FilterBar from "./components/FilterBar";

function App() {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedResponseTime, setSelectedResponseTime] = useState("");

  const [filteredDevelopers, setFilteredDevelopers] = useState([]);

  useEffect(() => {
    const filtered = dummyDeveloperData.filter((dev) => {
      const matchesRating = selectedRating ? dev.rating.value === Number(selectedRating) : true;
      const matchesLocation = selectedLocation ? dev.companyLocation === selectedLocation : true;
      const matchesResponseTime = selectedResponseTime ? dev.responseTime === selectedResponseTime : true;
      return matchesRating && matchesLocation && matchesResponseTime;
    });
    setFilteredDevelopers(filtered);
  }, [selectedRating, selectedLocation, selectedResponseTime]);

  console.log("Filtered Developers:", filteredDevelopers);


  return (
    <main className="flex flex-col gap-4 max-w-7xl mx-auto items-center bg-[#FFFFFF]">
      <header className="h-fit w-screen">
        <Navbar />
        <div className="w-full h-fit px-[5.5rem]">
          <div className="w-full min-h-[12rem] h-fit flex items-center">
            <Button className="bg-[#D9D9D9]">Back</Button>
            <div className="grow h-full flex flex-col justify-center items-center gap-2">
              <h1 className="text-3xl text-[#000000] font-bold">
                Web Designer
              </h1>
              <div className="flex gap-2">
                <Button>Your matches</Button>
                <Button className="bg-[#000000]">Replies</Button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit">
            <div className="flex items-center gap-4 w-full h-fit bg-[#E3F6FC] p-6 font-semibold">
              <FilterBar
                selectedRating={selectedRating}
                onChangeRating={setSelectedRating}
                selectedLocation={selectedLocation}
                onChangeLocation={setSelectedLocation}
                selectedResponseTime={selectedResponseTime}
                onChangeResponseTime={setSelectedResponseTime}
              />
              <h2>{`${filteredDevelopers.length} matches`}</h2>
            </div>
            <div className="w-full h-fit bg-gradient-to-r from-[#8ED5EC] to-[#00AFE3] flex items-center p-6 justify-between">
              <h2 className="text-[1.375rem] font-light text-[#FFFFFF]">
                <span className="text-[#FFF600] font-semibold">
                  Recommended:{" "}
                </span>
                 Request replies from your{" "}
                <strong className="font-semibold">top 5 matches</strong> to hear
                back faster
              </h2>
              <Button className="bg-[#000000] text-xl">
                Request your best matches here
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section>

      </section>
    </main>
  );
}

export default App;
