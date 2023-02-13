import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderComponent from "./OrderComponent";
import Filter from "../../components/Filter";

const PendingOrders = () => {
  return (
    <View>
      <OrderComponent orderNum={"#AN7522"} OrderDate={"05-Feb-2023"} color={"orange"} />
      <OrderComponent orderNum={"#AM7599"} OrderDate={"06-Feb-2023"} color={"orange"} />
    </View>
  );
};

export default PendingOrders;

const styles = StyleSheet.create({});
