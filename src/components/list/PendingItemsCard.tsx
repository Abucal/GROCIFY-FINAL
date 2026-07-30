import { View, Text, Pressable } from "react-native";
import React from "react";
import { GroceryItem, useGroceryStore } from "@/store/grocery-store";
import { useTheme } from "@/providers/ThemProvider";
import { FontAwesome6 } from "@expo/vector-icons";

const PendingItemsCard = ({ item }: { item: GroceryItem }) => {
  const colors = useTheme();

  const PriorityPillBg = {
    low: colors.priorityLow,
    medium: colors.priorityMedium,
    high: colors.priorityHigh,
  };

  const PriorityPillText = {
    low: colors.priorityLowForeground,
    medium: colors.priorityMediumForeground,
    high: colors.priorityHighForeground,
  };

  const { removeItem, updateQuantity, togglePurchased } = useGroceryStore();

  return (
    <View
      className="rounded-3xl border p-4"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <View className="flex-row items-start gap-3">
        <Pressable
          className="mt-1 size-6 items-center justify-center rounded-full border "
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
          onPress={() => togglePurchased(item.id)}
        ></Pressable>
        <View className="flex-1">
          <View className="flex-row items-center justify-between gap-2">
            <Text
              className="flex-1 text-lg font-semibold"
              style={{ color: colors.cardForeground }}
            >
              {item.name}
            </Text>
            <View
              className="rounded-full px-3 py-1 "
              style={{
                backgroundColor: PriorityPillBg[item.priority],
              }}
            >
              <Text
                className="text-xs font-bold uppercase "
                style={{ color: PriorityPillText[item.priority] }}
              >
                {item.priority}
              </Text>
            </View>
          </View>

          <View className="mt-2 flex-row items-center gap-2">
            <View
              className="rounded-full px-3 py-1 "
              style={{ backgroundColor: colors.secondary }}
            >
              <Text
                className="text-xs font-semibold "
                style={{ color: colors.secondaryForeground }}
              >
                {item.category}
              </Text>
            </View>
          </View>

          <View className="mt-3 flex-row items-center gap-3">
            <Pressable
              className="size-8 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: colors.muted,
                borderColor: colors.input,
              }}
              onPress={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
            >
              <FontAwesome6 name="minus" size={12} color="#3b5a4a" />
            </Pressable>

            <Text
              className="mins-w-9 text-center text-base font-semibold "
              style={{ color: colors.foreground }}
            >
              {item.quantity}
            </Text>

            <Pressable
              className="size-8 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: colors.muted,
                borderColor: colors.input,
              }}
              onPress={() =>
                updateQuantity(item.id, Math.max(1, item.quantity + 1))
              }
            >
              <FontAwesome6 name="plus" size={12} color="#3b5a4a" />
            </Pressable>
          </View>
        </View>

        <Pressable
          className="size-9 items-center justify-center rounded-xl "
          style={{ backgroundColor: colors.destructive }}
          onPress={() => removeItem(item.id)}
        >
          <FontAwesome6 name="trash" size={13} color="#d45f58" />
        </Pressable>
      </View>
    </View>
  );
};

export default PendingItemsCard;
