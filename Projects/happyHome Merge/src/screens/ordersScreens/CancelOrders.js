import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderComponent from "./OrderComponent";

const CancelOrders = () => {
  return (
    <View>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={'#DD2326'}/>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={'#DD2326'}/>
    </View>
  );
};

export default CancelOrders;

const styles = StyleSheet.create({});
