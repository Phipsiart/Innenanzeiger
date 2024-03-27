export default function ReplaceNames (name){
    let originalName = name;
    try{
        //remove the City prefix before the stations
        name = name.replace(/München-/g, "");
        name = name.replace(/Berlin-/g, "");
        //replace Station Names
        name = name.replace("Wasserburg(Inn) Bf", "Wasserburg");
        name = name.replace("Ebersberg(Oberbay)", "Ebersberg");
        name = name.replace("Gmund(Tegernseee)", "Gmund");
        name = name.replace("München Hbf (tief)", "München Hbf");
        //remove the Gl. prefix from the names
        name = name.split("Gl.")[0].trim();
    } catch (error) {
        return originalName; // return the original name if an error occurs
    }
    return name;
}
