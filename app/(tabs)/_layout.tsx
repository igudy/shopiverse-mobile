import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={({ route }) => ({
          // title: route.params?.name || 'Home',
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        })}
      />
      <Tabs.Screen
        name="shop"
        options={({ route }) => ({
          // title: route.params?.name || 'Shop',
          title: 'Shop',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
          ),
        })}
      />
      <Tabs.Screen
        name="bag"
        options={({ route }) => ({
          // title: route.params?.name || 'Bag',
          title: 'Bag',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
          ),
        })}
      />
      <Tabs.Screen
        name="favourite"
        options={({ route }) => ({
          // title: route.params?.name || 'Favourite',
          title: 'Favourite',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
          ),
        })}
      />
      <Tabs.Screen
        name="profile"
        options={({ route }) => ({
          // title: route.params?.name || 'Profile',
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        })}
      />
    </Tabs>
  );
}
