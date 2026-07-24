import { View, Text } from "react-native";
import React from "react";
import { useGroceryStore } from "@/store/grocery-store";
import { useTheme } from "@/providers/ThemProvider";

const ListHeroCard = () => {
  const { items } = useGroceryStore();
  const colors = useTheme();

  const completedCount = items.filter((item) => item.purchased).length;
  const pendingCount = items.length - completedCount;

  const completionRate = items.length
    ? Math.round((completedCount / items.length) * 100)
    : 0;

  return (
    <View
      className="rounded-3xl p-5 mt-5"
      style={{ backgroundColor: colors.success }}
    >
      <Text
        className="text-sm font-semibold uppercase tracking-[1px] "
        style={{ color: `${colors.primaryForeground}B3` }}
      >
        Today
      </Text>
      <Text
        className="mt-1 text-3xl font-extrabold"
        style={{ color: `${colors.primaryForeground}` }}
      >
        Your Grocery Board
      </Text>

      <Text className="mt-1 text-sm " style={{ color: `${colors.primaryForeground}CC` }}>
        {pendingCount} pending • {completedCount} completed
      </Text>

      <View className="mt-4 overflow-hidden rounded-full bg-white/50">
        <View className="h-2 rounded-full " style={{backgroundColor: colors.secondary, width: `${completionRate}%`}}></View>
      </View>
    </View>
  );
};

export default ListHeroCard;
