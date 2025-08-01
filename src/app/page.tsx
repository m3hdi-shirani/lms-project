// import { CourseSummary } from "@/types/course-summery.interface";
import { API_URL } from "@/configs/global";
import { homeFeatures } from "@/data/home-feature";
import { BlogPostSummery } from "@/types/blog-post-summery.interface";
import { Suspense } from "react";
import BlogPostCardList from "./(blog)/_components/blogPostCardList";
import CourseCardList from "./(courses)/_components/CourseCardList";
import { Button } from "./_components/button";
import Feature from "./_components/feature/Feature";
import HomeHeroSection from "./_components/home-hero-section/HomeHeroSection";
import { IconArrowLeftFill } from "./_components/icons/icons";
import { CardPlaceholder } from "./_components/placeholders";
import { TestimonialList } from "./_components/testimonial/testimonial-list";
import { testimonials } from "@/data/testimonials";

async function getNewestPosts(count: number): Promise<BlogPostSummery[]> {
  const response = await fetch(`${API_URL}/blog/newest/${count}`);
  return response.json();
}

export default async function Home() {
  const newestBlogPostsData = getNewestPosts(4);

  const [newestBlogPosts] = await Promise.all([newestBlogPostsData]);

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
        <Suspense fallback={<CardPlaceholder count={4} className="mt-5" />}>
          <CourseCardList courses={[]} />
        </Suspense>
      </section>

      <section className="px-2 my-40">
        {/* <div className="sticky top-0 pt-0 text-center"> */}
        <div className="relative pt-0 text-center">
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

          <h2
            lang="en"
            className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
          >
            ReactJs & Next.js
          </h2>
          <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
            ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای
            وب! پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان
            یادگیری رو شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و کاملاً
            کاربردی کنارت هستیم.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
            <Button
              variant="primary"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              دوره‌های ری اکت و نکست‌ جی‌اس
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button
              variant="neutral"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              مقالات ری اکت و نکست‌ جی‌اس
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
          <div className="text-center xl:text-right">
            <h2 className="text-2xl font-extrabold">
              تازه‌ترین مقاله‌های آموزشی
            </h2>
            <p className="mt-3 text-lg">
              به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در اختیارت
              می‌ذاریم؛ چون پیشرفتت برامون مهمه!
            </p>
          </div>
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            همه مقاله‌ها
            <IconArrowLeftFill fill="currentColor" />
          </Button>
        </div>
        <BlogPostCardList posts={newestBlogPosts} />
      </section>

      <div className="relative mt-32">
        <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
        <h2 className="text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit">
          <span className="-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3"></span>
          تجربه هم‌میسرهای کلاسبن
        </h2>
        <p className=" mb-32 text-lg text-center mt-2">
          تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد دوره‌های کلاسبن
          چیه
        </p>
        <TestimonialList testimonials={testimonials} />
      </div>
    </>
  );
}
