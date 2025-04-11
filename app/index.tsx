import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import Menu from "../assets/images/Menu.svg";
import Home from "../assets/images/Home.svg";
import Magic from "../assets/images/Magic.svg";

const { width } = Dimensions.get("screen");

const carouselItems = [
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

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={styles.menu}>
          <Menu />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/images/Avatar.png")} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Georgia</Text>
            <Text style={styles.text}>Let's start designing</Text>
          </View>
        </View>
        <View
          id="carousel-component"
          dataSet={{ kind: "basic-layouts", name: "left-align" }}
        >
          <Carousel
            width={width - 30}
            height={550}
            style={{
              width: "100%",
              height: "100%",
            }}
            autoPlay
            autoPlayInterval={3000}
            data={carouselItems}
            renderItem={({ item }) => (
              <ImageBackground
                source={item.backgroundImage}
                style={styles.background}
                resizeMode="cover"
              >
                <View style={styles.mainCardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  <View style={styles.cardButtonsContainer}>
                    <TouchableOpacity style={styles.primaryCardButton}>
                      <Text style={styles.primaryButtonText}>
                        Apply to my room
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryCardButton}>
                      <Text style={styles.secondaryButtonText}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton}>
          <Home />
        </TouchableOpacity>
        <TouchableOpacity style={styles.magicButton}>
          <Magic />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.brandImage}
        source={require("../assets/images/Brands.png")}
      />
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
  text: {
    color: "#31312B",
    fontSize: 24,
    fontWeight: "300",
  },
  menu: {
    alignSelf: "flex-end",
    marginRight: 30,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#848280",
    fontSize: 24,
  },
  textContainer: {
    marginLeft: -20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#1D1C19",
    width: 132,
    height: 52,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
    zIndex: 99999,
    overflow: "hidden",
  },
  homeButton: {
    backgroundColor: "#31312B",
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
  },
  magicButton: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
  },
  brandImage: {
    position: "absolute",
    bottom: -20,
    left: 20,
  },
  mainCardContainer: {
    padding: 20,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: 300,
    marginBottom: 10,
  },
  cardSubtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 300,
  },
  cardButtonsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  primaryCardButton: {
    backgroundColor: "#F1F0ED",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  primaryButtonText: {
    color: "#31312B",
    fontSize: 13,
    fontWeight: "400",
  },
  secondaryCardButton: {
    borderColor: "#AAA9A8",
    borderWidth: 1.5,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "400",
  },
});
