import { Stack, Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";
import { useTheme } from "@/providers/ThemProvider";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const colors = useTheme();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <NativeTabs
      tintColor={colors.secondaryForeground}
      backgroundColor={colors.card}
      unstable_nativeProps={{
        indicatorColor: colors.secondary,
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
          md={{ default: "home", selected: "home" }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "plus.circle", selected: "plus.circle.fill" }}
          md={{ default: "add", selected: "add" }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "chart.bar", selected: "chart.bar.fill" }}
          md={{ default: "analytics", selected: "analytics" }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
