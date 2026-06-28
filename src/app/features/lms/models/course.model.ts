export interface Course {
  id: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  price: number;
  category: string;
  language: string;
  level: string;
  instructorName: string;
  enrollmentsCount: number;
}


