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

//////////////////////////////////////////////////////////////////////////
// import { Button, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import * as SecureStore from "expo-secure-store";
// const index = () => {
//   const [output, setOutput] = useState("");

//   const saveData = async () => {
//     await SecureStore.setItemAsync("token", "123");
//     setOutput("Token saved successfully");
//   };

//   const getData = async () => {
//     const data = await SecureStore.getItemAsync("token");
//     setOutput(data!);
//   };

//   const removeData = async () => {
//     await SecureStore.deleteItemAsync("token");
//     setOutput("Token removed successfully");
//   };

//   const clearStorage = async () => {
//     await SecureStore.deleteItemAsync("token");
//     setOutput("Storage cleared successfully");
//   };

//   const checkAvailable = async () => {
//     const isAvailable = await SecureStore.isAvailableAsync();
//     setOutput(
//       isAvailable ? "Storage is available" : "Storage is not available",
//     );
//   };

//   return (
//     <View>
//       <Text>{output}</Text>
//       <Button title="Save Data" onPress={saveData} />
//       <Button title="Get Data" onPress={getData} />
//       <Button title="Remove Data" onPress={removeData} />
//       <Button title="Clear Storage" onPress={clearStorage} />
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

//////////////////////////////////////////////////////////////////////////
/// Expo SQLite Example
// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import * as SQLite from "expo-sqlite";
// import { SafeAreaView } from "react-native-safe-area-context";

// const index = () => {
//   const [output, setOutput] = useState("");
//   const db = SQLite.openDatabaseSync("default.db");

//   const createTable = async () => {
//     await db.execAsync(`
//       CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)
//     `);

//     setOutput("Table created successfully");
//   };

//   const insertData = async () => {
//     const result = await db.runAsync(
//       "INSERT INTO users (name, age) VALUES (?, ?)",
//       "Shobhit",
//       26,
//     );
//     setOutput(`Data inserted successfully: ${result.lastInsertRowId}`);
//   };

//   const getUsers = async () => {
//     const result = await db.getAllAsync("Select * from users");
//     setOutput(JSON.stringify(result, null, 2));
//   };
//   const getFirstUser = async () => {
//     const result = await db.getFirstAsync("Select * from users");
//     setOutput(JSON.stringify(result));
//   };

//   const updateUser = async () => {
//     const result = await db.runAsync(
//       "Update users Set age = ? where id = ?",
//       21,
//       1,
//     );
//   };

//   const deleteUser = async () => {
//     const result = await db.runAsync("DELETE FROM users WHERE id = ?", 1);
//     setOutput(`Data deleted successfully: ${result.changes}`);
//   };

//   const dropTable = async () => {
//     await db.runAsync("DROP TABLE IF EXISTS users");
//     setOutput("Table dropped successfully");
//   };
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Text>{output}</Text>
//         <Button title="Create Table" onPress={createTable} />
//         <Button title="Insert Data" onPress={insertData} />
//         <Button title="Get Users" onPress={getUsers} />
//         <Button title="Get First User" onPress={getFirstUser} />
//         <Button title="Update User" onPress={updateUser} />
//         <Button title="Delete User" onPress={deleteUser} />
//         <Button title="Drop Table" onPress={dropTable} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { File, Directory, Paths } from "expo-file-system";

const index = () => {
  const [output, setOutput] = React.useState("");

  const demoFile = new File(Paths.document, "demo.txt");
  const copiedFile = new File(Paths.document, "demo-copy.txt");

  const writeFile = async () => {
    demoFile.write("Hello, world!");
    setOutput("File written successfully");
  };

  const createFile = async () => {
    demoFile.create();
    setOutput("File created successfully");
  };

  const readFile = async () => {
    const content = await demoFile.text();
    setOutput(content);
    return content;
  };

  const appendFile = async () => {
    const oldData = await demoFile.text();
    demoFile.write(oldData + "\n" + "Welcome to the file system demo");
    setOutput("File appended successfully");
  };

  const copyFile = async () => {
    // Delete the destination if it already exists
    if (copiedFile.exists) {
      copiedFile.delete();
    }
    demoFile.copy(copiedFile);
    setOutput("File copied successfully");
  };

  const moveFile = () => {
    demoFile.move(copiedFile);
    setOutput("File moved successfully");
  };

  const deleteFile = () => {
    demoFile.delete();
    setOutput("File deleted successfully");
  };

  const getCopiedFile = async () => {
    const content = await copiedFile.text();
    setOutput(content);
    return content;
  };

  const getFileInfo = () => {
    const info = {
      name: demoFile.name,
      size: demoFile.size,
      uri: demoFile.uri,
      type: demoFile.type,
      exists: demoFile.exists,
    };
    setOutput(JSON.stringify(info, null, 2));
  };

  const demoDirectory = new Directory(Paths.document, "demo-directory");

  const createDirectory = () => {
    demoDirectory.create();
    setOutput("Directory created successfully");
  };

  const readDirectory = () => {
    const files = demoDirectory.list();
    setOutput(JSON.stringify(files, null, 2));
  };

  const deleteDirectory = () => {
    demoDirectory.delete();
    setOutput("Directory deleted successfully");
  };

  return (
    <View>
      <Text>{output}</Text>
      <Button title="Write File" onPress={writeFile} />
      <Button title="Create File" onPress={createFile} />
      <Button title="Read File" onPress={readFile} />
      <Button title="Append File" onPress={appendFile} />
      <Button title="Copy File" onPress={copyFile} />
      <Button title="Move File" onPress={moveFile} />
      <Button title="Delete File" onPress={deleteFile} />
      <Button title="Get File Info" onPress={getFileInfo} />
      <Button title="Create Directory" onPress={createDirectory} />
      <Button title="Read Directory" onPress={readDirectory} />
      <Button title="Delete Directory" onPress={deleteDirectory} />
      <Button title="Get Copied File" onPress={getCopiedFile} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
