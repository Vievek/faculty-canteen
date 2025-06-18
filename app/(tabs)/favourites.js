import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import menuData from "../../menuData";
import { useRouter } from "expo-router";
import { useFavorites } from "../context/FavouriteContext";

export default function Favourites() {
  const { favorites } = useFavorites();
  const router = useRouter();
  const favItems = menuData.filter((item) => favorites.includes(item.id));

  if (favItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your favorites list is empty</Text>
        <Text style={styles.emptySubtext}>
          Tap the ♡ icon on menu items to save them
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Your Favorites</Text>
      <FlatList
        data={favItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/(menu)/${item.id}`)}
            style={styles.itemContainer}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>LKR {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFF9F0",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#E67E22",
    padding: 20,
    paddingBottom: 10,
    marginTop: 70,
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: "#E67E22",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#E67E22",
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#F5D6AB",
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
  },
  itemName: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 6,
    color: "#2C3E50",
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#E67E22",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF9F0",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#6D6D6D",
    textAlign: "center",
    maxWidth: "80%",
  },
});
