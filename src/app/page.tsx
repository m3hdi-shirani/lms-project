import { CourseSummary } from "@/types/course-summery.interface";
import HomeHeroSection from "./_components/home-hero-section/HomeHeroSection";
import CourseCardList from "./(courses)/_components/CourseCardList";
import { homeFeatures } from "@/data/home-feature";
import Feature from "./_components/feature/Feature";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const response = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`
  );
  // if (!response.ok) {
  //   throw new Error("Failed to fetch newest courses");
  // }
  return response.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);

  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((feature) => (
            <Feature key={`feature-${feature.title}`} feature={feature} />
          ))}
        </div>
      </section>

      <section className="container  pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p className="mt-3 text-lg">
            برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
          </p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
