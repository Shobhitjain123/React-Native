import { Stack } from "expo-router";

// import { Tabs } from "expo-router";
// import { Pressable, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}

// import { NativeTabs } from "expo-router/unstable-native-tabs";

// export default function TabLayout() {
//   return (
//     <NativeTabs>
//       <NativeTabs.Trigger name="index">
//         <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="about">
//         <NativeTabs.Trigger.Icon sf="gear" md="settings" />
//         <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="details">
//         <NativeTabs.Trigger.Icon sf="1.magnifyingglass" md="3d_rotation" />
//         <NativeTabs.Trigger.Label>Detail</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }

// function MyTabBar({
//   state,
//   descriptors,
//   navigation,
// }: {
//   state: any;
//   descriptors: any;
//   navigation: any;
// }) {
//   return (
//     <View style={{ flexDirection: "row", padding: 10 }}>
//       {state.routes.map((route: any, index: number) => {
//         const { options } = descriptors[route.key];
//         console.log("options", options);
//         const isFocused = state.index === index;

//         if (options.href === null || !options.title) return null;

//         return (
//           <Pressable
//             key={route.key}
//             onPress={() => navigation.navigate(route.name)}
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <Text style={{ fontWeight: isFocused ? "bold" : "normal" }}>
//               {options.title}
//             </Text>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// }

// export default function TabLayout() {
//   return (
//     <Tabs tabBar={(props) => <MyTabBar {...props} />}>
//       <Tabs.Screen name="index" options={{ title: "Home" }} />
//       <Tabs.Screen name="about" options={{ title: "About" }} />
//       <Tabs.Screen name="details" options={{ title: "Details" }} />
//     </Tabs>
//   );
// }
