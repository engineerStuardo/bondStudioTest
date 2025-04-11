export interface CarouselItem {
  title: string;
  subtitle: string;
  backgroundImage: number;
}

export const carouselMockData: CarouselItem[] = [
  {
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    backgroundImage: require("../assets/images/Slide1.png"),
  },
  {
    title: "Stoneworks",
    subtitle: "Bold design meets timeless beauty",
    backgroundImage: require("../assets/images/Slide2.png"),
  },
  {
    title: "Alabaster",
    subtitle: "Bold design meets timeless beauty",
    backgroundImage: require("../assets/images/Slide3.png"),
  },
];
