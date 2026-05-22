import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";

const Stack = createNativeStackNavigator();

const DynamicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Home",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function DynamicStackNavigation() {
  return (
    <NavigationContainer>
      <DynamicStack />
    </NavigationContainer>
  );
}
