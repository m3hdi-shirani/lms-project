import { CourseLecture } from "./course-lecture.interface";

export interface CourseChapter {
  id: string;
  title: string;
  numOfLectures: number;
  duration: string;
  lectures: CourseLecture[];
}
