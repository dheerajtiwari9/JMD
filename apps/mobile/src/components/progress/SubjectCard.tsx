import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SubjectProgress } from '../../types/dashboard';
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { theme } from '../../theme/theme';

export function SubjectCard({ subject }: { subject: SubjectProgress }) {
  const trend = subject.trend > 0 ? `↑ ${subject.trend}% this month` : '→ Steady this month';
  return <Card><View style={styles.row}><View style={[styles.dot, { backgroundColor: subject.color }]} /><Text style={styles.name}>{subject.name}</Text><Text style={styles.score}>{subject.score}%</Text></View><ProgressBar value={subject.score} color={subject.color} /><Text style={[styles.trend, { color: subject.trend > 0 ? theme.colors.success : theme.colors.muted }]}>{trend}</Text></Card>;
}
const styles = StyleSheet.create({ row: { alignItems: 'center', flexDirection: 'row', marginBottom: theme.spacing.md }, dot: { borderRadius: 5, height: 10, marginRight: theme.spacing.sm, width: 10 }, name: { color: theme.colors.text, flex: 1, fontSize: theme.typography.body, fontWeight: '800' }, score: { color: theme.colors.text, fontSize: theme.typography.heading, fontWeight: '800' }, trend: { fontSize: theme.typography.caption, fontWeight: '700', marginTop: theme.spacing.sm } });
