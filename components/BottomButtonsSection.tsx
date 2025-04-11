import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Home from "@/assets/images/Home.svg";
import Magic from "@/assets/images/Magic.svg";

export const BottomButtonsSection = () => (
  <>
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
  </>
);

const styles = StyleSheet.create({
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
});
