import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Goal } from '../../types/goal';
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { theme } from '../../theme/theme';

export function GoalCard({ goal, onToggle }: { goal: Goal; onToggle: () => void }) {
  return <Card><Pressable accessibilityRole="checkbox" accessibilityLabel={`Mark ${goal.title} complete`} accessibilityState={{ checked: goal.completed }} onPress={onToggle}><View style={styles.top}><Text style={[styles.title, goal.completed && styles.done]}>{goal.title}</Text><View style={[styles.checkbox, goal.completed && styles.checked]}>{goal.completed && <Text style={styles.check}>✓</Text>}</View></View><ProgressBar value={goal.completed ? 100 : goal.progress} color={goal.completed ? theme.colors.success : theme.colors.primary} /><View style={styles.bottom}><Text style={styles.meta}>{goal.completedMilestones} / {goal.totalMilestones} milestones</Text><Text style={styles.percent}>{goal.completed ? 'Complete' : `${goal.progress}%`}</Text></View></Pressable></Card>;
}
const styles = StyleSheet.create({ top: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.md }, title: { color: theme.colors.text, flex: 1, fontSize: theme.typography.body, fontWeight: '800' }, done: { textDecorationLine: 'line-through', color: theme.colors.muted }, checkbox: { borderColor: theme.colors.border, borderRadius: 6, borderWidth: 1.5, height: 24, width: 24, alignItems: 'center', justifyContent: 'center' }, checked: { backgroundColor: theme.colors.success, borderColor: theme.colors.success }, check: { color: '#FFFFFF', fontWeight: '800' }, bottom: { flexDirection: 'row', justifyContent: 'space-between', marginTop: theme.spacing.sm }, meta: { color: theme.colors.muted, fontSize: theme.typography.caption }, percent: { color: theme.colors.primary, fontSize: theme.typography.caption, fontWeight: '800' } });
