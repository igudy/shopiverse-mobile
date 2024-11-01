import { View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default Layout;
