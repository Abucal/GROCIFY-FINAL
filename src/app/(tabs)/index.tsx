import { UserButton } from "@clerk/expo/native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import "../../../global.css";
import { useTheme } from "@/providers/ThemProvider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  const [userButtonKey, setUserButtonKey] = useState(0);
  const colors = useTheme();

  useFocusEffect(
    useCallback(() => {
      setUserButtonKey((key) => key + 1);
    }, []),
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        <View style={styles.userButtonHost}>
          <UserButton key={userButtonKey} />
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userButtonHost: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
});
