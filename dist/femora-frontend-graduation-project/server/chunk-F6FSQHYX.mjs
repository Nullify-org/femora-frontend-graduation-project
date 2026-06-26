import './polyfills.server.mjs';
import {
  NotificationService
} from "./chunk-MTCE2STO.mjs";
import {
  environment
} from "./chunk-YG65EQOF.mjs";
import {
  HttpClient,
  Injectable,
  afterNextRender,
  catchError,
  inject,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";

// src/app/core/utils/platform.util.ts
function runInBrowser(fn) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }
  afterNextRender(fn);
}

// src/app/core/utils/seed-data.ts
var MOCK_COURSES = [
  {
    id: "1",
    title: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646",
    description: "\u062A\u0639\u0644\u0651\u0645\u064A \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629\u060C \u0628\u062F\u0621\u0627\u064B \u0645\u0646 \u0645\u0633\u0643 \u0627\u0644\u0625\u0628\u0631\u0629 \u0648\u062D\u062A\u0649 \u0625\u0646\u062A\u0627\u062C \u0623\u0648\u0644 \u0634\u0627\u0644 \u0634\u062A\u0648\u064A \u0644\u0643\u0650.",
    price: 150,
    category: "crochet",
    level: "Beginner",
    language: "ar",
    thumbnailUrl: "/images/learning-section.png",
    isPublished: true,
    instructorName: "\u0641\u0627\u0637\u0645\u0629 \u0639\u0644\u064A",
    instructorProfileId: "inst_1",
    modules: [
      {
        id: "m1",
        title: "\u0627\u0644\u062A\u0639\u0631\u064A\u0641 \u0628\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0648\u0627\u0644\u063A\u0631\u0632 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
        orderIndex: 1,
        lessons: [
          { id: "l1", title: "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0625\u0628\u0631 \u0648\u0627\u0644\u062E\u064A\u0648\u0637 \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u062E\u062A\u064A\u0627\u0631\u0647\u0627", orderIndex: 1, durationMinutes: 15 },
          { id: "l2", title: "\u063A\u0631\u0632\u0629 \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0648\u0627\u0644\u0639\u0645\u0648\u062F \u0628\u0627\u0644\u062A\u0641\u0635\u064A\u0644", orderIndex: 2, durationMinutes: 20 }
        ]
      },
      {
        id: "m2",
        title: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0645\u0644\u064A\u0629",
        orderIndex: 2,
        lessons: [
          { id: "l3", title: "\u062D\u064A\u0627\u0643\u0629 \u0623\u0648\u0644 \u0634\u0627\u0644 \u064A\u062F\u0648\u064A \u0628\u0633\u064A\u0637", orderIndex: 1, durationMinutes: 35 }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "\u0641\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    description: "\u062F\u0648\u0631\u0629 \u062A\u0637\u0628\u064A\u0642\u064A\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0643\u064A\u0641\u064A\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0634\u0645\u0639 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u060C \u062E\u0644\u0637 \u0627\u0644\u0639\u0637\u0648\u0631\u060C \u0648\u062A\u0635\u0645\u064A\u0645 \u0642\u0648\u0627\u0644\u0628 \u0645\u0645\u064A\u0632\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0646\u0632\u0644\u064A.",
    price: 200,
    category: "decor",
    level: "Beginner",
    language: "ar",
    thumbnailUrl: "/images/hero.png",
    isPublished: true,
    instructorName: "\u0633\u0627\u0631\u0629 \u0623\u062D\u0645\u062F",
    instructorProfileId: "inst_2",
    modules: [
      {
        id: "m3",
        title: "\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u062C\u0647\u064A\u0632",
        orderIndex: 1,
        lessons: [
          { id: "l4", title: "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0634\u0645\u0648\u0639 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629", orderIndex: 1, durationMinutes: 18 },
          { id: "l5", title: "\u062F\u0631\u062C\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0648\u0646\u0633\u0628 \u0627\u0644\u0639\u0637\u0648\u0631 \u0627\u0644\u0622\u0645\u0646\u0629", orderIndex: 2, durationMinutes: 22 }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u062C\u0648\u0647\u0631\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644\u064A\u0629",
    description: "\u062A\u0639\u0644\u0651\u0645\u064A \u0643\u064A\u0641\u064A\u0629 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062E\u0631\u0632\u060C \u0644\u0641 \u0627\u0644\u0623\u0633\u0644\u0627\u0643 \u0627\u0644\u0646\u062D\u0627\u0633\u064A\u0629 \u0648\u0635\u0646\u0627\u0639\u0629 \u0633\u0644\u0627\u0633\u0644 \u0648\u062E\u0648\u0627\u062A\u0645 \u0639\u0635\u0631\u064A\u0629 \u062A\u0646\u0627\u0633\u0628 \u0643\u0644 \u0627\u0644\u0623\u0630\u0648\u0627\u0642.",
    price: 180,
    category: "jewelry",
    level: "Intermediate",
    language: "ar",
    thumbnailUrl: "/images/marketplace-products.png",
    isPublished: true,
    instructorName: "\u0645\u0646\u0627\u0644 \u0645\u062D\u0645\u0648\u062F",
    instructorProfileId: "inst_3",
    modules: []
  },
  {
    id: "4",
    title: "\u0627\u0644\u0637\u0647\u064A \u0648\u062A\u0632\u064A\u064A\u0646 \u0627\u0644\u0643\u064A\u0643 \u0644\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062A",
    description: "\u062F\u0648\u0631\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u0627\u062A \u0644\u062A\u0639\u0644\u0651\u0645 \u0645\u0647\u0627\u0631\u0627\u062A \u062E\u0628\u0632 \u0627\u0644\u0627\u0633\u0628\u0648\u0646\u062C \u0643\u064A\u0643 \u0648\u062A\u0632\u064A\u064A\u0646\u0647\u0627 \u0628\u0627\u0644\u0643\u0631\u064A\u0645\u0629 \u0648\u0639\u062C\u064A\u0646\u0629 \u0627\u0644\u0633\u0643\u0631 \u0644\u0639\u0645\u0644 \u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u0632\u0644\u064A \u0646\u0627\u062C\u062D.",
    price: 250,
    category: "cooking",
    level: "Beginner",
    language: "ar",
    thumbnailUrl: "/images/about-brand-story.png",
    isPublished: true,
    instructorName: "\u0627\u0644\u0634\u064A\u0641 \u0645\u0646\u0649 \u064A\u0648\u0633\u0641",
    instructorProfileId: "inst_4",
    modules: []
  }
];
var MOCK_PRODUCTS = [
  {
    id: "p1",
    productId: "p1",
    productVariantId: "v1",
    name: "\u0634\u0627\u0644 \u0635\u0648\u0641 \u0643\u0631\u0648\u0634\u064A\u0647 \u064A\u062F\u0648\u064A \u062F\u0627\u0641\u0626",
    title: "\u0634\u0627\u0644 \u0635\u0648\u0641 \u0643\u0631\u0648\u0634\u064A\u0647 \u064A\u062F\u0648\u064A \u062F\u0627\u0641\u0626",
    price: 350,
    sellerName: "\u0645\u0631\u064A\u0645 \u0644\u0644\u0643\u0631\u0648\u0634\u064A\u0647",
    category: "crochet",
    imageUrl: "/images/learning-section.png",
    score: 9.5
  },
  {
    id: "p2",
    productId: "p2",
    productVariantId: "v2",
    name: "\u0637\u0642\u0645 \u0634\u0645\u0648\u0639 \u0627\u0644\u0635\u0648\u064A\u0627 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    title: "\u0637\u0642\u0645 \u0634\u0645\u0648\u0639 \u0627\u0644\u0635\u0648\u064A\u0627 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    price: 180,
    sellerName: "\u0634\u0645\u0639 \u0648\u0648\u0631\u062F",
    category: "decor",
    imageUrl: "/images/hero.png",
    score: 9
  },
  {
    id: "p3",
    productId: "p3",
    productVariantId: "v3",
    name: "\u0639\u0642\u062F \u0630\u0647\u0628\u064A \u0645\u0635\u0645\u0645 \u064A\u062F\u0648\u064A\u0627\u064B \u0645\u0646 \u0627\u0644\u062E\u0631\u0632 \u0627\u0644\u0646\u0627\u0639\u0645",
    title: "\u0639\u0642\u062F \u0630\u0647\u0628\u064A \u0645\u0635\u0645\u0645 \u064A\u062F\u0648\u064A\u0627\u064B \u0645\u0646 \u0627\u0644\u062E\u0631\u0632 \u0627\u0644\u0646\u0627\u0639\u0645",
    price: 120,
    sellerName: "\u0645\u062C\u0648\u0647\u0631\u0627\u062A \u0647\u0646\u0627\u0621",
    category: "jewelry",
    imageUrl: "/images/marketplace-products.png",
    score: 8.8
  },
  {
    id: "p4",
    productId: "p4",
    productVariantId: "v4",
    name: "\u0643\u064A\u0643 \u0627\u0644\u0634\u0648\u0643\u0648\u0644\u0627\u062A\u0629 \u0627\u0644\u0628\u064A\u062A\u064A \u0627\u0644\u0645\u0632\u064A\u0646 \u0628\u0627\u0644\u0643\u0631\u064A\u0645\u0629",
    title: "\u0643\u064A\u0643 \u0627\u0644\u0634\u0648\u0643\u0648\u0644\u0627\u062A\u0629 \u0627\u0644\u0628\u064A\u062A\u064A \u0627\u0644\u0645\u0632\u064A\u0646 \u0628\u0627\u0644\u0643\u0631\u064A\u0645\u0629",
    price: 220,
    sellerName: "\u062D\u0644\u0648\u064A\u0627\u062A \u0631\u0646\u0627",
    category: "food",
    imageUrl: "/images/about-brand-story.png",
    score: 9.2
  }
];
var MOCK_ENROLLMENTS = [
  {
    enrollmentId: "e1",
    id: "e1",
    courseId: "1",
    courseTitle: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646",
    title: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646",
    progressPercent: 40,
    progress: 0.4,
    thumbnailUrl: "/images/learning-section.png"
  },
  {
    enrollmentId: "e2",
    id: "e2",
    courseId: "2",
    courseTitle: "\u0641\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    title: "\u0641\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    progressPercent: 0,
    progress: 0,
    thumbnailUrl: "/images/hero.png"
  }
];
var MOCK_RECOMMENDED_COURSES = [
  {
    courseId: "1",
    title: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646",
    category: "crochet",
    level: "Beginner",
    price: 150,
    score: 9.8,
    reasons: ["\u0645\u0646\u0627\u0633\u0628 \u0644\u0627\u0647\u062A\u0645\u0627\u0645\u0643 \u0628\u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647", "\u062F\u0648\u0631\u0629 \u0628\u062A\u0642\u064A\u064A\u0645 \u0645\u0645\u062A\u0627\u0632 \u0645\u0646 \u0637\u0627\u0644\u0628\u0627\u062A \u0623\u062E\u0631\u064A\u0627\u062A"]
  },
  {
    courseId: "2",
    title: "\u0641\u0646 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0639\u0637\u0631\u0629",
    category: "decor",
    level: "Beginner",
    price: 200,
    score: 9.2,
    reasons: ["\u0633\u0647\u0644 \u0627\u0644\u0628\u062F\u0621 \u0628\u0647 \u0643\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u0632\u0644\u064A", "\u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u0639\u0645\u0644\u064A \u0645\u0628\u0627\u0634\u0631"]
  }
];
var MOCK_CHAT_MESSAGES = [
  { messageId: "msg1", role: "assistant", content: "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0650 \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A \u0644\u0640 Femora! \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0633\u0627\u0639\u062F\u062A\u0643\u0650 \u0627\u0644\u064A\u0648\u0645\u061F \u064A\u0645\u0643\u0646\u0643\u0650 \u0633\u0624\u0627\u0644\u064A \u0639\u0646 \u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0627\u0642\u062A\u0631\u0627\u062D \u062F\u0648\u0631\u0627\u062A \u062A\u062F\u0631\u064A\u0628\u064A\u0629.", sentAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var MOCK_CONVERSATIONS = [
  { conversationId: "c1", title: "\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u0634\u0627\u0644 \u0627\u0644\u0635\u0648\u0641", updatedAt: (/* @__PURE__ */ new Date()).toISOString() },
  { conversationId: "c2", title: "\u0627\u0642\u062A\u0631\u0627\u062D \u062F\u0648\u0631\u0627\u062A \u0643\u0631\u0648\u0634\u064A\u0647 \u0645\u062A\u0642\u062F\u0645\u0629", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var MOCK_APPROVALS = [
  { id: "app_1", type: "Instructor", status: "Pending", userId: "101", createdAt: (/* @__PURE__ */ new Date()).toISOString() },
  { id: "app_2", type: "Seller", status: "Pending", userId: "102", createdAt: (/* @__PURE__ */ new Date()).toISOString() }
];
var MOCK_SUBSCRIPTION = {
  planName: "\u0645\u062A\u0642\u062F\u0651\u0645",
  status: "Active",
  expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString()
};
var MOCK_ORDERS = [
  {
    orderId: "o1",
    id: "o1",
    status: "Delivered",
    total: 350,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    items: [
      {
        cartItemId: "ci1",
        productId: "p1",
        productName: "\u0634\u0627\u0644 \u0635\u0648\u0641 \u0643\u0631\u0648\u0634\u064A\u0647 \u064A\u062F\u0648\u064A \u062F\u0627\u0641\u0626",
        name: "\u0634\u0627\u0644 \u0635\u0648\u0641 \u0643\u0631\u0648\u0634\u064A\u0647 \u064A\u062F\u0648\u064A \u062F\u0627\u0641\u0626",
        quantity: 1,
        unitPrice: 350,
        price: 350
      }
    ]
  }
];

// src/app/core/services/api-client.service.ts
var ApiClient = class _ApiClient {
  http = inject(HttpClient);
  notifications = inject(NotificationService);
  getBaseUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    const apiPrefix = environment.apiUrl || "";
    return `${apiPrefix}${url}`;
  }
  getRequestOptions(options) {
    const opts = options || {};
    if (opts.withCredentials === void 0) {
      opts.withCredentials = true;
    }
    return opts;
  }
  get(url, options) {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);
    return this.http.get(fullUrl, opts).pipe(catchError((error) => this.handleErrorOrFallback("GET", url, error, void 0, opts)));
  }
  post(url, body, options) {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);
    return this.http.post(fullUrl, body, opts).pipe(catchError((error) => this.handleErrorOrFallback("POST", url, error, body, opts)));
  }
  put(url, body, options) {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);
    return this.http.put(fullUrl, body, opts).pipe(catchError((error) => this.handleErrorOrFallback("PUT", url, error, body, opts)));
  }
  delete(url, options) {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);
    return this.http.delete(fullUrl, opts).pipe(catchError((error) => this.handleErrorOrFallback("DELETE", url, error, void 0, opts)));
  }
  /**
   * Handle network/HTTP errors or automatically fallback to local mock data if the backend is offline.
   */
  handleErrorOrFallback(method, url, error, body, options) {
    const isOffline = error.status === 0 || error.status === 504 || error.status === 404;
    if (isOffline) {
      const mockResult = this.getMockResponse(method, url, body, options);
      if (mockResult !== void 0) {
        console.warn(`[ApiClient] Backend server offline. Serving fallback mock data for: ${method} ${url}`);
        return of(mockResult);
      }
    }
    const errorMsg = error.error?.message || error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645";
    this.notifications.error(errorMsg);
    return throwError(() => error);
  }
  /**
   * Evaluates the requested endpoint and returns mock seed data.
   */
  getMockResponse(method, url, body, options) {
    const cleanUrl = url.split("?")[0] || "";
    if (cleanUrl.match(/\/api\/courses$/)) {
      if (method === "GET") {
        const search = options?.params?.Search || options?.params?.get?.("Search");
        if (search) {
          return MOCK_COURSES.filter((c) => c.title.includes(search) || c.description && c.description.includes(search));
        }
        return MOCK_COURSES;
      }
      if (method === "POST") {
        return "new_course_id";
      }
    }
    const courseDetailMatch = cleanUrl.match(/\/api\/courses\/([^/]+)$/);
    if (courseDetailMatch) {
      const id = courseDetailMatch[1];
      if (method === "GET") {
        const found = MOCK_COURSES.find((c) => c.id === id);
        return found || MOCK_COURSES[0];
      }
      if (method === "PUT") {
        return { success: true };
      }
    }
    if (cleanUrl.match(/\/api\/courses\/([^/]+)\/publish$/)) {
      return { success: true };
    }
    if (cleanUrl.endsWith("/products")) {
      if (method === "GET") {
        return MOCK_PRODUCTS;
      }
      if (method === "POST") {
        return "new_product_id";
      }
    }
    const productDetailMatch = cleanUrl.match(/\/api\/products\/([^/]+)$/);
    if (productDetailMatch) {
      const id = productDetailMatch[1];
      if (method === "GET") {
        const found = MOCK_PRODUCTS.find((p) => p.id === id || p.productId === id);
        return found || MOCK_PRODUCTS[0];
      }
    }
    if (cleanUrl.match(/\/api\/enrollments$/)) {
      return MOCK_ENROLLMENTS;
    }
    if (cleanUrl.match(/\/api\/ai\/recommendations\/courses$/)) {
      return MOCK_RECOMMENDED_COURSES;
    }
    if (cleanUrl.match(/\/api\/ai\/conversations$/)) {
      return MOCK_CONVERSATIONS;
    }
    const convDetailMatch = cleanUrl.match(/\/api\/ai\/conversations\/([^/]+)$/);
    if (convDetailMatch) {
      const id = convDetailMatch[1];
      return {
        conversationId: id,
        title: "\u0645\u062D\u0627\u062F\u062B\u0629 \u062A\u062C\u0631\u064A\u0628\u064A\u0629",
        messages: MOCK_CHAT_MESSAGES
      };
    }
    if (cleanUrl.match(/\/api\/ai\/chat$/)) {
      return {
        conversationId: body?.conversationId || "mock_conv_id",
        reply: "\u0647\u0630\u0627 \u0631\u062F \u062A\u062C\u0631\u064A\u0628\u064A \u062A\u0644\u0642\u0627\u0626\u064A \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A \u0644\u0640 Femora (\u0648\u0636\u0639 \u0639\u062F\u0645 \u0627\u0644\u0627\u062A\u0635\u0627\u0644). \u064A\u0645\u0643\u0646\u0643 \u0637\u0631\u062D \u0623\u064A \u0633\u0624\u0627\u0644!"
      };
    }
    if (cleanUrl.match(/\/api\/ai\/interests$/)) {
      return { success: true };
    }
    if (cleanUrl.match(/\/api\/approvals\/instructors\/apply$/)) {
      return "approval_inst_id";
    }
    if (cleanUrl.match(/\/api\/approvals\/sellers\/apply$/)) {
      return "approval_sell_id";
    }
    if (cleanUrl.match(/\/api\/approvals\/admin\/approvals\/pending$/)) {
      return MOCK_APPROVALS;
    }
    const reviewMatch = cleanUrl.match(/\/api\/approvals\/admin\/approvals\/([^/]+)\/review$/);
    if (reviewMatch) {
      return { success: true };
    }
    if (cleanUrl.match(/\/api\/subscriptions\/status$/)) {
      return MOCK_SUBSCRIPTION;
    }
    if (cleanUrl.match(/\/api\/cart\/([^/]+)$/) || cleanUrl.match(/\/api\/cart$/)) {
      return {
        id: "cart_1",
        cartId: "cart_1",
        items: [],
        total: 0
      };
    }
    if (cleanUrl.match(/\/api\/orders$/)) {
      if (method === "GET") {
        return MOCK_ORDERS;
      }
      if (method === "POST") {
        return MOCK_ORDERS[0];
      }
    }
    return void 0;
  }
  static \u0275fac = function ApiClient_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiClient)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiClient, factory: _ApiClient.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiClient, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ApiClient,
  runInBrowser
};
//# sourceMappingURL=chunk-F6FSQHYX.mjs.map
