import {Text} from 'react-native';
import {Stack} from 'expo-router';

import {useColorScheme} from '@/components/useColorScheme';
import React from "react";

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="modal" options={{ presentation: 'modal' }}/>
    </Stack>
  );
}
