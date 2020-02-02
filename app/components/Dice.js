import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import Circle from "./Circle";

const Dice = () => {
  const max = 6;
  const min = 1;
  const [number, setNumber] = useState(5);
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    setNumber(0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNumber(randomNum);
    }, 600);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.box}>
        <View style={styles.boxLine}>
          <Circle index={1} number={number} />
          <Circle index={2} number={number} />
          <Circle index={3} number={number} />
        </View>
        <View style={styles.boxLine}>
          <Circle index={4} number={number} />
          <Circle index={5} number={number} />
          <Circle index={6} number={number} />
        </View>
        <View style={styles.boxLine}>
          <Circle index={7} number={number} />
          <Circle index={8} number={number} />
          <Circle index={9} number={number} />
        </View>
        {loading && (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Dice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  boxLine: {
    flexDirection: "row"
  },
  spinner: {
    position: "absolute"
  }
});
