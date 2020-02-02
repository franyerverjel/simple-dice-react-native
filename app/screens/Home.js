import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Dice from "../components/Dice";

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Dice />
  </SafeAreaView>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
