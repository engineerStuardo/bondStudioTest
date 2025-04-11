import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import Menu from "../assets/images/Menu.svg";

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
      </SafeAreaView>
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
});
