import { Component, ElementRef, inject, AfterViewInit, OnDestroy, effect, viewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { CourseService } from '../../../lms/services/course.service';
import { ProductService } from '../../../marketplace/services/product.service';
import { ChatService } from '../../../ai-assistant/services/chat.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LanguageService } from '../../../../core/services/language.service';
import { SubscriptionService } from '../../../../core/services/subscription.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Course, RecommendedProduct, RecommendedCourse } from '../../../../core/models/api.model';
import { courseEmoji, formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { MOCK_PRODUCTS } from '../../../../core/utils/seed-data';
import { SwitchRole } from '../../../dashboard/widgets/switch-role/switch-role';
import { CountUp } from 'countup.js';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  LucideGraduationCap,
  LucideUsers,
  LucideAward,
  LucideChevronDown,
  LucideChevronUp,
} from '@lucide/angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink,
    Navbar,
    TranslatePipe,
    LucideGraduationCap,
    LucideUsers,
    LucideAward,
    LucideChevronDown,
    LucideChevronUp,
    SwitchRole,
  ],
  templateUrl: './landing.html',
})
export class Landing implements AfterViewInit, OnDestroy {
  private readonly coursesApi  = inject(CourseService);
  private readonly productsApi = inject(ProductService);
  private readonly chatApi     = inject(ChatService);
  readonly auth        = inject(AuthService);
  private readonly language    = inject(LanguageService);
  private readonly translate   = inject(TranslateService);
  private readonly subscriptionsApi = inject(SubscriptionService);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly statsSection    = viewChild<ElementRef>('statsSection');
  readonly heroSwiperEl    = viewChild<ElementRef>('heroSwiper');
  readonly coursesSwiperEl = viewChild<ElementRef>('coursesSwiper');

  activeFaqIndex: number | null = null;
  heroTypedHeadline = '';
  heroDirection: 'rtl' | 'ltr' = 'rtl';

  private heroTypingTimers: Array<ReturnType<typeof setTimeout>> = [];
  private readonly heroTypingEffect = effect(() => {
    this.language.currentLang();
    this.restartHeroTypewriter();
  });

  readonly faqs = [
    {
      q: 'ما هي منصة Femora؟',
      a: 'Femora هي منصة متكاملة مخصصة لتمكين المرأة صاحبة المشاريع المنزلية والحرف اليدوية في مصر. نوفر دورات تعليمية بشهادات معتمدة، وسوق إلكتروني لبيع المنتجات مباشرة للعملاء، بالإضافة إلى مساعد ذكي بالذكاء الاصطناعي لتسهيل عمليات البيع والتسويق والتسعير.',
    },
    {
      q: 'كيف يمكنني البدء بالبيع أو التدريس؟',
      a: 'الأمر بسيط! قومي بإنشاء حساب مجاني، ومن ثم تصفحي لوحة التحكم للتقديم كمدربة أو بائعة. سيقوم فريق الإدارة بمراجعة طلبك وتفعيله في غضون 24 ساعة.',
    },
    {
      q: 'هل الشهادات المقدمة معتمدة؟',
      a: 'نعم، جميع الدورات التي تكملينها بنجاح وتحصلين فيها على درجة مرور في الاختبارات المرفقة تمنحكِ شهادة إتمام رقمية معتمدة من المنصة تظهر في ملفكِ الشخصي.',
    },
    {
      q: 'كيف تعمل الرسوم والاشتراكات؟',
      a: 'يمكنكِ البدء بخطة مجانية تتيح لكِ استكشاف المنصة وتلقي نصائح المساعد الذكي. للاستفادة الكاملة من ميزات البيع المتقدمة والوصول إلى كافة الدورات، يمكنكِ الترقية لأي من الخطط المدفوعة بأسعار رمزية تبدأ من 99 جنيهاً مصرياً شهرياً.',
    },
  ];

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  readonly features = [
    { icon: '🎓', title: '25+ مدرب محترف',  desc: 'خبراء في الحرف اليدوية والمنتجات المنزلية' },
    { icon: '👩‍🎓', title: '5000+ طالبة',     desc: 'مجتمع نشط من صانعات ومبدعات' },
    { icon: '🏅', title: 'شهادات معتمدة',   desc: 'اعتماد رسمي عند إكمال الدورات' },
  ];

