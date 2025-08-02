import { ratingOptions, locationOptions, responseTimeOptions } from "../content";
import Dropdown from "./ui/drop-down";

const FilterBar = ({
  selectedRating,
  onChangeRating,
  selectedLocation,
  onChangeLocation,
  selectedResponseTime,
  onChangeResponseTime,
}) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
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

export default FilterBar;
