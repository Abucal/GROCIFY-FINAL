import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/providers/ThemProvider";
import React from "react";

const PlannerHeroImage = () => {
  const colors = useTheme();
  return (
    <View
      className="overflow-hidden rounded-[30px] border"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <Image
        source={require("../../../assets/images/hero.png")}
        className="h-56 w-full"
        resizeMode="cover"
      />
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(0,0,0,0.4)", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 72 }}
      />
      <LinearGradient
        pointerEvents="none"
        colors={["transparent", "rgba(0,0,0,0.4)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
        }}
      />
    </View>
  );
};

export default PlannerHeroImage;
