import React from "react";
import { FlatList, Text, View } from "react-native";
// import menuData from "../../menuData";
// import { useRouterContext } from "expo-router";

export default function Favourites() {
  // const { favourites } = useRouterContext();
  // const favItems = menuData.filter((item) => favourites.includes(item.id));
  const favItems = [];
  if (favItems.length === 0) {
    return <Text>No favourites yet</Text>;
  }

  return (
    <FlatList
      data={favItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 16 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
