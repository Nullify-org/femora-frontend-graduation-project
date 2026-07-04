import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { LessonDetails } from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class LessonService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/lessons';

  getById(lessonId: string): Observable<LessonDetails> {
    return this.api.get<LessonDetails>(`${this.base}/${lessonId}`);
  }
}
