import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Colors, Images, Metrics } from "../../../theme";
let { width } = Dimensions.get("window");

const Home = () => {
  const slides = [
    {
      key: "one",
      title: "React Native ",
      subtitle: "React Native Learn once, write anywhere.",
      description:
        "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      image: Images.image1,
    },
    {
      key: "two",
      title: "Flutter",
      subtitle: "Build apps for any screen",
      description:
        "Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.",
      image: Images.image2,
    },
    {
      key: "three",
      title: "Ionic",
      subtitle: "One codebase. Any platform. Now in Vue.Angular.React.",
      description:
        "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web. ",
      image: Images.image3,
    },
    {
      key: "three",
      title: "Ionic",
      subtitle: "One codebase. Any platform. Now in Vue.Angular.React.",
      description:
        "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web. ",
      image: Images.image4,
    },
    {
      key: "three",
      title: "Ionic",
      subtitle: "One codebase. Any platform. Now in Vue.Angular.React.",
      description:
        "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web. ",
      image: Images.image5,
    },
    {
      key: "three",
      title: "Ionic",
      subtitle: "One codebase. Any platform. Now in Vue.Angular.React.",
      description:
        "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web. ",
      image: Images.image6,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            style={styles.swiperStyle}
          >
            {slides.map(item => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={item.image}
                  style={styles.bannerImage}
                />
              );
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    width: width,
    marginTop: Metrics.start,
    alignItems: "center",
  },
  swiperStyle: {
    height: Metrics.swiper,
  },
  bannerImage: {
    height: width / 2,
    width: width - 20,
    borderRadius: Metrics.start,
    margin: Metrics.halfBase,
  },
});
