import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../theme/theme';

export function ProgressBar({ value, color = theme.colors.primary }: { value: number; color?: string }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return <View accessible accessibilityLabel={`${safeValue}% complete`} style={styles.track}><View style={[styles.fill, { width: `${safeValue}%`, backgroundColor: color }]} /></View>;
}

const styles = StyleSheet.create({ track: { height: 8, backgroundColor: '#E8ECF3', borderRadius: 8, overflow: 'hidden' }, fill: { height: '100%', borderRadius: 8 } });
