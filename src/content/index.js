export const dummyDeveloperData = [
  {
    id: 1,
    src: "/images/image-1.webp",
    alt: "Mountain View",
    companyName: "Starlink pvt. ltd",
    companyLocation: "8.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 125,
    },
    responseTime: "within an hour",
  },
  {
    id: 2,
    src: "/images/image-2.webp",
    alt: "Mountain View",
    companyName: "Digtial web pvt. ltd",
    companyLocation: "Multiple Locations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 124,
    },
    responseTime: "within a day",
  },
  {
    id: 3,
    src: "/images/image-3.webp",
    alt: "Mountain View",
    companyName: "Canva pvt. ltd",
    companyLocation: "5.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 120,
    },
    responseTime: "within a week",
  },
  {
    id: 4,
    src: "/images/image-4.webp",
    alt: "Mountain View",
    companyName: "Bees pvt. ltd",
    companyLocation: "3.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 121,
    },
    responseTime: "quick to respond",
  },
  {
    id: 5,
    src: "/images/image-5.webp",
    alt: "Mountain View",
    companyName: "ABC pvt. ltd",
    companyLocation: "Multiple Locations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 126,
    },
    responseTime: "within an hour",
  },
  {
    id: 6,
    src: "/images/image-1.webp",
    alt: "Mountain View",
    companyName: "Starlink pvt. ltd",
    companyLocation: "8.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 2.5,
      count: 125,
    },
    responseTime: "within a day",
  },
  {
    id: 7,
    src: "/images/image-2.webp",
    alt: "Mountain View",
    companyName: "Digtial web pvt. ltd",
    companyLocation: "Multiple Locations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 124,
    },
    responseTime: "within a week",
  },
  {
    id: 8,
    src: "/images/image-3.webp",
    alt: "Mountain View",
    companyName: "Canva pvt. ltd",
    companyLocation: "5.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 120,
    },
    responseTime: "quick to respond",
  },
  {
    id: 9,
    src: "/images/image-4.webp",
    alt: "Mountain View",
    companyName: "Bees pvt. ltd",
    companyLocation: "3.6 miles away",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 5,
      count: 120,
    },
    responseTime: "within an hour",
  },
  {
    id: 10,
    src: "/images/image-5.webp",
    alt: "Mountain View",
    companyName: "ABC pvt. ltd",
    companyLocation: "Multiple Locations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    service: ["Full website design", "Banner design", "New pages"],
    rating: {
      value: 3.5,
      count: 120,
    },
    responseTime: "within a day",
  },
];

const allRatings = [
  ...new Set(dummyDeveloperData?.map((dev) => dev.rating.value)),
];
const allLocations = [
  ...new Set(dummyDeveloperData?.map((dev) => dev.companyLocation)),
];
const allResponseTimes = [
  "Within an hour",
  "Within a day",
  "Within a week",
  "Quick to respond",
];

export const ratingOptions = allRatings.map((r, i) => ({
  id: i,
  value: r,
  label: `⭐ ${r}+ Stars`,
}));

export const locationOptions = allLocations.map((loc, i) => ({
  id: i,
  value: loc.toLowerCase(),
  label: loc,
}));

export const responseTimeOptions = allResponseTimes.map((time, i) => ({
  id: i,
  value: time.toLowerCase(),
  label: time,
}));
