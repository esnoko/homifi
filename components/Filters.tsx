import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{filters?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filters || "All");
    const handleCategory = (category: string) => {};
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
        {categories.map((item, index) => (
            <TouchableOpacity key={index} className='flex flex-col items-start mr-4 px-4 rounded-full'>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default Filters