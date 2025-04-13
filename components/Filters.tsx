import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const Filters = () => {
    const params = useLocalSearchParams<{filters?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filters || "All");
  return (
    <View>
      <Text>Filters</Text>
    </View>
  )
}

export default Filters