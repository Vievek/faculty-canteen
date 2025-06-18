import React from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import menuData from "../../../menuData";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();
  return (
    <FlatList
      data={menuData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/${item.id}`)}>
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
