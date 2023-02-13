import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderComponent from "./OrderComponent";

const DeliveredOrders = () => {
  return (
    <View>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={"#36b336"}/>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={"#36b336"}/>
    </View>
  );
};

export default DeliveredOrders;

const styles = StyleSheet.create({});
