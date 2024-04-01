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
    const time = document.getElementById("time").value || ""
    const date = document.getElementById("date").value || ""
    const timestring = `${date}T${time}:00`;
    console.log(from + to + time + date)
    router.push(`/connections?from=${from}&to=${to}&departure=${timestring}`)
  }
  return (
    <>
    <Head>
      <title>Verbindung suchen</title>
    </Head>
    <Header />
    <MainHeadline text="Verbindung suchen"  />
<div className="flex justify-center pt-10 z-40 gap-x-2">
  <InputField id="from" placeholder="Von" type="text" />
  <InputField id="to" placeholder="Nach" type="text"  />
  <InputField id="date" placeholder="" type="date"  />
  <InputField id="time" placeholder="Uhrzeit" type="time"  />
  <Button onClick={Redirect} text="Suchen" />
</div>

    </>
  );
}
