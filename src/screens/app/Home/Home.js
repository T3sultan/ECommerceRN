import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { Colors, Metrics } from "../../../theme";
let { width } = Dimensions.get("window");

const Home = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([
      "https://thumbs.dreamstime.com/b/online-shopping-e-commerce-ecommerce-internet-shop-concept-blue-symbol-computer-keyboard-84742205.jpg",
      "https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470__340.jpg",
      "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604__340.jpg",
      "https://media.istockphoto.com/photos/isolated-of-shipping-paper-boxes-inside-blue-shopping-cart-trolley-on-picture-id1306668349?b=1&k=20&m=1306668349&s=170667a&w=0&h=lyTN3Kasg206073u4GMW2VwBzil8juVpt3nsqithplw=",
      "https://images.all-free-download.com/images/graphiclarge/online_shop_promotional_facebook_post_digital_devices_presents_sketch_6919718.jpg",
      "https://www.pngmart.com/files/11/E-Commerce-PNG-Free-Download.png",
    ]);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={styles.swiperStyle}
          >
            {bannerData.map(item => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={{ uri: item }}
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
