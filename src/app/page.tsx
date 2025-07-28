import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <>
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
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
