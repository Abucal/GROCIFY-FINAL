import { View, Text, Pressable } from "react-native";
import React from "react";
import { useGroceryStore } from "@/store/grocery-store";
import { useTheme } from "@/providers/ThemProvider";
import { FontAwesome6 } from "@expo/vector-icons";

const CompletedItems = () => {
  const { removeItem, togglePurchased, items } = useGroceryStore();
  const colors = useTheme();
  const completedITems = items.filter((item) => item.purchased);
  if (!completedITems.length) return null;
  return (
    <View
      className="mt-3 rounded-3xl border p-4"
      style={{
        backgroundColor: colors.secondary,
        borderColor: colors.border,
      }}
    >
      <Text
        className="text-sm font-semibold uppercase tracking-[1px] "
        style={{ color: colors.secondaryForeground }}
      >
        Completed
      </Text>
      {completedITems.map((item) => (
        <View
          key={item.id}
          className="mt-3 flex-row items-center justify-between rounded-2xl border px-3 py-2"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <View className="flex-row items-center gap-2">
            <Pressable
              onPress={() => togglePurchased(item.id)}
              className="size-6 items-center justify-center rounded-full"
              style={{ backgroundColor: colors.success }}
            >
              <FontAwesome6 name="check" size={12} color="#ffffff" />
            </Pressable>
            <Text
              className="text-base line-through"
              style={{ color: colors.mutedForeground }}
            >
              {item.name}
            </Text>
          </View>

          <Pressable
            className="size-9 items-center justify-center rounded-xl "
            style={{ backgroundColor: colors.destructive }}
            onPress={() => removeItem(item.id)}
          >
            <FontAwesome6 name="trash" size={13} color="#d45f58" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default CompletedItems;
