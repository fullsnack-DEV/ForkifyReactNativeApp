import React from "react";
import { View, Text } from "react-native";
import color from "../Config/color";
import defaultstyle from "../Config/style";

export default function ({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultstyle.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
