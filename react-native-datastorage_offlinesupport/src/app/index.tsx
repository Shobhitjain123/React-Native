// import { useState } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// export default function Index() {
//   const [data, setData] = useState("");

//   const saveData = async () => {
//     await AsyncStorage.setItem("user", "sj");
//   };

//   const getData = async () => {
//     const data = await AsyncStorage.getItem("user");
//     setData(data!);
//   };

//   const removeData = async () => {
//     await AsyncStorage.removeItem("user");
//   };

//   const clearStorage = async () => {
//     await AsyncStorage.clear();
//     setData("");
//   };

//   const getKeys = async () => {
//     const keys = await AsyncStorage.getAllKeys();
//     console.log(keys);
//   };

//   const saveMultipleData = async () => {
//     await AsyncStorage.multiSet([
//       ["user1", "sj1"],
//       ["user2", "sj2"],
//     ]);
//   };

//   const getMultipleData = async () => {
//     const data = await AsyncStorage.multiGet(["user1", "user2"]);
//     console.log(data);
//   };

//   const removeMultipleData = async () => {
//     await AsyncStorage.multiRemove(["user1", "user2"]);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Edit src/app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
const index = () => {
  const [output, setOutput] = useState("");

  const saveData = async () => {
    await SecureStore.setItemAsync("token", "123");
    setOutput("Token saved successfully");
  };

  const getData = async () => {
    const data = await SecureStore.getItemAsync("token");
    setOutput(data!);
  };

  const removeData = async () => {
    await SecureStore.deleteItemAsync("token");
    setOutput("Token removed successfully");
  };

  const clearStorage = async () => {
    await SecureStore.deleteItemAsync("token");
    setOutput("Storage cleared successfully");
  };

  const checkAvailable = async () => {
    const isAvailable = await SecureStore.isAvailableAsync();
    setOutput(
      isAvailable ? "Storage is available" : "Storage is not available",
    );
  };

  return (
    <View>
      <Text>{output}</Text>
      <Button title="Save Data" onPress={saveData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
      <Button title="Clear Storage" onPress={clearStorage} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
