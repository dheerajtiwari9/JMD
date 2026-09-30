import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme/theme';

export function PrimaryButton({ children, onPress }: PropsWithChildren<{ onPress: () => void }>) {
  return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}><Text style={styles.label}>{children}</Text></Pressable>;
}

const styles = StyleSheet.create({ button: { alignItems: 'center', backgroundColor: theme.colors.primary, borderRadius: theme.radius.sm, minHeight: 48, justifyContent: 'center', paddingHorizontal: theme.spacing.md }, pressed: { opacity: 0.8 }, label: { color: '#FFFFFF', fontSize: theme.typography.body, fontWeight: '800' } });
