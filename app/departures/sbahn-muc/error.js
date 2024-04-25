"use client";
import RefreshData from "../../../components/core/RefreshData";
import BottomBar from "@/components/sbahn-muc/BottomBar";
import BackgroundWrapper from "@/components/sbahn-muc/BackgroundWrapper"
export default function SBahnInnenanzeigerErrorPage(){
    // an easy way to set the colors for the lines accordingly.
    //themeconfig is a string that supplies the color to the components
    //so that they can be themed accordingly for their line,
    //for instance "#008a51" is the Line S6
    let themeconfig = "#008a51";
    return(
        <>
        <div className="__screen overflow-hidden">
        <RefreshData />
<div className="fixed top-0 left-0 right-0 bottom-[7rem] mt-[10rem] bg-gray-200 z-[100]">
<h1 className="text-center text-4xl mt-24 mr-10 ml-10">Sehr geehrte Fahrgäste, wir können derzeit keine Informationen über Ihre Reise anzeigen, wir bitten dies zu entschuldigen.</h1>
<h1 className="italic text-gray-500 text-4xl text-center mt-24 mr-10 ml-10">Dear passengers, we are currently unable to display any information about your journey. We apologise for the inconvienice caused.</h1>
     </div>
     <BottomBar linecolor={themeconfig}  destination="" />
        </div>
        </>
    )
}