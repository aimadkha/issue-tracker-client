export class Issue {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Feature' | 'Bug' | 'Documentaion';
  // category: number;
  completed?: Date;
}
