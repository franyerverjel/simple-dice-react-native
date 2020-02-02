import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

const Circle = props => {
  const { index, number } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    index === 1 && setIsActive([4, 5, 6].includes(number));
    index === 3 && setIsActive([2, 3, 4, 5, 6].includes(number));
    index === 4 && setIsActive([6].includes(number));
    index === 5 && setIsActive([1, 3, 5].includes(number));
    index === 6 && setIsActive([6].includes(number));
    index === 7 && setIsActive([2, 3, 4, 5, 6].includes(number));
    index === 9 && setIsActive([4, 5, 6].includes(number));
    (index === 2 || index == 8) && setIsActive(false);
  }, [number]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActive ? "#000" : "#fff"
      }}
    ></View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 100,
    margin: 10
  }
});
