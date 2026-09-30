import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme/theme';

export function ScreenContainer({ children, demoMode = true }: PropsWithChildren<{ demoMode?: boolean }>) {
  return (
    <View style={styles.safe}>
      {demoMode && <View style={styles.banner}><Text style={styles.bannerText}>Demo mode · Synthetic data</Text></View>}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.md, paddingBottom: 36 },
  banner: { backgroundColor: theme.colors.amberSoft, paddingVertical: 7, alignItems: 'center' },
  bannerText: { color: theme.colors.amber, fontSize: theme.typography.caption, fontWeight: '700' },
});
