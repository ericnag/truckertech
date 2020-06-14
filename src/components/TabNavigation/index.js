import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const TabNavigation = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabView}>
        <Image
          tintColor="#9E280E"
          style={styles.tabImage}
          source={require("../../assets/location.png")}
        />
      </View>
      <View style={styles.tabView}>
        <Image
          tintColor="#9E280E"
          style={styles.tabImage}
          source={require("../../assets/money.png")}
        />
      </View>
      <View style={styles.tabView}>
        <Image
          tintColor="#9E280E"
          style={styles.tabImage}
          source={require("../../assets/cardiogram.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    borderTopColor: "#0E0E0E",
    borderTopWidth: 0.1,
  },
  tabView: {
    width: 90,
    height: 60,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
  tabImage: {
    width: 60,
    height: "100%",
  },
});
export default TabNavigation;
