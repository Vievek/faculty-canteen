import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="(menu)"
        options={{
          title: "menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="cutlery" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "favourites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="heart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
