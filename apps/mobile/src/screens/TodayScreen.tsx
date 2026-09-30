import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/ui/Card';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { ScreenContainer } from '../components/ui/ScreenContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProgressBar } from '../components/ui/ProgressBar';
import { TaskCard } from '../components/dashboard/TaskCard';
import { demoDashboard } from '../data/demoData';
import { getDashboard } from '../services/api';
import { Dashboard } from '../types/dashboard';
import { theme } from '../theme/theme';

export function TodayScreen() {
  const [dashboard, setDashboard] = useState<Dashboard>(demoDashboard);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  useEffect(() => { getDashboard().then(setDashboard).catch(() => setDemoMode(true)).finally(() => setLoading(false)); }, []);
  const taskProgress = (dashboard.completedTasks / dashboard.totalTasks) * 100;
  return <ScreenContainer demoMode={demoMode}>
    <Text style={styles.eyebrow}>{dashboard.greeting}</Text>
    <Text style={styles.title}>Here's your learning overview, {dashboard.studentName.split(' ')[0]}.</Text>
    <Text style={styles.subtitle}>A clear view of the next small steps in your day.</Text>
    <Card><Text style={styles.cardLabel}>TODAY'S PROGRESS</Text><View style={styles.progressRow}><Text style={styles.progressValue}>{dashboard.overallProgress}%</Text><Text style={styles.progressMeta}>{dashboard.completedTasks} of {dashboard.totalTasks} tasks completed</Text></View><ProgressBar value={dashboard.overallProgress} color={theme.colors.success} /></Card>
    <View style={styles.section}><SectionHeader title="Upcoming tasks" /></View>
    {dashboard.tasks.slice(0, 3).map((task) => <View key={task.id} style={styles.gap}><TaskCard task={task} /></View>)}
    <View style={styles.section}><SectionHeader title="Current goal" /></View>
    <Card><Text style={styles.goalTitle}>{dashboard.currentGoal.title}</Text><ProgressBar value={dashboard.currentGoal.progress} /><Text style={styles.goalMeta}>{dashboard.currentGoal.completedMilestones} / {dashboard.currentGoal.totalMilestones} milestones</Text></Card>
    <PrimaryButton onPress={() => undefined}>Continue learning  →</PrimaryButton>
    {loading && <View style={styles.loading}><ActivityIndicator color={theme.colors.primary} /><Text style={styles.loadingText}>Checking for updates...</Text></View>}
    {!loading && demoMode && <Text style={styles.note}>The API is unavailable, so this screen is showing synthetic sample data.</Text>}
    <Text style={styles.hiddenProgress} accessibilityLabel={`${Math.round(taskProgress)} percent of today's tasks completed`} />
  </ScreenContainer>;
}
const styles = StyleSheet.create({ eyebrow: { color: theme.colors.primary, fontSize: theme.typography.caption, fontWeight: '800', marginBottom: theme.spacing.sm }, title: { color: theme.colors.text, fontSize: theme.typography.title, fontWeight: '800', lineHeight: 34 }, subtitle: { color: theme.colors.muted, fontSize: theme.typography.body, lineHeight: 22, marginBottom: theme.spacing.lg, marginTop: theme.spacing.sm }, cardLabel: { color: theme.colors.muted, fontSize: theme.typography.caption, fontWeight: '800', letterSpacing: 1 }, progressRow: { alignItems: 'baseline', flexDirection: 'row', marginVertical: theme.spacing.md }, progressValue: { color: theme.colors.text, fontSize: 32, fontWeight: '800' }, progressMeta: { color: theme.colors.muted, fontSize: theme.typography.caption, marginLeft: theme.spacing.sm }, section: { marginTop: theme.spacing.lg }, gap: { marginBottom: theme.spacing.sm }, goalTitle: { color: theme.colors.text, fontSize: theme.typography.body, fontWeight: '800', marginBottom: theme.spacing.md }, goalMeta: { color: theme.colors.muted, fontSize: theme.typography.caption, marginTop: theme.spacing.sm }, loading: { alignItems: 'center', flexDirection: 'row', gap: theme.spacing.sm, justifyContent: 'center', marginTop: theme.spacing.md }, loadingText: { color: theme.colors.muted, fontSize: theme.typography.caption }, note: { color: theme.colors.muted, fontSize: theme.typography.caption, lineHeight: 18, marginTop: theme.spacing.md, textAlign: 'center' }, hiddenProgress: { height: 0, width: 0 } });
