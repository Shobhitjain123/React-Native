import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const DynamicDocs = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>DynamicDocs</Text>
      <Text>{Array.isArray(slug) ? slug.join("/ ") : slug}</Text>
    </View>
  );
};

export default DynamicDocs;

const styles = StyleSheet.create({});
