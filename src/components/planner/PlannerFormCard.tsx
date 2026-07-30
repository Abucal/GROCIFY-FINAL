import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import { useTheme } from "@/providers/ThemProvider";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  useGroceryStore,
  GroceryCategory,
  GroceryPriority,
} from "@/store/grocery-store";
import React from "react";

const categories: GroceryCategory[] = [
  "Produce",
  "Dairy",
  "Bakery",
  "Pantry",
  "Snacks",
];
const priorities: GroceryPriority[] = ["low", "medium", "high"];

const categoryIcons = {
  Produce: "leaf",
  Dairy: "cow",
  Bakery: "bread-slice",
  Pantry: "box-open",
  Snacks: "cookie-bite",
};

const PlannerFormCard = () => {
  const { error, addItem } = useGroceryStore();
  const colors = useTheme();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState<GroceryCategory>("Produce");
  const [priority, setPriority] = useState<GroceryPriority>("medium");

  const canCreate = name.trim().length > 0;

  const handleQuantityChange = (value: string) => {
    setQuantity(value.replace(/[^0-9]/g, ""));
  };

  const createItem = async () => {
    await addItem({
      name: name.trim(),
      category,
      priority,
      quantity: Number(quantity),
    });

    Alert.alert("Success", "Item Added");
    setName("");
    setCategory("Produce");
    setPriority("medium");
    setQuantity("1");
  };

  return (
    <View
      className="rounded-3xl border p-4"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <Text
        className="text-sm font-semibold"
        style={{ color: colors.foreground }}
      >
        Item name
      </Text>

      <View
        className="mt-2 flex-row items-center rounded-2xl border px-4 py-3 "
        style={{ backgroundColor: colors.muted, borderColor: colors.input }}
      >
        <FontAwesome6 name="bag-shopping" size={13} color="#5b7567" />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ex: Blueberries"
          className="ml-3 flex-1 text-base "
          style={{ color: colors.foreground }}
          placeholderTextColor="#8aa397"
        />
      </View>

      <Text
        className="text-sm mt-4 font-semibold"
        style={{ color: colors.foreground }}
      >
        Quantity
      </Text>

      <View
        className="mt-2 flex-row items-center rounded-2xl border px-4 py-3 "
        style={{ backgroundColor: colors.muted, borderColor: colors.input }}
      >
        <FontAwesome6 name="hashtag" size={13} color="#5b7567" />
        <TextInput
          value={quantity}
          onChangeText={handleQuantityChange}
          placeholder="Ex: 1"
          keyboardType="number-pad"
          className="ml-3 flex-1 text-base "
          style={{ color: colors.foreground }}
          placeholderTextColor="#8aa397"
        />
      </View>
      <Text
        className="mt-4 text-sm font-semibold"
        style={{ color: colors.foreground }}
      >
        Category
      </Text>
      <View className="mt-2 flex-row flex-wrap gap-2 ">
        {categories.map((option) => {
          const active = option === category;
          return (
            <Pressable
              key={option}
              onPress={() => setCategory(option)}
              className="flex-row items-center rounded-full px-4 py-2 "
              style={{
                backgroundColor: active ? colors.primary : colors.secondary,
              }}
            >
              <FontAwesome6
                name={categoryIcons[option]}
                size={12}
                color={active ? "#fff" : "#486856"}
              />

              <Text
                className="ml-2 text-sm font-semibold "
                style={{
                  color: `${
                    active
                      ? colors.primaryForeground
                      : colors.secondaryForeground
                  }`,
                }}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text
        className="mt-4 text-sm font-semibold "
        style={{ color: colors.foreground }}
      >
        Priority
      </Text>

      <View className="mt-2 flex-row gap-2">
        {priorities.map((option) => {
          const active = option === priority;
          const icon =
            option === "high"
              ? "bolt"
              : option === "medium"
                ? "compass"
                : "seedling";
          return (
            <Pressable
              key={option}
              onPress={() => setPriority(option)}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-2 "
              style={{
                backgroundColor: active ? colors.primary : colors.secondary,
              }}
            >
              <FontAwesome6
                name={icon}
                size={12}
                color={active ? "#ffffff" : "#486856"}
              />
              <Text
                className="mt-1 text-sm font-semibold capitalize "
                style={{
                  color: active
                    ? colors.primaryForeground
                    : colors.secondaryForeground,
                }}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        className="mt-5 flex-row items-center justify-center rounded-2xl py-3"
        style={{ backgroundColor: canCreate ? colors.primary : colors.muted }}
        onPress={createItem}
        disabled={!canCreate}
      >
        <FontAwesome6
          name="plus"
          size={14}
          color={canCreate ? "#ffffff" : "#7a9386"}
        />
        <Text
          className="ml-2 font-semibold text-base"
          style={{
            color: canCreate
              ? colors.primaryForeground
              : colors.mutedForeground,
          }}
        >
          Add to Grocery List
        </Text>
      </Pressable>
    </View>
  );
};

export default PlannerFormCard;
