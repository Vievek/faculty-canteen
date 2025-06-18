import React from "react";
import { FlatList, Text, View } from "react-native";
import menuData from "../../menuData";
import { useRouter } from "expo-router";
import { TouchableOpacity, Image } from "react-native";
import { useFavorites } from "../context/FavouriteContext";

export default function Favourites() {
  const { favorites } = useFavorites();
  const router = useRouter();

  const favItems = menuData.filter((item) => favorites.includes(item.id));

  if (favItems.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No favourites yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/(menu)/${item.id}`)}>
          <View style={{ flexDirection: "row", padding: 16 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, marginRight: 16 }}
            />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
