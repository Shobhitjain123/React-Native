import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="red"
        translucent={false}
      />
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}
