import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import menuData from "../../../menuData";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Our Delicious Menu</Text>
        <Text style={styles.subtitle}>
          Authentic Sri Lankan flavors made with traditional recipes and fresh
          local ingredients
        </Text>
      </View>

      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/${item.id}`)}
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
  headerContainer: {
    padding: 20,
    paddingTop: 130,
    backgroundColor: "#F5D6AB",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E67E22",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#6D6D6D",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: "90%",
  },
  listContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginVertical: 6,
    marginHorizontal: 8,
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
});
