import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ITEM_COUNT = 120;

const items = Array.from({ length: ITEM_COUNT }, (_, index) => {
  const n = index + 1;
  return { id: String(n), name: `Item ${n}` };
});

type Item = { id: string; name: string };

const ListItem = React.memo(({ item }: { item: Item }) => {
  useEffect(() => {
    console.log(`MOUNTED: ${item.id}`);
    return () => {
      console.log(`UNMOUNTED: ${item.id}`);
    };
  }, [item.id]);

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
});

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        initialNumToRender={5}
        windowSize={10}
        removeClippedSubviews
        renderItem={({ item }) => <ListItem item={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, backgroundColor: "red" }} />
        )}
        ListHeaderComponent={() => (
          <View style={{ height: 10, backgroundColor: "blue" }} />
        )}
        ListFooterComponent={() => (
          <View style={{ height: 10, backgroundColor: "green" }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    marginHorizontal: 16,
    backgroundColor: "#e0f0ff",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
