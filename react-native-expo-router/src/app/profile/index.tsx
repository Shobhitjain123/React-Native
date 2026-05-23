import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View>
      <Text>Profile Page</Text>
      <Link href="/profile/details">Go to Profile Details</Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
