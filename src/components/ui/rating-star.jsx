import React from "react";
import OptimizedImage from "./optimized-image";
import { getStarRating } from "../../lib/utils";

const RatingStars = ({ rating }) => {
  const stars = getStarRating(rating);

  return (
    <div className="flex items-center gap-1">
      {stars.map((type, index) => {
        if (type === "full") {
          return (
            <OptimizedImage
              src={"/assets/icons/star-full.svg"}
              alt=""
              className="text-yellow-400 w-5 h-5 fill-yellow-400"
            />
          );
        } else if (type === "half") {
          return (
            <StarHalf
              key={index}
              className="text-yellow-400 w-5 h-5 fill-yellow-400"
            />
          );
        } else {
          return;
        }
      })}
    </div>
  );
};

export default RatingStars;
