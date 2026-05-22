import * as React from "react";

import DynamicStackNavigation from "./src/navigators/stacks/DynamicStackNavigators";
import StaticStackNavigation from "./src/navigators/stacks/StaticStackNavigators";

import StaticBottomTabNavigator from "./src/navigators/tabs/StaticBottomTabNavigator";
import DynamicBottomTabNavigation from "./src/navigators/tabs/DynamicBottomTabNavigator";

import StaticTopTabNavigator from "./src/navigators/tabs/StaticTopTabNavigator";

import StaticDrawerNavigation from "./src/navigators/drawers/StaticDrawerNavigation";
import DynamicDrawerNavigation from "./src/navigators/drawers/DynamicDrawerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DynamicDrawerNavigation />
    </SafeAreaView>
  );
}
