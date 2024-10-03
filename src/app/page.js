import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log('gaurav')
  return (
   <>
    <h1>Welcome to the next js project</h1>
 
    <Link href="/about">Link about</Link>
   </>
  );
}
