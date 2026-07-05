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
  /** Number of enrolled trainees â€” populated by CourseDto.EnrollmentsCount (e.g. instructor "my courses"/dashboard endpoints). */
  enrollmentsCount?: number;
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
  enrollmentId: string;
  courseId: string;
  courseTitle: string;
  thumbnailUrl?: string | null;

  pricePaid: number;

  enrolledAt: string;

  isCompleted: boolean;

  totalLessons: number;
  completedLessons: number;
  progressPercent: number;
}

export interface EnrollmentStatus {
  isEnrolled: boolean;
  enrollmentId?: string;
  isCompleted: boolean;
}

export interface EnrollmentResponse {
  enrollmentId: string;
  courseId: string;
  courseTitle: string;
  enrolledAt: string;
  pricePaid: number;
  firstModuleId?: string | null;
  status: string;
}

export interface PagedResult<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}

/** Matches Femora.Application.Features.MarketPlace.Products.DTOs.ProductVariantDto */
export interface ProductVariantDto {
  id: string;
  name?: string | null;
  price: number;
  stockQuantity: number;
}

/** Matches Femora.Application.Features.MarketPlace.Products.DTOs.ProductDetailsDto (GET /api/products/{id}) */
export interface ProductDetailsDto {
  id: string;
  name: string;
  description?: string | null;
  categoryId?: string | null;
  images: string[];
  variants: ProductVariantDto[];
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
  imageUrls?: string[] | null;
  score?: number;
  /** Product category id â€” matches ProductSummaryDto.CategoryId, used to filter the catalog. */
  categoryId?: string | null;
  /** Human-readable category name â€” matches ProductSummaryDto.CategoryName, shown as a badge. */
  categoryName?: string | null;
  /**
   * Variant attributes, e.g. { "Color": "Red", "Size": "M" }.
   * Optional â€” not all backends expose this yet. When present, the product
   * details page groups all rows sharing the same `productId` into pickable
   * attribute options (color swatches, size pills, etc).
   */
  attributes?: Record<string, string> | null;
  /** Fallback display label for a variant when structured `attributes` aren't available (e.g. "Large / Blue"). */
  variantLabel?: string | null;
  /** Units in stock for this specific variant, if the backend tracks inventory. */
  stock?: number;
}

/** Matches Femora.Application.Features.MarketPlace.Categories.DTOs.ProductCategoryDto (GET /api/product-categories) */
export interface ProductCategory {
  id: string;
  name: string;
  description?: string | null;
  productCount?: number;
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
  imageUrl?: string | null;
  imageUrls?: string[] | null;
}

export interface Cart {
  id?: string;
  cartId?: string;
  items?: CartItem[] | null;
  total?: number;
}

// Matches Femora.Domain.Entities.Marketplace.Order as serialized by the API
// (camelCase + JsonStringEnumConverter â€” see Program.cs)
export interface OrderItemDto {
  id: string;
  orderId: string;
  productVariantId: string;
  quantity: number;
  unitPrice: number;
  productVariant?: unknown | null;
}

export interface Order {
  id?: string;
  userId?: string;
  status?: string;          // "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled"
  totalAmount?: number;
  orderItems?: OrderItemDto[] | null;
  createdAt?: string;

  // Legacy aliases kept for any older code (and mock seed data) still reading these
  orderId?: string;
  total?: number;
  items?: CartItem[] | null;
}

export interface QuizAnswerRequest {
  questionId: string;
  choiceId: string;
}

export interface QuizSubmissionRequest {
  enrollmentId?: string;
  traineeProfileId?: string;
  answers: QuizAnswerRequest[];
}

export interface GenerateQuizRequest {
  moduleId: string;
  questionCount?: number;
}

export interface GenerateQuizResponse {
  quizId: string;
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
  quizAttemptId?: string;
  score: number;
  maxScore?: number;
  isPassed: boolean;
  attemptNumber?: number;
  maxAttempts?: number;
  answerResults?: Array<{ questionId: string; isCorrect: boolean }>;
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
  createdAt?: string;
  updatedAt?: string;
  lastMessagePreview?: string | null;
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

export interface ChatWithLessonResult {
  conversationId: string;
  answer: string;
}

export interface SummarizeLessonResult {
  lessonId: string;
  summary: string;
}


export interface LearningCourse {
    courseId:string;
    title:string;
    progress:number;
    modules:LearningModule[];
}

export interface LearningModule {
    moduleId:string;
    title:string;
    lessons:LearningLesson[];
}

export interface LearningLesson {
    lessonId:string;
    title:string;
    completed:boolean;
}

export interface EnrollmentDetailsResponse {
  enrollmentId: string;
  courseId: string;
  courseTitle: string;
  thumbnailUrl?: string | null;
  progressPercent: number;
  isCompleted: boolean;
  modules: EnrollmentModule[];
}

export interface EnrollmentModule {
  moduleId: string;
  title: string;
  orderIndex: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  quizPassed: boolean;
  lessons: EnrollmentLesson[];
}

export interface EnrollmentLesson {
  lessonId: string;
  title: string;
  orderIndex: number;
  isCompleted: boolean;
  watchedSeconds: number;
  description?: string | null;
  contentUrl?: string | null;
  contentType?: string | null;
  contentText?: string | null;
  contentMimeType?: string | null;
}

export interface UnlockNextModuleResponse {
  unlockedModuleId?: string;
  unlockedModuleTitle?: string;
  moduleOrderIndex?: number;
  isLastModule: boolean;
  alreadyUnlocked: boolean;
}

