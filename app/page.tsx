import MainHeadline from "../components/core/Mainheadline";
import {SearchInput} from "../components/core/SearchInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
    <MainHeadline text="Verbindung suchen"  />
<SearchInput />
    </>
  );
}
