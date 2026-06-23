import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { CourseService } from '../../../lms/services/course.service';
import { ProductService } from '../../../marketplace/services/product.service';
import { Course, RecommendedProduct } from '../../../../core/models/api.model';
import { courseEmoji, formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, Navbar],
  templateUrl: './landing.html',
})
export class Landing {
  private readonly coursesApi = inject(CourseService);
  private readonly productsApi = inject(ProductService);

  readonly features = [
    {
      icon: '🎓',
      title: 'تعلّمي مهارات حقيقية',
      desc: 'دورات تدريبية متخصصة في الحرف اليدوية والمنتجات المنزلية',
    },
    {
      icon: '🛍️',
      title: 'بيعي منتجاتك',
      desc: 'سوق إلكتروني مخصص لعرض وبيع إبداعاتك بأسعار ذكية',
    },
    {
      icon: '🤖',
      title: 'مساعد ذكي',
      desc: 'توصيات مخصصة ومساعدة في التسعير والتعلّم',
    },
  ];

  readonly plans = [
    {
      name: 'مجاني',
      price: '0 ج.م',
      period: 'للبدء والاستكشاف',
      featured: false,
      cta: 'ابدئي مجاناً',
      features: ['تصفّح الدورات والمنتجات', 'ملف شخصي أساسي', '5 رسائل مع المساعد الذكي'],
    },
    {
      name: 'متقدّم',
      price: '99 ج.م',
      period: 'شهرياً',
      featured: true,
      cta: 'اشتركي الآن',
      features: ['وصول لجميع الدورات', 'مساعد ذكي غير محدود', 'أدوات بيع متقدّمة', 'شارة موثّقة'],
    },
    {
      name: 'محترف',
      price: '249 ج.م',
      period: 'شهرياً',
      featured: false,
      cta: 'تواصلي معنا',
      features: ['كل مميزات المتقدّم', 'لوحة تحكم مدربة', 'عمولة أقل على المبيعات', 'دعم أولوية'],
    },
  ];

  courses: Course[] = [];
  products: RecommendedProduct[] = [];

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      this.coursesApi.list({ PageSize: 3 }).subscribe({
        next: (courses) => (this.courses = courses.slice(0, 3)),
      });

      this.productsApi.list(3).subscribe({
        next: (products) => (this.products = products.slice(0, 3)),
      });
    });
  }
}
