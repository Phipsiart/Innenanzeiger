import Image from "next/image"
export default function AvailableTypesofConnections({products, mainscreen}){
    return(
        <>
        {mainscreen ? <div className="flex fixed mt-5 left-2" key={Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}>
{products.bus ? 
<Image  src="/transportation-types/Bus.svg" className="" height={52} width={52} alt="Bus Logo (illustrational)"></Image>: ''}
        {products.tram ? <Image className="ml-2" src="/transportation-types/STR.svg" height={52} width={52} alt="Tram Logo (illustrational)"></Image>: ''}
        {products.suburban ? <Image className="ml-2" src="/transportation-types/S.svg" height={52} width={52} alt="S Logo (illustrational)"></Image>: ''}
        {products.regional ? <Image className="ml-2" src="/transportation-types/R.svg" height={52} width={52} alt="R Logo (illustrational)"></Image>: ''}

</div>
 : <div className="flex" key={Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}>
 {products.bus ? 
 <Image  src="/transportation-types/Bus.svg" className="" height={52} width={52} alt="Bus Logo (illustrational)"></Image>: ''}
         {products.tram ? <Image className="ml-2" src="/transportation-types/STR.svg" height={52} width={52} alt="Tram Logo (illustrational)"></Image>: ''}
         {products.suburban ? <Image className="ml-2" src="/transportation-types/S.svg" height={52} width={52} alt="S Logo (illustrational)"></Image>: ''}
         {products.regional ? <Image className="ml-2" src="/transportation-types/R.svg" height={52} width={52} alt="R Logo (illustrational)"></Image>: ''}
 
 </div>}
        </>
    )
}