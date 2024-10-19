import AutoCompleteSearch from "@/components/core/AutoCompleteSearch";
import Header from "../../components/Header";
export default function SearchStation(){
    return(
        <>
        <Header disablelinks={true} activeheadline="Search Station" />
        <div className="mt-24">
            <div className="flex justify-center">
        <AutoCompleteSearch placeholder="search Station" inputid="stationname" />
        </div>
        </div>
        </>
    )
}