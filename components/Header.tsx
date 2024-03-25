import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <div className="fixed z-[60] flex items-center bg-transparent backdrop-blur-xl   h-12 w-full place-items-center">
   <Link href="/">
   <Image src="/logo/logo.svg" className="ml-2" height={40} width={40} alt="A train (logo)" ></Image>
   </Link>

      </div>
    </>
  );
}
