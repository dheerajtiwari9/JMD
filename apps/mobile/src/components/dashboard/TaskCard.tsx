import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../../types/dashboard';
import { Card } from '../ui/Card';
import { theme } from '../../theme/theme';

export function TaskCard({ task }: { task: Task }) {
  return <Card><View style={styles.row}><View style={styles.dot} /><View style={styles.copy}><Text style={styles.subject}>{task.subject}</Text><Text style={styles.title}>{task.title}</Text><Text style={styles.due}>{task.completed ? 'Completed' : task.dueLabel}</Text></View><Text style={styles.arrow}>›</Text></View></Card>;
}
const styles = StyleSheet.create({ row: { flexDirection: 'row', alignItems: 'center' }, dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: theme.colors.primary, marginRight: theme.spacing.md }, copy: { flex: 1 }, subject: { color: theme.colors.muted, fontSize: theme.typography.caption, fontWeight: '700' }, title: { color: theme.colors.text, fontSize: theme.typography.body, fontWeight: '700', marginTop: 3 }, due: { color: theme.colors.amber, fontSize: theme.typography.caption, marginTop: 6 }, arrow: { color: theme.colors.primary, fontSize: 28 } });
