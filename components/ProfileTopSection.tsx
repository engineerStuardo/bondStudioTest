import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Menu from "@/assets/images/Menu.svg";

export const ProfileTopSection = () => (
  <>
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
  </>
);

const styles = StyleSheet.create({
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
});
