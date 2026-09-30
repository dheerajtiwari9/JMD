import { Goal } from './goal';

export interface Task {
  id: string;
  subject: string;
  title: string;
  dueLabel: string;
  completed: boolean;
}

export interface SubjectProgress {
  id: string;
  name: string;
  score: number;
  trend: number;
  color: string;
}

export interface Dashboard {
  studentName: string;
  greeting: string;
  overallProgress: number;
  completedTasks: number;
  totalTasks: number;
  tasks: Task[];
  subjects: SubjectProgress[];
  currentGoal: Goal;
}
