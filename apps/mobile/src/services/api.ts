import { demoDashboard, demoGoals } from '../data/demoData';
import { Dashboard } from '../types/dashboard';
import { Goal } from '../types/goal';

const baseUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8000/api/v1';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, options);
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return (await response.json()) as T;
}

export async function getDashboard(): Promise<Dashboard> {
  const payload = await request<{ student: { display_name: string; greeting: string }; courses: Array<{ id: string; name: string; progress: number }> }>('/dashboard');
  return {
    ...demoDashboard,
    studentName: payload.student.display_name,
    greeting: payload.student.greeting,
    subjects: payload.courses.map((course, index) => ({
      id: course.id,
      name: course.name,
      score: Math.round(course.progress * 100),
      trend: index === 0 ? 6 : 3,
      color: demoDashboard.subjects[index % demoDashboard.subjects.length].color,
    })),
  };
}

export async function getGoals(): Promise<Goal[]> {
  const remoteGoals = await request<Array<{ id: string; title: string; subject: string; done: boolean }>>('/goals');
  return remoteGoals.map((goal) => ({
    id: goal.id,
    title: goal.title,
    description: goal.subject,
    progress: goal.done ? 100 : 0,
    completedMilestones: goal.done ? 1 : 0,
    totalMilestones: 1,
    completed: goal.done,
  }));
}

export async function createGoal(title: string, subject = 'General'): Promise<Goal> {
  const goal = await request<{ id: string; title: string; subject: string; done: boolean }>('/goals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, subject }) });
  return { id: goal.id, title: goal.title, description: goal.subject, progress: goal.done ? 100 : 0, completedMilestones: goal.done ? 1 : 0, totalMilestones: 1, completed: goal.done };
}

export async function updateGoal(_goal: Goal): Promise<Goal> {
  throw new Error('Goal updates are local until the API supports persistence.');
}

export async function getConsent(): Promise<unknown> {
  return request<unknown>('/consent');
}

export function getDemoGoals(): Goal[] {
  return demoGoals.map((goal) => ({ ...goal }));
}
