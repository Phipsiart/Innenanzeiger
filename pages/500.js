import Header from "../components/Header";
import { useRouter } from "next/router";
import MainHeadline from "../components/core/Mainheadline";
import Head from "next/head";
export default function ErrorPage500() {
  const router = useRouter();
  function Redirect(){
    const from = document.getElementById("from").value || "Bad Kasberg"
    const to = document.getElementById("to").value || "Bad Leberkas"
    router.push(`/connections?from=${from}&to=${to}`)
  }
  return (
    <>
    <Head>
        <title>Serverfehler</title>
    </Head>
    <Header />
    <MainHeadline text="Es ist ein Serverfehler aufgetreten"  />
    <div className="flex justify-center mt-8">
        <p>
        Leider ist ein Serverfehler aufgetreten. Bitte versuchen Sie es später erneut.</p></div>

    </>
  );
}
