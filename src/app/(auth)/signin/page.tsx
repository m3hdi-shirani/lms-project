import Link from "next/link";

const SigninPage = () => {
  return (
    <div className="w-full text-5xl flex flex-col justify-center items-center">
      <h1>This is signin page</h1>
      <Link href="/verify">Go to verification page</Link>
    </div>
  );
};

export default SigninPage;
