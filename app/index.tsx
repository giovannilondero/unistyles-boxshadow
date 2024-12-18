import { Image, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native-unistyles";

export default function HomeScreen() {
  return (
      <View style={styles.testBoxShadow} />
  );
}

const styles = StyleSheet.create({
  testBoxShadow: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: "auto",

    // Test 1: "java.lang.String cannot be cast to com.facebook.react.bridge.ReadableArray"
    // boxShadow: '5 5 5 0 rgba(255, 0, 0, 0.5)',
    // Test 2: "Value for color cannot be cast from String to double"
    // boxShadow: [
    //   {
    //     offsetX: 5,
    //     offsetY: 5,
    //     blurRadius: 5,
    //     spreadDistance: 0,
    //     color: 'rgba(255, 0, 0, 0.5)',
    //   },
    // ],
  },
});
