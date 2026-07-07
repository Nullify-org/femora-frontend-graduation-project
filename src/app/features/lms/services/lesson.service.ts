import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { LessonDetails } from '../../../core/models/api.model';

<<<<<<< HEAD
/** Body used to create a new lesson inside a module (POST /api/lessons). */
export interface CreateLessonRequest {
  moduleId: string;
  title: string;
  type: number;
  contentUrl?: string | null;
  articleContent?: string | null;
  durationSeconds: number;
  orderIndex: number;
  isPreview: boolean;
}

=======
>>>>>>> origin/master
@Injectable({ providedIn: 'root' })
export class LessonService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/lessons';

  getById(lessonId: string): Observable<LessonDetails> {
    return this.api.get<LessonDetails>(`${this.base}/${lessonId}`);
  }

  update(id: string, body: any): Observable<any> {
<<<<<<< HEAD
    return this.api.put(`/api/lessons/${id}`, body);
  }

  // ========================
  // NEW: needed by "Create Course" builder
  // ========================

  /** POST /api/lessons */
  create(body: CreateLessonRequest): Observable<any> {
    return this.api.post<any>(this.base, body);
  }

  /** DELETE /api/lessons/{lessonId} */
  delete(lessonId: string): Observable<unknown> {
    return this.api.delete(`${this.base}/${lessonId}`);
  }

  /** PUT /api/lessons/{lessonId}/reorder */
  reorder(lessonId: string, orderIndex: number): Observable<unknown> {
    return this.api.put(`${this.base}/${lessonId}/reorder`, { orderIndex });
  }
}
=======
  return this.api.put(`/api/lessons/${id}`, body);
}
}
>>>>>>> origin/master
