import { Dashboard } from '../types/dashboard';
import { Goal } from '../types/goal';
import { Student } from '../types/user';

export const demoStudent: Student = {
  id: 'demo-student-001',
  name: 'Alex Morgan',
  grade: '10',
  role: 'Student',
};

export const demoGoals: Goal[] = [
  { id: 'goal-math', title: 'Improve Mathematics', progress: 80, completedMilestones: 12, totalMilestones: 15, completed: false },
  { id: 'goal-physics', title: 'Complete Physics project', progress: 60, completedMilestones: 6, totalMilestones: 10, completed: false },
  { id: 'goal-reading', title: 'Read 2 books this month', progress: 40, completedMilestones: 1, totalMilestones: 2, completed: false },
];

export const demoDashboard: Dashboard = {
  studentName: demoStudent.name,
  greeting: 'Good morning',
  overallProgress: 82,
  completedTasks: 4,
  totalTasks: 5,
  tasks: [
    { id: 'task-math', subject: 'Mathematics', title: 'Algebra practice', dueLabel: 'Due today', completed: false },
    { id: 'task-physics', subject: 'Physics', title: 'Chapter 4 revision', dueLabel: 'Due tomorrow', completed: false },
    { id: 'task-english', subject: 'English', title: 'Read two pages', dueLabel: 'Due Friday', completed: true },
  ],
  subjects: [
    { id: 'math', name: 'Mathematics', score: 84, trend: 6, color: '#315CBE' },
    { id: 'physics', name: 'Physics', score: 79, trend: 3, color: '#2E8B68' },
    { id: 'chemistry', name: 'Chemistry', score: 81, trend: 0, color: '#A86B13' },
    { id: 'english', name: 'English', score: 88, trend: 5, color: '#7A55B8' },
  ],
  currentGoal: demoGoals[0],
};
