import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DynamicDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function DynamicDrawerNavigation() {
  return (
    <NavigationContainer>
      <DynamicDrawer />
    </NavigationContainer>
  );
}
