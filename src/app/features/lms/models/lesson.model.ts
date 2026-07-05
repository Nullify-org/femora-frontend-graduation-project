export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  type: number;
  articleContent?: string;
  contentUrl?: string;
  durationSeconds: number;
  orderIndex: number;
  isPreview: boolean;
}
