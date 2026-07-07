import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'courses/:id',              renderMode: RenderMode.Server },
  { path: 'lms/course/:id',           renderMode: RenderMode.Server },
  { path: 'lms/player/:id',           renderMode: RenderMode.Server },
  { path: 'lms/quiz/:id',             renderMode: RenderMode.Server },
  { path: 'marketplace/product/:id',  renderMode: RenderMode.Server },
  { path: 'dashboard/**',             renderMode: RenderMode.Server },
  { path: '**',                       renderMode: RenderMode.Server },
];