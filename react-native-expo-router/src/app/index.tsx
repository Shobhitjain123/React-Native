import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/profile">Go to Profile</Link>
      <Link href="/123">Go to User Id Page</Link>
      <Link href="/docs/123">Go to Dynamic Docs Page</Link>
      <Link href="/docs/123/456">Go to Dynamic Docs Page</Link>
      <Link href="/docs/123/456/789">Go to Dynamic Docs Page</Link>
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
