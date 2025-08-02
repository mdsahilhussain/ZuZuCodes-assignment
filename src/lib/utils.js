import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getStarRating(rating, maxStars = 5) {
  console.log("getStarRating called with rating:", rating, "and maxStars:", maxStars);
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      console.log('half star');
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }
  return stars;
}
