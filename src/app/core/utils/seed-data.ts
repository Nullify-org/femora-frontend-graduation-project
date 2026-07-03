import { Course, RecommendedProduct, Enrollment, RecommendedCourse, Quiz, ChatMessage, ConversationSummary, Order } from '../models/api.model';
import { PendingApproval } from '../services/approval.service';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'صناعة الكروشيه للمبتدئين',
    description: 'تعلّمى أساسيات الكروشيه خطوة بخطوة، بدءاً من مسك الإبرة وحتى إنتاج أول شال شتوي لكِ.',
    price: 150,
    category: 'crochet',
    level: 'Beginner',
    language: 'ar',
    thumbnailUrl: '/images/learning-section.png',
    isPublished: true,
    instructorName: 'فاطمة علي',
    instructorProfileId: 'inst_1',
    modules: [
      {
        id: 'm1',
        title: 'التعريف بالأدوات والغرز الأساسية',
        orderIndex: 1,
        lessons: [
          { id: 'l1', title: 'أنواع الإبر والخيوط وكيفية اختيارها', orderIndex: 1, durationMinutes: 15 },
          { id: 'l2', title: 'غرزة السلسلة والعمود بالتفصيل', orderIndex: 2, durationMinutes: 20 }
        ]
      },
      {
        id: 'm2',
        title: 'تطبيقات عملية',
        orderIndex: 2,
        lessons: [
          { id: 'l3', title: 'حياكة أول شال يدوي بسيط', orderIndex: 1, durationMinutes: 35 }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'فن صناعة الشموع المعطرة',
    description: 'دورة تطبيقية لتعليم كيفية اختيار الشمع المناسب، خلط العطور، وتصميم قوالب مميزة للمشروع المنزلي.',
    price: 200,
    category: 'decor',
    level: 'Beginner',
    language: 'ar',
    thumbnailUrl: '/images/hero.png',
    isPublished: true,
    instructorName: 'سارة أحمد',
    instructorProfileId: 'inst_2',
    modules: [
      {
        id: 'm3',
        title: 'المواد الخام والتجهيز',
        orderIndex: 1,
        lessons: [
          { id: 'l4', title: 'أنواع الشموع الطبيعىة والصناعية', orderIndex: 1, durationMinutes: 18 },
          { id: 'l5', title: 'درجات الحرارة ونسب العطور الآمنة', orderIndex: 2, durationMinutes: 22 }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'صناعة الإكسسوارات والمجوهرات المنزلية',
    description: 'تعلّمى كيفية تنسيق الخرز، لف الأسلاك النحاسية وصناعة سلاسل وخواتم عصرية تناسب كل الأذواق.',
    price: 180,
    category: 'jewelry',
    level: 'Intermediate',
    language: 'ar',
    thumbnailUrl: '/images/marketplace-products.png',
    isPublished: true,
    instructorName: 'منال محمود',
    instructorProfileId: 'inst_3',
    modules: []
  },
  {
    id: '4',
    title: 'الطهي وتزيين الكيك للمناسبات',
    description: 'دورة شاملة للمبتدئات لتعلّم مهارات خبز الاسبونج كيك وتزيينها بالكريمة وعجينة السكر لعمل مشروع منزلي ناجح.',
    price: 250,
    category: 'cooking',
    level: 'Beginner',
    language: 'ar',
    thumbnailUrl: '/images/about-brand-story.png',
    isPublished: true,
    instructorName: 'الشيف منى يوسف',
    instructorProfileId: 'inst_4',
    modules: []
  }
];

export const MOCK_PRODUCTS: RecommendedProduct[] = [
  {
    id: 'p1',
    productId: 'p1',
    productVariantId: 'v1',
    name: 'شال صوف كروشيه يدوي دافئ',
    title: 'شال صوف كروشيه يدوي دافئ',
    price: 350,
    sellerName: 'مريم للكروشيه',
    category: 'crochet',
    imageUrl: '/images/learning-section.png',
    score: 9.5
  },
  {
    id: 'p2',
    productId: 'p2',
    productVariantId: 'v2',
    name: 'طقم شموع الصويا الطبيعىة المعطرة',
    title: 'طقم شموع الصويا الطبيعىة المعطرة',
    price: 180,
    sellerName: 'شمع وورد',
    category: 'decor',
    imageUrl: '/images/hero.png',
    score: 9.0
  },
  {
    id: 'p3',
    productId: 'p3',
    productVariantId: 'v3',
    name: 'عقد ذهبي مصمم يدوياً من الخرز الناعم',
    title: 'عقد ذهبي مصمم يدوياً من الخرز الناعم',
    price: 120,
    sellerName: 'مجوهرات هناء',
    category: 'jewelry',
    imageUrl: '/images/marketplace-products.png',
    score: 8.8
  },
  {
    id: 'p4',
    productId: 'p4',
    productVariantId: 'v4',
    name: 'كيك الشوكولاتة البيتي المزين بالكريمة',
    title: 'كيك الشوكولاتة البيتي المزين بالكريمة',
    price: 220,
    sellerName: 'حلويات رنا',
    category: 'food',
    imageUrl: '/images/about-brand-story.png',
    score: 9.2
  }
];

export const MOCK_RECOMMENDED_COURSES: RecommendedCourse[] = [
  {
    courseId: '1',
    title: 'صناعة الكروشيه للمبتدئين',
    category: 'crochet',
    level: 'Beginner',
    price: 150,
    score: 9.8,
    reasons: ['مناسب لاهتمامك بالكروشيه', 'دورة بتقييم ممتاز من طالبات أخريات']
  },
  {
    courseId: '2',
    title: 'فن صناعة الشموع المعطرة',
    category: 'decor',
    level: 'Beginner',
    price: 200,
    score: 9.2,
    reasons: ['سهل البدء به كمشروع منزلي', 'يحتوي على تطبيق عملي مباشر']
  }
];

export const MOCK_QUIZZES: Quiz[] = [
  {
    quizId: 'q1',
    title: 'اختبار غرز الكروشيه الأساسية',
    courseId: '1',
    moduleId: 'm1',
    minimumPassingScore: 70,
    maxAttempts: 3,
    questions: [
      {
        questionId: 'qq1',
        text: 'ما هي الغرزة المناسبة لبدء أي عمل كروشيه؟',
        orderIndex: 1,
        choices: [
          { choiceId: 'qc1', text: 'غرزة السلسلة', order: 1 },
          { choiceId: 'qc2', text: 'غرزة المنزلقة', order: 2 },
          { choiceId: 'qc3', text: 'غرزة العمود بلفة', order: 3 }
        ]
      },
      {
        questionId: 'qq2',
        text: 'كيف تختارين مقاس إبرة الكروشيه؟',
        orderIndex: 2,
        choices: [
          { choiceId: 'qc4', text: 'حسب سمك الخيط ونوعه', order: 1 },
          { choiceId: 'qc5', text: 'حسب لون الخيط', order: 2 },
          { choiceId: 'qc6', text: 'بشكل عشوائي دائماً', order: 3 }
        ]
      }
    ]
  }
];

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  { messageId: 'msg1', role: 'assistant', content: 'مرحباً بكِ في المساعد الذكي لـ Femora! كيف يمكنني مساعدتكِ اليوم؟ يمكنكِ سؤالي عن تسعير المنتجات، أو اقتراح دورات تدريبية.', sentAt: new Date().toISOString() }
];

export const MOCK_CONVERSATIONS: ConversationSummary[] = [
  { conversationId: 'c1', title: 'مساعدة في تسعير الشال الصوف', updatedAt: new Date().toISOString() },
  { conversationId: 'c2', title: 'اقتراح دورات كروشيه متقدمة', updatedAt: new Date().toISOString() }
];

export const MOCK_APPROVALS: PendingApproval[] = [
  {
    id: 'app_1',
    type: 'InstructorVerification',
    status: 'Pending',
    userId: '101',
    userFullName: 'سارة محمد',
    userEmail: 'sara@example.com',
    createdAt: new Date().toISOString(),
    bio: 'مدربة كروشيه محترفة بخبرة 5 سنوات في تعليم الحرف اليدوية',
    portfolioUrl: 'https://portfolio.example.com/sara',
  },
  {
    id: 'app_2',
    type: 'SellerVerification',
    status: 'Pending',
    userId: '102',
    userFullName: 'نورة أحمد',
    userEmail: 'nora@example.com',
    createdAt: new Date().toISOString(),
    shopName: 'متجر نورة للحرف اليدوية',
    description: 'متجر متخصص في بيع مستلزمات الكروشيه والتطريز',
  },
];

export const MOCK_USERS: Record<string, { id: string; firstName: string; lastName: string; email: string }> = {
  '101': { id: '101', firstName: 'سارة',  lastName: 'محمد', email: 'sara@example.com' },
  '102': { id: '102', firstName: 'نورة',  lastName: 'أحمد', email: 'nora@example.com' },
};

export const MOCK_SUBSCRIPTION = {
  planName: 'متقدّم',
  status: 'Active',
  expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'order_mock_001',
    orderId: 'order_mock_001',
    status: 'Pending',
    totalAmount: 350,
    total: 350,
    userId: '101',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order_item_1',
        orderId: 'order_mock_001',
        productVariantId: 'v1',
        quantity: 1,
        unitPrice: 350,
      }
    ]
  }
];
