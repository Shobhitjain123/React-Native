import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import HomeScreen from "../../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "green",
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({ focused, size, color }) => {
          const icon = focused ? "home" : "home-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      },
    },
    Details: {
      screen: Details,
      options: {
        tabBarIcon: ({ focused, size, color }) => {
          const icon = focused
            ? "information-circle"
            : "information-circle-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      },
    },
    Profile: {
      screen: Profile,
      options: {
        tabBarBadge: 3,
        tabBarBadgeStyle: {
          backgroundColor: "tomato",
          color: "white",
        },
        tabBarIcon: ({ focused, size, color }) => {
          const icon = focused ? "person" : "person-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      },
    },
  },
});

const Navigation = createStaticNavigation(Tab);

const StaticBottomTabNavigator = () => {
  return <Navigation />;
};

export default StaticBottomTabNavigator;
