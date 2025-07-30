import { CourseSummary } from "@/types/course-summery.interface";
import HomeHeroSection from "./_components/home-hero-section/HomeHeroSection";

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

      <div className="container"></div>
    </>
  );
}
