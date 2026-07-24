import { View } from "react-native";
import React from "react";
import { useTheme } from "@/providers/ThemProvider";

export default function TabScreenBackground() {
  const colors = useTheme();
  return (
    <>
      <View
        pointerEvents="none"
        className="absolute -left-24 top-1 h-64 w-64 rounded-full"
        style={{ backgroundColor: colors.accent }}
      ></View>

      <View
        pointerEvents="none"
        className="absolute -right-20 top-20 h-72 w-72 rounded-full"
        style={{ backgroundColor: colors.secondary }}
      ></View>
    </>
  );
}
