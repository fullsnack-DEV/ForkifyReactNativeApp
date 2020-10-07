import { Platform } from "react-native";

import color from "./color";

export default {
  text: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

//Platform specific API is used to determine the  platform (OS)
