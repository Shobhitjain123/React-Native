import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Details</Text>
      <Button onPress={() => navigation.goBack()}>Go back to Home</Button>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
