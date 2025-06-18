import React from "react";
import { View, Text, Image, Button } from "react-native";
import menuData from "../../../menuData";
import { useLocalSearchParams } from "expo-router";
import { useFavorites } from "../../context/FavouriteContext";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const item = menuData.find((i) => i.id.toString() === id);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(item.id);

  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.description}</Text>
      <Button
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        onPress={() => {
          if (isFavorite) {
            removeFavorite(item.id);
          } else {
            addFavorite(item.id);
          }
        }}
      />
    </View>
  );
}
