import { useCallback, useEffect, useState } from 'react';
import { demoGoals } from '../data/demoData';
import { getGoals } from '../services/api';
import { Goal } from '../types/goal';

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>(demoGoals);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);

  useEffect(() => {
    getGoals()
      .then((remoteGoals) => setGoals(remoteGoals.length ? remoteGoals : demoGoals))
      .catch(() => setDemoMode(true))
      .finally(() => setLoading(false));
  }, []);

  const toggleGoal = useCallback((id: string) => {
    setGoals((current) => current.map((goal) => goal.id === id ? { ...goal, completed: !goal.completed } : goal));
  }, []);

  const addGoal = useCallback((title: string) => {
    setGoals((current) => [...current, { id: `local-${Date.now()}`, title, progress: 0, completedMilestones: 0, totalMilestones: 1, completed: false }]);
  }, []);

  return { goals, loading, demoMode, toggleGoal, addGoal };
}