  readonly counters = [
    { id: 'stat-satisfaction', target: 98,   suffix: '%', labelKey: 'STATS.SATISFACTION' },
    { id: 'stat-courses',      target: 200,  suffix: '+', labelKey: 'STATS.COURSES' },
    { id: 'stat-students',     target: 5000, suffix: '+', labelKey: 'STATS.STUDENTS' },
  ];

  readonly heroSlides = [
    { src: '/images/hero.png', altKey: 'HERO.IMAGE_ALT_1' },
    { src: '/images/learning-section.png', altKey: 'HERO.IMAGE_ALT_2' },
    { src: '/images/marketplace-products.png', altKey: 'HERO.IMAGE_ALT_3' },
  ];


  readonly plans = [
    {
      name: 'مجاني',
      planKey: 'Free',
      planId: '',
      monthlyPrice: '0 ج.م',
      annualPrice: '0 ج.م',
      period: 'للبدء والاستكشاف',
      featured: false,
      cta: 'ابدئي مجاناً',
      features: ['تصفّح الدورات والمنتجات', 'ملف شخصي أساسي', '5 رسائل مع المساعد الذكي'],
    },
    {
      name: 'متقدّم',
      planKey: 'Basic',
      planId: '',
      monthlyPrice: '99 ج.م',
      annualPrice: '990 ج.م',
      period: 'شهرياً',
      featured: true,
      cta: 'اشتركي الآن',
      features: ['وصول لجميع الدورات', 'مساعد ذكي غير محدود', 'أدوات بيع متقدّمة', 'شارة موثّقة'],
    },
    {
      name: 'محترف',
      planKey: 'Pro',
      planId: '',
      monthlyPrice: '249 ج.م',
      annualPrice: '2490 ج.م',
      period: 'شهرياً',
      featured: false,
      cta: 'اشتركي الآن',
      features: ['كل مميزات المتقدّم', 'لوحة تحكم مدربة', 'عمولة أقل على المبيعات', 'دعم أولوية'],
    },
  ];

  courses: (Course | RecommendedCourse)[] = [];
  products: RecommendedProduct[] = [];
  billingCycle: 'Monthly' | 'Annual' = 'Monthly';
  currentPlanName = '';
  currentPlanId = '';
  upgradingPlanKey: string | null = null;

  readonly formatPrice  = formatPrice;
  readonly courseEmoji  = courseEmoji;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      if (this.auth.isAuthenticated()) {
        // Buyer (no activeProfile) has no TraineeProfile → skip AI recommendations
        if (this.auth.activeProfile()) {
          this.chatApi.recommendedCourses(6).subscribe({
            next: (courses) => {
              this.courses = courses.slice(0, 6);
              this.animateCardsStagger();
            },
            error: () => this.loadFallbackCourses(),
          });
        } else {
          this.loadFallbackCourses();
        }
        this.subscriptionsApi.getStatus().subscribe({
          next: (s) => {
            this.currentPlanName = s.planName;
            this.currentPlanId = s.planId;
            if (s.billingCycle === 'Annual' || s.billingCycle === 'Yearly') {
              this.billingCycle = 'Annual';
            }
          },
          error: () => {},
        });
      } else {
        this.loadFallbackCourses();
      }

