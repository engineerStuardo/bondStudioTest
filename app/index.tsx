import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import Menu from "../assets/images/Menu.svg";
import Home from "../assets/images/Home.svg";
import Magic from "../assets/images/Magic.svg";
import { ProfileTopSection } from "@/components/ProfileTopSection";
import { BottomButtonsSection } from "@/components/BottomButtonsSection";
import { CarouselMiddleSection } from "@/components/CarouselMiddleSection";
import { carouselMockData } from "@/constants/carouselMockData";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ProfileTopSection />
        <CarouselMiddleSection data={carouselMockData} />
      </SafeAreaView>
      <BottomButtonsSection />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
