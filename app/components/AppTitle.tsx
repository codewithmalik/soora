import { View, Image, StyleSheet, Text, TextStyle } from "react-native";
import React from "react";

type AppTitleProps = {
  tag: string;
  tag2: string;
  title: string;
};

const AppTitle = (props: AppTitleProps) => {
  return (
    <View>
      <View style={styles.firstRow}>
        <View style={styles.firstRowFirstItem} />
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
      <Text style={styles.textHeaderStyle}>
        {props.tag}
        {"\n"} {props.tag2}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  firstRowFirstItem: {
    backgroundColor: "#000000",
    height: 1,
    width: 17,
    marginRight: 10,
  },

  textStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    display: "flex",
    alignItems: "flex-end",
    color: "#0B0B0B",
  },
  textHeaderStyle: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 44,
    display: "flex",
    alignItems: "flex-end",
    color: "#0B0B0B",
    textAlign: "center",
    marginTop: 8,
  },

  thirdRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    gap: 10,
  },

  itemRight: {
    marginRight: 10,
  },

  downloadAppImageStyle: { height: 38.8, width: 134.19 },
});

export default AppTitle;
