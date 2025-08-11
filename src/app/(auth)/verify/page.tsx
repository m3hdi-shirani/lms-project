import Link from "next/link";

const VerifyPage = () => {
  return (
    <div className="w-full text-5xl flex flex-col justify-center items-center">
      <h1>This is verify page</h1>
      <Link href="/signin">Go to signin page</Link>
    </div>
  );
};

export default VerifyPage;
