import { View, Text, ScrollView, FlatList } from "react-native";
import { useTheme } from "@/providers/ThemProvider";
import TabScreenBackground from "@/components/TabScreenBackground";
import ListHeroCard from "@/components/list/ListHeroCard";
import { useGroceryStore } from "@/store/grocery-store";
import PendingItemsCard from "@/components/list/PendingItemsCard";
import CompletedItems from "@/components/list/CompletedItems";

export default function ListScreen() {
  const colors = useTheme();
  const { items } = useGroceryStore();

  const pendingItems = items.filter((items) => !items.purchased);

  return (
    <>
      <FlatList
        style={{
          flex: 1,
          backgroundColor: colors.card,
          paddingHorizontal: 10,
        }}
        data={pendingItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PendingItemsCard item={item} />}
        contentContainerStyle={{ padding: 5, gap: 14 }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ gap: 14 }}>
            <TabScreenBackground />
            <ListHeroCard />
            <View className="flex-row items-center justify-between px-1">
              <Text
                className="text-sm font-semibold uppercase tracking-[1px] "
                style={{ color: colors.mutedForeground }}
              >
                Shopping items
              </Text>
              <Text
                className="text-sm "
                style={{ color: colors.mutedForeground }}
              >
                {pendingItems.length} active
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={<CompletedItems />}
      />
    </>
  );
}
