import { createStaticNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import HomeScreen from "../../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator({
  screens: {
    Home: HomeScreen,
    Details: Details,
    Profile: Profile,
  },
});

const Navigation = createStaticNavigation(Tab);

const StaticTopTabNavigator = () => {
  return <Navigation />;
};

export default StaticTopTabNavigator;
