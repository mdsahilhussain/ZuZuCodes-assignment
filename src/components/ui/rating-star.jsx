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
              key={index}
              src={"/icons/star-full.svg"}
              alt=""
              className="text-yellow-400 w-3.5 sm:w-5 h-3.5 sm:h-5 fill-yellow-400"
            />
          );
        } else if (type === "half") {
          return (
            <OptimizedImage
              key={index}
              src={"/icons/star-half.svg"}
              alt=""
              className="text-yellow-400 w-3.5 sm:w-5 h-3.5 sm:h-5 fill-yellow-400"
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
