import { Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filters?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filters || "All"
  );
  const handleCategoryPress = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory("All"); // Reset to "All" if the same category is pressed
      router.setParams({ filters: "All" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filters: category });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-start mr-4 px-4 rounded-full mt-2 ${
            selectedCategory === item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text className={`text-base ${selectedCategory === item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
