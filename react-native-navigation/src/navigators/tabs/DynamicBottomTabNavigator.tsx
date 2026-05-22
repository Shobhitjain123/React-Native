import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import HomeScreen from "../../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

// Dynamic Home Stack
const HomeStack = createNativeStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

const DynamicBottomTab = () => {
  return (
    <Tab.Navigator>
      {/* Stack inside a Tab Navigation */}
      <Tab.Screen name="Home" component={HomeStackNavigation} />
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
