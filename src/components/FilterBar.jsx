import {
  ratingOptions,
  locationOptions,
  responseTimeOptions,
} from "../content";
import Dropdown from "./ui/drop-down";

export const FilterBar = ({
  selectedRating,
  onChangeRating,
  selectedLocation,
  onChangeLocation,
  selectedResponseTime,
  onChangeResponseTime,
}) => {
  return (
    <div className="w-full md:w-fit flex items-center gap-1 sm:gap-2 lg:gap-4">
      <Dropdown
        dropList={ratingOptions}
        title="All Ratings"
        value={selectedRating}
        onChange={onChangeRating}
      />
      <Dropdown
        dropList={locationOptions}
        title="All Locations"
        value={selectedLocation}
        onChange={onChangeLocation}
      />
      <Dropdown
        dropList={responseTimeOptions}
        title="All Response Times"
        value={selectedResponseTime}
        onChange={onChangeResponseTime}
      />
    </div>
  );
};

const sortingOptions = [
  { id: 1, value: "best-match", label: "Best Match" },
  { id: 2, value: "newest", label: "Sort by: Newest" },
  { id: 3, value: "oldest", label: "Sort by: Oldest" },
];
export const FilterSort = ({ selectedSort, onChangeSort }) => {
  return (
    <div className="hidden sm:block">
      <Dropdown
      dropList={sortingOptions}
      title="Sort by: Best match"
      value={selectedSort}
      onChange={onChangeSort}
    />
    </div>
  );
};
