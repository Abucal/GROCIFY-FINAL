import { FontAwesome } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type SocialAuthButtonProps = {
  label: string;
  loadingLabel: string;
  isLoading: boolean;
  disabled: boolean;
  colors: {
    border: string;
    card: string;
    cardForeground: string;
  };
  icon: ReactNode;
  onPress: () => void;
};

export default function SocialAuthButton({
  label,
  loadingLabel,
  isLoading,
  disabled,
  colors,
  icon,
  onPress,
}: SocialAuthButtonProps) {
  return (
    <Pressable
      className={`mb-3 h-14 flex-row items-center rounded-2xl px-4 active:opacity-90 ${
        disabled ? "opacity-70" : ""
      }`}
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
        {icon}
      </View>
      <Text
        className="ml-3 flex-1 text-lg font-semibold"
        style={{ color: colors.cardForeground }}
      >
        {isLoading ? loadingLabel : label}
      </Text>
      <FontAwesome name="angle-right" size={18} color="#5f6e66" />
    </Pressable>
  );
}
