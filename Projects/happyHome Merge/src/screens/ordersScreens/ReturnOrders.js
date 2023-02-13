import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderComponent from "./OrderComponent";

const ReturnOrders = () => {
  return (
    <View>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={"#bbb"}/>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={"#bbb"}/>
    </View>
  );
};

export default ReturnOrders;

const styles = StyleSheet.create({});
