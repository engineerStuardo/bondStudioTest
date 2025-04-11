import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselItem } from "@/constants/carouselMockData";

interface Props {
  data: CarouselItem[];
}

const { width } = Dimensions.get("screen");

export const CarouselMiddleSection = ({ data }: Props) => {
  return (
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
        data={data}
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
                  <Text style={styles.primaryButtonText}>Apply to my room</Text>
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
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
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
