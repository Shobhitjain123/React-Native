import * as React from "react";

import DynamicStackNavigation from "./src/navigators/stacks/DynamicStackNavigators";
import StaticStackNavigation from "./src/navigators/stacks/StaticStackNavigators";

import StaticBottomTabNavigator from "./src/navigators/tabs/StaticBottomTabNavigator";
import DynamicBottomTabNavigation from "./src/navigators/tabs/DynamicBottomTabNavigator";

export default function App() {
  return <DynamicBottomTabNavigation />;
}
