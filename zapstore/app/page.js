import Link from "next/link";



export default function Home() {
  return (
    <>
    <h1>
      <Link href={"/login"}>Go to Login Page</Link>
    </h1>
    
    </>
  );
}
