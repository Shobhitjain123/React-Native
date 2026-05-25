import { Drawer } from "expo-router/drawer";

// Drawer Navigation
export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
      <Drawer.Screen name="details" options={{ title: "Details" }} />
    </Drawer>
  );
}
