import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../../theme/theme';

export function SectionHeader({ title, caption }: { title: string; caption?: string }) {
  return <Text style={styles.title}>{title}{caption ? <Text style={styles.caption}>  {caption}</Text> : null}</Text>;
}

const styles = StyleSheet.create({ title: { color: theme.colors.text, fontSize: theme.typography.heading, fontWeight: '800', marginBottom: theme.spacing.sm }, caption: { color: theme.colors.muted, fontSize: theme.typography.caption, fontWeight: '500' } });
