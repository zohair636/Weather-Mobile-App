import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Weather from "./src/components/Weather/Weather";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./src/components/StyleSheet/Weather";

const App = () => {
  return (
    <LinearGradient
      colors={["#005C97", "#005C97", "#363795"]}
      style={styles.weatherBgContainer}
    >
      <Weather />
    </LinearGradient>
  );
};

export default App;
