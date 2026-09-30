import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TodayScreen } from '../screens/TodayScreen';
import { ProgressScreen } from '../screens/ProgressScreen';
import { GoalsScreen } from '../screens/GoalsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { theme } from '../theme/theme';

type RootTabParamList = { Today: undefined; Progress: undefined; Goals: undefined; Profile: undefined };
const Tab = createBottomTabNavigator<RootTabParamList>();
const icons: Record<keyof RootTabParamList, string> = { Today: '⌂', Progress: '▥', Goals: '◇', Profile: '○' };

export function AppNavigator() {
  return <NavigationContainer><Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: theme.colors.primary, tabBarInactiveTintColor: theme.colors.muted, tabBarLabelStyle: { fontSize: 11, fontWeight: '700' }, tabBarStyle: { borderTopColor: theme.colors.border, height: 66, paddingBottom: 7, paddingTop: 5 }, tabBarAccessibilityLabel: route.name, tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>{icons[route.name]}</Text> })}><Tab.Screen name="Today" component={TodayScreen} /><Tab.Screen name="Progress" component={ProgressScreen} /><Tab.Screen name="Goals" component={GoalsScreen} /><Tab.Screen name="Profile" component={ProfileScreen} /></Tab.Navigator></NavigationContainer>;
}
