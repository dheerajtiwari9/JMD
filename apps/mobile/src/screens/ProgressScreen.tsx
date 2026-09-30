import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SubjectCard } from '../components/progress/SubjectCard';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ScreenContainer } from '../components/ui/ScreenContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { demoDashboard } from '../data/demoData';
import { theme } from '../theme/theme';

export function ProgressScreen() {
  return <ScreenContainer><Text style={styles.eyebrow}>YOUR LEARNING JOURNEY</Text><Text style={styles.title}>Academic progress</Text><Text style={styles.subtitle}>Synthetic snapshots to help you reflect on your learning.</Text><Card><View style={styles.overallRow}><View><Text style={styles.label}>Overall</Text><Text style={styles.overall}>82%</Text></View><Text style={styles.trend}>↑ 4% this month</Text></View><ProgressBar value={82} color={theme.colors.success} /></Card><View style={styles.section}><SectionHeader title="By subject" /></View>{demoDashboard.subjects.map((subject) => <View key={subject.id} style={styles.gap}><SubjectCard subject={subject} /></View>)}</ScreenContainer>;
}
const styles = StyleSheet.create({ eyebrow: { color: theme.colors.primary, fontSize: theme.typography.caption, fontWeight: '800', marginBottom: theme.spacing.sm }, title: { color: theme.colors.text, fontSize: theme.typography.title, fontWeight: '800' }, subtitle: { color: theme.colors.muted, fontSize: theme.typography.body, lineHeight: 22, marginBottom: theme.spacing.lg, marginTop: theme.spacing.sm }, overallRow: { alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.spacing.md }, label: { color: theme.colors.muted, fontSize: theme.typography.caption, fontWeight: '700' }, overall: { color: theme.colors.text, fontSize: 36, fontWeight: '800', marginTop: 4 }, trend: { color: theme.colors.success, fontSize: theme.typography.caption, fontWeight: '700', marginBottom: 5 }, section: { marginTop: theme.spacing.lg }, gap: { marginBottom: theme.spacing.sm } });
