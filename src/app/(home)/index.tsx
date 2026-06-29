import { Show } from "@clerk/expo";
import { AuthView, UserButton } from "@clerk/expo/native";
import { useState } from "react";
import { Button, Modal, StyleSheet, View, Text } from "react-native";
import "../../../global.css";
import { useTheme } from "@/providers/ThemProvider";

export default function Screen() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const colors = useTheme();

  return (
    <View style={styles.container}>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <Button title="Sign in" onPress={() => setIsAuthOpen(true)} />
      </Show>
      <Modal
        animationType="slide"
        visible={isAuthOpen}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsAuthOpen(false)}
      >
        <AuthView onDismiss={() => setIsAuthOpen(false)} />
      </Modal>

      <View
        style={{
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ color: colors.foreground }}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
