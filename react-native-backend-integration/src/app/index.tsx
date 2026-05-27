// import { useState } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";

// export default function Index() {
//   const [output, setOutput] = useState("");
//   const callApi = async (label: string, url: string, options?: RequestInit) => {
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       setOutput(`${label}: \n\n ${JSON.stringify(data)}`);
//     } catch (error) {
//       setOutput(`${label}: \n\n ${JSON.stringify(error)}`);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Get Users"
//         onPress={() => callApi("Get Users: /api/users", "/api/users")}
//       />
//       <Button
//         title="Add User"
//         onPress={() => {
//           // const ts = Date.now();
//           callApi("Add User: /api/users", "/api/users", {
//             method: "POST",
//             body: JSON.stringify({ name: "Adam", email: `adam1@example.com` }),
//             headers: { "Content-Type": "application/json" },
//           });
//         }}
//       />
//       <Button
//         title="Get User By Id"
//         onPress={() => callApi("Get User By Id: /api/users/4", "/api/users/4")}
//       />

//       <Text>{output}</Text>
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

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const IndexScreen = () => {
  useEffect(() => {
    fetch("http://192.168.29.178:3000/api/v1/users")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>IndexScreen</Text>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
