import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      },
    },
    Details: Details,
    Profile: Profile,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigation() {
  return <Navigation />;
}
