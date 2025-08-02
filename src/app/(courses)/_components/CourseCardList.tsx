import { CourseSummary } from "@/types/course-summery.interface";
import CourseCard from "./CourseCard";
import { API_URL } from "@/configs/global";

type CourseCardListProps = {
  courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  await new Promise((resovle) => setTimeout(resovle, 5000));
  const response = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
  });
  return response.json();
}

const CourseCardList: React.FC<CourseCardListProps> = async ({
  courses,
}: CourseCardListProps) => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};

export default CourseCardList;
