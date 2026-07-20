import { Show } from "@clerk/expo";
import { AuthView, UserButton } from "@clerk/expo/native";
import { useState } from "react";
import { Button, Modal, StyleSheet, View, Text } from "react-native";
import "../../../global.css";
import { useTheme } from "@/providers/ThemProvider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const colors = useTheme();

  return (
    <SafeAreaView>
      <View>
        <UserButton />

        <View
          style={{
            backgroundColor: colors.background,
          }}
        >
          <Text style={{ color: colors.foreground }}>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
