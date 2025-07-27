import { ReactNode } from "react";

const StudentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center uppercase">
        student sidebar
      </aside>
      <main className="w-full text-5xl flex justify-center items-center">
        {children}
      </main>
    </>
  );
};

export default StudentLayout;