      this.productsApi.list(3).subscribe({
        next: (products) => {
          this.products = products.slice(0, 3);
          this.animateCardsStagger();
        },
        error: () => {
          this.products = MOCK_PRODUCTS.slice(0, 3);
          this.animateCardsStagger();
        },
      });
    });
  }

  ngAfterViewInit(): void {
    runInBrowser(() => {
      gsap.registerPlugin(ScrollTrigger);
      this.initHeroSwiper();
      this.initCoursesSwiper();
      this.initCountUp();
      this.initScrollAnimations();
      // Animate static cards (value props, pricing) that are in the DOM at load time
      this.animateCardsStagger();
    });
  }


  ngOnDestroy(): void {
    this.clearHeroTypingTimers();
  }

  planPrice(plan: { monthlyPrice: string; annualPrice: string }): string {
    return this.billingCycle === 'Monthly' ? plan.monthlyPrice : plan.annualPrice;
  }

  planPeriod(): string {
    return this.billingCycle === 'Monthly' ? 'شهرياً' : 'سنوياً';
  }

  isCurrentPlan(plan: { planKey: string }): boolean {
    if (!this.currentPlanName) return false;
    return this.currentPlanName.toLowerCase() === plan.planKey.toLowerCase();
  }

  handlePlanCta(plan: {
    planKey: string;
    planId: string;
    cta: string;
  }): void {
    if (plan.planKey === 'Free') {
      this.router.navigate(['/register']);
      return;
    }

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/register']);
      return;
    }

    if (this.isCurrentPlan(plan)) return;

    const planId = plan.planId;
    if (!planId) {
      this.notifications.info('تواصلي مع الدعم لتفعيل هذه الخطة');
      return;
    }

    this.upgradingPlanKey = plan.planKey;
    this.subscriptionsApi.upgrade({ planId, billingCycle: this.billingCycle }).subscribe({
      next: () => {
        this.upgradingPlanKey = null;
        this.currentPlanName = plan.planKey;
        this.notifications.success('تم ترقية الاشتراك بنجاح');
      },
      error: () => {
        this.upgradingPlanKey = null;
        this.notifications.error('تعذّر ترقية الاشتراك. حاولي مرة أخرى.');
      },
    });
  }

  courseLink(course: Course | RecommendedCourse): string[] {
    const id = 'courseId' in course ? course.courseId : course.id;
    return ['/courses', String(id)];
  }

  courseTitle(course: Course | RecommendedCourse): string {
    return course.title ?? '';
  }

  private restartHeroTypewriter(): void {
    this.clearHeroTypingTimers();

    const headline = this.translate.instant('HERO.HEADLINE') as string;
    this.heroDirection = this.language.currentLang() === 'ar' ? 'rtl' : 'ltr';
    this.heroTypedHeadline = '';

    const TYPE_SPEED   = 160;   // ms per character while typing
    const ERASE_SPEED  = 80;    // ms per character while erasing
    const PAUSE_AFTER_TYPE  = 2800; // ms to wait at full text before erasing
    const PAUSE_AFTER_ERASE = 700;  // ms to wait at empty before retyping

    const chars = Array.from(headline);

    const update = (text: string) => {
      this.zone.run(() => {
        this.heroTypedHeadline = text;
        this.cdr.detectChanges();
      });
    };

    const scheduleLoop = () => {
      this.zone.runOutsideAngular(() => {
        let accumulated = 0;

        // ── TYPE phase ──────────────────────────────────────────
        chars.forEach((_, i) => {
          accumulated += TYPE_SPEED;
          const t = setTimeout(() => update(chars.slice(0, i + 1).join('')), accumulated);
          this.heroTypingTimers.push(t);
        });

        // ── PAUSE after full text ───────────────────────────────
        accumulated += PAUSE_AFTER_TYPE;

        // ── ERASE phase ─────────────────────────────────────────
        for (let i = chars.length - 1; i >= 0; i--) {
          accumulated += ERASE_SPEED;
          const text = chars.slice(0, i).join('');
          const t = setTimeout(() => update(text), accumulated);
          this.heroTypingTimers.push(t);
        }

        // ── PAUSE after empty ───────────────────────────────────
        accumulated += PAUSE_AFTER_ERASE;

        // ── REPEAT ─────────────────────────────────────────────
        const loopTimer = setTimeout(() => {
          this.clearHeroTypingTimers();
          scheduleLoop();
        }, accumulated);
        this.heroTypingTimers.push(loopTimer);
      });
    };

    scheduleLoop();
  }

  private clearHeroTypingTimers(): void {
    for (const timer of this.heroTypingTimers) {
      clearTimeout(timer);
    }
    this.heroTypingTimers = [];
  }

 private loadFallbackCourses(): void {
  this.coursesApi.getCourses({
    pageSize: 6,
    pageNumber: 1,
  }).subscribe({
    next: (response) => {
      this.courses = response.data;
      this.animateCardsStagger(); // ← move inside the callback
    },
    error: () => {
      this.courses = [];
    },
  });
}
  

  // ── Swiper ──────────────────────────────────────────────────────────────────
  private initHeroSwiper(): void {
    const el = this.heroSwiperEl()?.nativeElement;
    if (!el) return;
    new Swiper(el, {
      modules: [Autoplay, EffectFade, Pagination],
      effect: 'fade',
      autoplay: { delay: 4000, disableOnInteraction: false },
      loop: true,
      speed: 800,
      pagination: { el: '.hero-pagination', clickable: true },
    });
  }

  private initCoursesSwiper(): void {
    const el = this.coursesSwiperEl()?.nativeElement;
    if (!el) return;
    new Swiper(el, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: { nextEl: '.courses-next', prevEl: '.courses-prev' },
      breakpoints: {
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // ── Counter Animation ────────────────────────────────────────────────────────
  private initCountUp(): void {
    const section = this.statsSection()?.nativeElement as HTMLElement | undefined;
    if (!section) return;

    const startCounting = () => {
      // Animate stat cards in first
      const cards = section.querySelectorAll<HTMLElement>('.stat-card');
      cards.forEach((card) => card.classList.add('animated'));

      // Then count up each number
      for (const c of this.counters) {
        const el = document.getElementById(c.id);
        if (el) {
          const cu = new CountUp(el, c.target, {
            duration:     2.8,
            suffix:       c.suffix,
            useEasing:    true,
            useGrouping:  true,
            startVal:     0,
          });
          if (!cu.error) cu.start();
        }
      }
    };

    // If section already visible on load, start after a brief delay
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setTimeout(startCounting, 400);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
  }

  // ── GSAP Scroll Animations ───────────────────────────────────────────────────
  private initScrollAnimations(): void {
    const ease    = 'power3.out';
    const dur     = 0.85;
    const startAt = 'top 88%';

    // Ensure all section-reveal elements are visible by default before animating
    // (prevents flash of invisible content if GSAP fails or is slow)
    document.querySelectorAll<HTMLElement>('.section-reveal').forEach((el) => {
      gsap.set(el, { opacity: 1, y: 0 }); // ensure fallback is visible
    });

    // 1. Each section fades + slides up individually
    document.querySelectorAll<HTMLElement>('.section-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: dur,
          ease,
          scrollTrigger: {
            trigger: el,
            start: startAt,
            once: true,
          },
        },
      );
    });

    // 2. Slide from left/right for two-column layouts
    document.querySelectorAll<HTMLElement>('.slide-right').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 70 },
        {
          opacity: 1,
          x: 0,
          duration: dur,
          ease,
          scrollTrigger: {
            trigger: el,
            start: startAt,
            once: true,
          },
        },
      );
    });

    document.querySelectorAll<HTMLElement>('.slide-left').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -70 },
        {
          opacity: 1,
          x: 0,
          duration: dur,
          ease,
          scrollTrigger: {
            trigger: el,
            start: startAt,
            once: true,
          },
        },
      );
    });

    // 3. Card stagger is handled by animateCardsStagger() after dynamic data loads

    document.querySelectorAll<HTMLElement>('.hero-inline-title').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        },
      );
    });
  }

  // Runs after products/courses are rendered in DOM — re-scans for .cards-stagger containers
  private animateCardsStagger(): void {
    runInBrowser(() => {
      // Wait one tick for Angular to render the new items into the DOM
      setTimeout(() => {
        document.querySelectorAll<HTMLElement>('.cards-stagger').forEach((container) => {
          const items = container.querySelectorAll<HTMLElement>('.card-item');
          if (!items.length) return;

          // Skip containers already animated
          if (container.dataset['animated']) return;
          container.dataset['animated'] = '1';

          const rect = container.getBoundingClientRect();
          const alreadyVisible = rect.top < window.innerHeight * 0.92;

          gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: 'back.out(1.3)',
              delay: alreadyVisible ? 0.1 : 0,
              scrollTrigger: alreadyVisible
                ? undefined
                : {
                    trigger: container,
                    start: 'top 87%',
                    once: true,
                  },
            },
          );
        });
        ScrollTrigger.refresh();
      }, 80);
    });
  }
}
