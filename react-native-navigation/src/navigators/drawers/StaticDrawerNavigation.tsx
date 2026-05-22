import { createStaticNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";

const Drawer = createDrawerNavigator({
  screenOptions: {
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "red",
  },
  screens: {
    Home: HomeScreen,
    Details: Details,
    Profile: Profile,
  },
});
const Navigation = createStaticNavigation(Drawer);
const StaticDrawerNavigation = () => {
  return <Navigation />;
};

export default StaticDrawerNavigation;
