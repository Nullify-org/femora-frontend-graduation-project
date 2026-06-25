export interface Course {
  id: string;
  title: string;
  description?: string | null;
  price?: number;
  category?: string | null;
  level?: string | null;
  language?: string | null;
  thumbnailUrl?: string | null;
  isPublished?: boolean;
  instructorName?: string | null;
  instructorProfileId?: string;
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  orderIndex?: number;
  lessons?: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  title: string;
  orderIndex?: number;
  durationMinutes?: number;
}

export interface Enrollment {
  enrollmentId?: string;
  id?: string;
  courseId: string;
  courseTitle?: string | null;
  title?: string | null;
  progressPercent?: number;
  progress?: number;
  thumbnailUrl?: string | null;
}

export interface RecommendedProduct {
  productId?: string;
  id?: string;
  productVariantId?: string;
  name?: string | null;
  title?: string | null;
  price?: number;
  sellerName?: string | null;
  category?: string | null;
  imageUrl?: string | null;
  score?: number;
}

export interface RecommendedCourse {
  courseId: string;
  title?: string | null;
  category?: string | null;
  level?: string | null;
  price?: number;
  score?: number;
  reasons?: string[] | null;
}

export interface CartItem {
  cartItemId?: string;
  id?: string;
  productVariantId?: string;
  productId?: string;
  productName?: string | null;
  name?: string | null;
  quantity?: number;
  unitPrice?: number;
  price?: number;
  lineTotal?: number;
}

export interface Cart {
  id?: string;
  cartId?: string;
  items?: CartItem[] | null;
  total?: number;
}

export interface Order {
  orderId?: string;
  id?: string;
  status?: string | null;
  total?: number;
  createdAt?: string;
  items?: CartItem[] | null;
}

export interface QuizQuestion {
  questionId: string;
  text?: string | null;
  orderIndex?: number;
  choices?: QuizChoice[] | null;
}

export interface QuizChoice {
  choiceId: string;
  text?: string | null;
  order?: number;
}

export interface Quiz {
  quizId: string;
  title?: string | null;
  courseId?: string;
  moduleId?: string | null;
  minimumPassingScore?: number;
  maxAttempts?: number;
  questions?: QuizQuestion[] | null;
}

export interface SubmitQuizResult {
  quizAttemptId: string;
  score: number;
  maxScore: number;
  isPassed: boolean;
  attemptNumber: number;
}

export interface ChatMessage {
  messageId?: string;
  role: 'user' | 'assistant' | string;
  content?: string | null;
  sentAt?: string;
}

export interface ConversationSummary {
  conversationId: string;
  title?: string | null;
  updatedAt?: string;
}

export interface ConversationDetail {
  conversationId: string;
  title?: string | null;
  messages?: ChatMessage[] | null;
}

export interface SendMessageResult {
  conversationId: string;
  reply?: string | null;
}
