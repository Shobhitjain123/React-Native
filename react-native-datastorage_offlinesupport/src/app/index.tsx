import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Index() {
  const [data, setData] = useState("");

  const saveData = async () => {
    await AsyncStorage.setItem("user", "sj");
  };

  const getData = async () => {
    const data = await AsyncStorage.getItem("user");
    setData(data!);
  };

  const removeData = async () => {
    await AsyncStorage.removeItem("user");
  };

  const clearStorage = async () => {
    await AsyncStorage.clear();
    setData("");
  };

  const getKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
  };

  const saveMultipleData = async () => {
    await AsyncStorage.multiSet([
      ["user1", "sj1"],
      ["user2", "sj2"],
    ]);
  };

  const getMultipleData = async () => {
    const data = await AsyncStorage.multiGet(["user1", "user2"]);
    console.log(data);
  };

  const removeMultipleData = async () => {
    await AsyncStorage.multiRemove(["user1", "user2"]);
  };

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
