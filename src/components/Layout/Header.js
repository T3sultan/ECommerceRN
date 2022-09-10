import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Metrics } from "../../theme";

let { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#333"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width / 5 - 20,
    backgroundColor: "#fff",
    marginTop: Metrics.base,
    elevation: Metrics.start,
    paddingVertical: Metrics.halfBase,
    paddingHorizontal: Metrics.halfBase,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: "85%",
    height: width / 7 - 12,
    backgroundColor: "#F2F3F4",
    marginHorizontal: Metrics.halfBase,
    borderRadius: Metrics.start,
    marginLeft: Metrics.start,
    fontSize: 15,
    paddingLeft: Metrics.start,
  },
});
