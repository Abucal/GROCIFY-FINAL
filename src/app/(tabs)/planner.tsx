import { View, Text, ScrollView } from "react-native";
import { useGroceryStore } from "@/store/grocery-store";
import { useTheme } from "@/providers/ThemProvider";
import { FontAwesome6 } from "@expo/vector-icons";
import TabScreenBackground from "@/components/TabScreenBackground";
import PlannerHeroImage from "@/components/planner/PlannerHeroImage";
import PlannerFormCard from "@/components/planner/PlannerFormCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const PlannerScreen = () => {
  const { items } = useGroceryStore();
  const colors = useTheme();

  const pendingCount = items.filter((item) => !item.purchased).length;
  const highPriorityCount = items.filter(
    (item) => !item.purchased && item.priority === "high",
  ).length;

  const totalQuantity = items
    .filter((item) => !item.purchased)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <KeyboardAwareScrollView
      bottomOffset={80}
      keyboardShouldPersistTaps="handled"
      className="flex-1 py-4 "
      style={{ backgroundColor: colors.card }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackground />
      <View
        className="gap-4 rounded-3xl border p-5"
        style={{
          backgroundColor: `${colors.background}B3`,
          borderColor: colors.border,
        }}
      >
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-4">
            <Text
              className="text-sm font-semibold uppercase tracking-[1.2px]"
              style={{ color: colors.mutedForeground }}
            >
              Grocery planner
            </Text>

            <Text
              className="mt-1 text-3xl font-bold leading-9 "
              style={{ color: colors.foreground }}
            >
              Plan smarter, shop calmer.
            </Text>

            <Text
              className="mt-2 text-sm leading-5"
              style={{ color: colors.mutedForeground }}
            >
              Organize your next grocery run with categories, quantities and
              priority in one place.
            </Text>
          </View>
          <View
            className="size-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: colors.success }}
          >
            <FontAwesome6
              name="wand-magic-sparkles"
              size={18}
              color="#ffffff"
            />
          </View>
        </View>

        <View className="flex-row gap-2">
          <View
            className="flex-1 rounded-2xl border p-3 justify-between"
            style={{
              backgroundColor: `${colors.background}CC`,
              borderColor: colors.border,
            }}
          >
            <Text
              className="text-xs font-medium uppercase tracking-[1px] "
              style={{ color: colors.mutedForeground }}
            >
              Pending
            </Text>
            <Text
              className="mt-1 text-xl font-bold "
              style={{ color: colors.foreground }}
            >
              {pendingCount}
            </Text>
          </View>
          <View
            className="flex-1 rounded-2xl border p-3 justify-between"
            style={{
              backgroundColor: `${colors.background}CC`,
              borderColor: colors.border,
            }}
          >
            <Text
              className="text-xs font-medium uppercase tracking-[1px] "
              style={{ color: colors.mutedForeground }}
            >
              High Priority
            </Text>
            <Text
              className="mt-1 text-xl font-bold "
              style={{ color: colors.foreground }}
            >
              {highPriorityCount}
            </Text>
          </View>
          <View
            className="flex-1 rounded-2xl border p-3 justify-between"
            style={{
              backgroundColor: `${colors.background}CC`,
              borderColor: colors.border,
            }}
          >
            <Text
              className="text-xs font-medium uppercase tracking-[1px] "
              style={{ color: colors.mutedForeground }}
            >
              Total Quantity
            </Text>
            <Text
              className="mt-1 text-xl font-bold "
              style={{ color: colors.foreground }}
            >
              {totalQuantity}
            </Text>
          </View>
        </View>
      </View>

      <PlannerHeroImage />

      <View className="px-1">
        <Text
          className="text-sm font-semibold uppercase tracking-[1px]"
          style={{ color: colors.mutedForeground }}
        >
          Build your list
        </Text>
        <Text
          className="mt-1 text-sm "
          style={{ color: colors.mutedForeground }}
        >
          Add items with the right quantity, category, and urgency.
        </Text>
      </View>
      <PlannerFormCard />
    </KeyboardAwareScrollView>
  );
};

export default PlannerScreen;
