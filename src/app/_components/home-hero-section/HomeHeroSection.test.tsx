import { render } from "@testing-library/react";
import HomeHeroSection from "./HomeHeroSection";

describe("Home hero section", () => {
  test("dispaly the home hero section", () => {
    const { container } = render(<HomeHeroSection />);
    expect(container).toMatchSnapshot(`
         <section className="bg-hero-pattern bg-no-repeat mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-2xl">
            خوش اومدی به ...
          </h3>
          <h1 className="text-3xl font-black xl:text-5xl gradient">
            مسیر صعود به قله‌های برنامه‌نویسی
          </h1>
          <p>
            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
            کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
            هواتو داریم.
          </p>
          <div className="mt-5 flex gap-4">
            <Button variant="primary" size="large">
              دورهای نکست و ری اکت
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه نویسی
            </Button>
          </div>
          <Image
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            src="/images/frameworks.png"
            alt=""
            width={412}
            height={39}
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt=""
          width={702}
          height={520}
        />
      </div>
    </section>
        `);
  });
});
