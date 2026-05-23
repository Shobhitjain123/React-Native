import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserIdPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>UserIdPage for user with id: {id}</Text>
    </View>
  );
};

export default UserIdPage;

const styles = StyleSheet.create({});
