import { CourseSortBy } from "../../../core/models/api.model";

export interface GetCoursesRequest {
  search?: string;
  category?: string;
  level?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: CourseSortBy;
  pageNumber?: number;
  pageSize?: number;
}
