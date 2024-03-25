import Header from "../components/Header";
import { useRouter } from "next/router";
import InputField from "../components/core/InputField";
import Button from "../components/core/Button";
import MainHeadline from "../components/core/Mainheadline";
import Head from "next/head";
export default function HomePage() {
  const router = useRouter();
  function Redirect(){
    const from = document.getElementById("from").value || "Bad Kasberg"
    const to = document.getElementById("to").value || "Bad Leberkas"
    router.push(`/connections?from=${from}&to=${to}`)
  }
  return (
    <>
    <Head>
      <title>Verbindung suchen</title>
    </Head>
    <Header />
    <MainHeadline text="Verbindung suchen"  />
<div className="flex justify-center pt-10 z-40 gap-x-2">
  <InputField id="from" placeholder="Von" />
  <InputField id="to" placeholder="Nach"  />
  <Button onClick={Redirect} text="Suchen" />
</div>

    </>
  );
}
