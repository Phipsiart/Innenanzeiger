import Head from "next/head"
import Header from "../components/Header"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import GetConnetions from "../lib/getconnections"
import MainHeadline from "../components/core/Mainheadline"
export default function Connections({data}){
  function determineClass(productName) {
    if (productName === "S") {
      return "bg-green-500";
    } else if (productName === "BRB") {
      return "bg-gray-400";
    } else if(productName === "WFB"){
      return "bg-gray-400"
    } else if(productName ==="ICE"){
      return "bg-gray-900"
    } else if(productName ==="RB"){
      return "bg-gray-400"
    }else {
      return "bg-gray-600";
    }
  }
  

    const router= useRouter();
    const from = router.query.from
    const to = router.query.to
    function Redirect(url){
     router.push(url)    
    }
  
    return(
        <>
        <Head>
            <title>Verbindungsauswahl</title>
        </Head>
        <Header></Header>
        <MainHeadline text="Verbindungen" />
       <div className="flex justify-center">
        <div className="grid mt-10 mr-4 ml-2 pb-24">
{data.map((connection, index) => (
           <div key={connection.refreshToken} className="relative flex-grow items-center bg-gray-600 cursor-pointer hover:outline hover:outline-2 hover:outline-green-800 transition-all p-4 rounded-2xl w-[24rem] ml-2 mt-2">
    {connection.legs.map((leg, index) => (
              <Link className="flex" key={leg.tripId} href={`/departures?tripId=${leg.tripId}`}>
      <div key={leg.tripId} className="flex">
        <p></p>
        <p className={`pl-2 pr-2 pt-1 pb-1 text-white font-bold rounded-lg ${determineClass(leg.line.productName)}`}>
    {leg.line.name.replace('BRB', '').replace('NWB', '').replace(/\s/g, '' )}
  </p>       <p className="absolute left-[6rem] mt-1 text-white ">{leg.direction.replace(/München-/g, "").split("Gl.")[0].trim().replace(/, München/g, '')}</p>
       <p className="bg-blue-500 absolute right-4 pl-2 pr-2 pt-1 pb-1  text-gray-200 font-bold rounded-lg">{leg.departure.slice(0, -9).slice(11)}</p>
       
       </div>
</Link>
    ))}
</div>
 ))}
 </div>
 </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const from = context.query.from;
    const to = context.query.to;
    const when = context.query.departure;
 const data = await GetConnetions(from, to, when);
 return {
    props: {
      data
    },
  };

}