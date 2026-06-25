export type ProfileType = 'Trainee' | 'Instructor' | 'Seller' | 'Admin';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string | null;
  role: string;
}

export interface AvailableProfile {
  id: number;
  name: ProfileType;
  displayName: string;
  description: string;
  icon: string;
}

export interface InterestOption {
  id: string;
  label: string;
  emoji: string;
}

export const INTEREST_OPTIONS: InterestOption[] = [
  { id: 'crochet', label: 'الكروشيه والتريكو', emoji: '🧶' },
  { id: 'cooking', label: 'الطبخ والحلويات', emoji: '🍳' },
  { id: 'painting', label: 'الرسم والفنون', emoji: '🎨' },
  { id: 'pottery', label: 'الفخار والسيراميك', emoji: '🏺' },
  { id: 'jewelry', label: 'صناعة المجوهرات', emoji: '💍' },
  { id: 'accessories', label: 'الإكسسوارات والحقائب', emoji: '👜' },
  { id: 'decor', label: 'الديكور المنزلي', emoji: '🏡' },
  { id: 'photography', label: 'تصوير المنتجات', emoji: '📸' },
  { id: 'woodwork', label: 'أعمال خشبية', emoji: '🪵' },
  { id: 'sewing', label: 'الخياطة والتفصيل', emoji: '🧵' },
  { id: 'candles', label: 'صناعة الشموع والعطور', emoji: '🕯️' },
  { id: 'other', label: 'أخرى', emoji: '✨' },
];
