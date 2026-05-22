import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

// navigate - Add a new screen to the stack by the name of the screen
// push - Always add a new screen to the stack by the name of the screen
// replace - Replace the current screen with a new screen
// pop - Remove the current screen from the stack
// popTo - Remove all screens from the stack except the first one
// popToTop - Remove all screens from the stack
// reset - Remove all screens from the stack and add a new screen
// goBack - Go back to the previous screen
// goBackTo - Go back to a specific screen
// goBackToTop - Go back to the first screen
