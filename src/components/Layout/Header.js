import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Colors, Metrics } from "../../theme";
let { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Ionicons name="menu" size={25} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="search..."
          placeholderTextColor="#333"
        />
        <TouchableOpacity>
          <AntDesign name="search1" size={25} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width / 5 - 20,
    backgroundColor: Colors.white,
    marginTop: Metrics.base,
    elevation: 2,
    paddingVertical: Metrics.halfBase,
    paddingHorizontal: Metrics.halfBase,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
  },
  searchInput: {
    width: width - 80,
    height: width / 8 - 12,
    backgroundColor: Colors.HoneyDew,
    marginHorizontal: Metrics.halfBase,
    borderRadius: Metrics.start,
    marginLeft: Metrics.start,
    fontSize: 15,
    paddingLeft: Metrics.start,
  },
});
