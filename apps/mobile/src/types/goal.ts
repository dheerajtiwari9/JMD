export interface Goal {
  id: string;
  title: string;
  description?: string;
  progress: number;
  completedMilestones: number;
  totalMilestones: number;
  completed: boolean;
}
