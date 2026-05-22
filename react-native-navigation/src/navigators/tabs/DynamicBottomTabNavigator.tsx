import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import HomeScreen from "../../screens/HomeScreen";

import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const DynamicBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "green",
        tabBarIcon: ({ focused, size, color }) => {
          const icon =
            route.name === "Home"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Details"
                ? focused
                  ? "information-circle"
                  : "information-circle-outline"
                : focused
                  ? "person"
                  : "person-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function DynamicBottomTabNavigation() {
  return (
    <NavigationContainer>
      <DynamicBottomTab />
    </NavigationContainer>
  );
}
