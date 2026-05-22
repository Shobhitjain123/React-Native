import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
const Details = ({ route }: any) => {
  const { name } = route.params;
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Details</Text>
      <Text>{name}</Text>
      <Button onPress={() => navigation.navigate("Profile")}>
        Go To Profile
      </Button>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
