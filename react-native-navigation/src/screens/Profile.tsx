import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
const Profile = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
