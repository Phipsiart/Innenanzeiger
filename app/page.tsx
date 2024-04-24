import MainHeadline from "../components/core/Mainheadline";
import {SearchInput} from "../components/core/SearchInput";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
    <MainHeadline text="Welcome."  />
<SearchInput />
<div className="flex justify-center mt-12">
<p className="max-w-xs">Welcome to Innenanzeiger. Here you can select a train and then view it using the Interior Display simulation (a screen-like interface as if you were sitting in the same train). Bayerische Oberlandbahn & S-Bahn München similar screens (currently in beta) are currently supported. You can also select trains from other railway companies, but they will probably not be displayed correctly. As this is a simulation, the content here may well differ from the actual representations in the trains.</p>
</div>  

<div className="fixed bottom-1 right-2 text-[1rem] flex">
  <Link href="/disclaimer" className="text-red-500 font-bold ">Disclaimer</Link>
  <Link href="https://github.com/Phipsiart/Innenanzeiger" className="ml-2">Source Code</Link>
  <p className="ml-2 text-red-500 font-bold">All data without warranty.</p>
</div>

    </>
  );
}
