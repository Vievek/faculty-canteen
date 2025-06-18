import React from "react";
import { View, Text, Image, Button } from "react-native";
import menuData from "../../../menuData";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { useRouterContext } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const item = menuData.find((i) => i.id.toString() === id);
  // const { favourites, setFavourites } = useRouterContext();

  // const isFavourite = favourites.includes(item.id);
  // Add save/unsave logic here (see next step)
  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.description}</Text>
      {/* <Button
        title={isFavourite ? "Unsave" : "Save"}
        onPress={() => {
          if (isFavourite) {
            setFavourites(favourites.filter((favId) => favId !== item.id));
          } else {
            setFavourites([...favourites, item.id]);
          }
        }}
      /> */}
    </View>
  );
}
