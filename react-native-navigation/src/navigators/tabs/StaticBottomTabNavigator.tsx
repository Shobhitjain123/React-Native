import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Details: Details,
    Profile: Profile,
  },
});

const Navigation = createStaticNavigation(Tab);

const StaticBottomTabNavigator = () => {
  return <Navigation />;
};

export default StaticBottomTabNavigator;
