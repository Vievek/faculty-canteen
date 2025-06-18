import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import menuData from "../../../menuData";
import { useLocalSearchParams } from "expo-router";
import { useFavorites } from "../../context/FavouriteContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const item = menuData.find((i) => i.id.toString() === id);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.includes(item.id);

  return (
    <View style={styles.screenContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />

      <View style={styles.contentContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>LKR {item.price}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.favoriteButton,
          isFavorite
            ? styles.favoriteButtonActive
            : styles.favoriteButtonInactive,
        ]}
        onPress={() => {
          if (isFavorite) {
            removeFavorite(item.id);
          } else {
            addFavorite(item.id);
          }
        }}
        activeOpacity={0.7}
      >
        <FontAwesome
          name={isFavorite ? "heart" : "heart-o"}
          size={20}
          color={isFavorite ? "#FFFFFF" : "#E67E22"}
        />
        <Text
          style={[
            styles.favoriteButtonText,
            isFavorite ? styles.favoriteButtonTextActive : {},
          ]}
        >
          {isFavorite ? "Saved to Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFF9F0",
    padding: 16,
  },
  itemImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 150,
    shadowColor: "#E67E22",
    borderWidth: 1,
    borderColor: "#F5D6AB",
  },
  contentContainer: {
    marginBottom: 30,
  },
  itemName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#E67E22",
    marginBottom: 16,
  },
  itemDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6D6D6D",
  },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#E67E22",
  },
  favoriteButtonActive: {
    backgroundColor: "#E67E22",
  },
  favoriteButtonInactive: {
    backgroundColor: "#FFFFFF",
  },
  favoriteButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  favoriteButtonTextActive: {
    color: "#FFFFFF",
  },
});
