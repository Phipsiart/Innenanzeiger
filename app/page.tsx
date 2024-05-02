import MainHeadline from "../components/core/Mainheadline";
import Link from "next/link";
export default function HomePage() {
  return(
    <>
    <MainHeadline text="Innenanzeiger"  />
    <div className="flex flex-wrap mr-10 ml-10 space-x-4 space-y-4 justify-center">
      <h2 className="text-2xl mt-12">Navigation</h2>
      <Link href="/search">Search</Link>
      <Link href="/sign-in">Control Displays</Link>
    </div>
    </>
    )
}
