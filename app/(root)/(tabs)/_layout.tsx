import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title } : { focused: boolean; icon: any; title: string }) => (
  <View className="flex-1 mt-2 flex flex-col items-center">
    <Image source={icon} tintColor={focused ? "#676EDA" : "#8292B3"} resizeMode='contain' className='size-10'/>
    <Text className={ `${focused ? 'text-primary font-lato-semibold' : 'text-secondary font-Lato-Refular'}  
    text-xs w-full text-center mt-1`} >
      { title }
    </Text>
  </View>
)

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '',
                minHeight: 90,
            },
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: 'Exchange',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.currency} focused={focused} title="Exchange" />
            ),
        }}
      />
      <Tabs.Screen
        name="graphic"
        options={{
            title: 'Graphic',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.graph2} focused={focused} title="Graphic" />
            ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout