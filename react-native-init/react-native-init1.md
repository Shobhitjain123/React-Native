<!-- import { useState } from "react";
import { Text, View, Image, TextInput, Pressable } from "react-native";

export default function HomeScreen() {
const [name, setName] = useState("");
return (
<View>
<Text numberOfLines={3}>
lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</Text>
<Image
source={require("../assets/images/icon.png")}
style={{ width: 100, height: 100 }}
blurRadius={100}
/>
<TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
<Text>{name}</Text>

      <Pressable
        onPress={() => alert("Clicked")}
        style={({ pressed }) => ({ backgroundColor: pressed ? "red" : "blue" })}
      >
        <Text>Click me</Text>
      </Pressable>
    </View>

);
} -->
