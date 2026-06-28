import { Course } from "./course.model";
import { Module } from "./module.model";


export interface CourseDetails extends Course {
  totalLessons: number;
  modules: Module[];
}
