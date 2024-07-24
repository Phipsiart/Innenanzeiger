export default function ReplaceNames(name) {
  let originalName = name;
  try {
    //remove the City prefix before the stations
    name = name.replace(/München-/g, '');
    name = name.replace(/Berlin-/g, '');
    name = name.replace(/Hamburg-/g, '');
    name = name.replace('Hamburg', '');

    //remove ", München and Berlin " before the stations
    name = name.replace(/, München/g, '');
    name = name.replace(/, Berlin/g, '');
    //replace Station Names
    name = name.replace('Aßling(Oberbay)', 'Aßling');
    name = name.replace('Wasserburg(Inn) Bf', 'Wasserburg');
    name = name.replace('Ebersberg(Oberbay)', 'Ebersberg');
    name = name.replace('Gmund(Tegernsee)', 'Gmund');
    name = name.replace('München Leuchtenbergring', 'Leuchtenbergring');
    name = name.replace('München Rosenheimer Platz', 'Rosenheimer Platz');
    name = name.replace('München Isartor', 'Isartor');
    name = name.replace('München Marienplatz', 'Marienplatz');
    name = name.replace('München Karlsplatz', 'Karlsplatz');
    name = name.replace('München Hbf (tief)', 'München Hbf');
    name = name.replace('München Donnersbergerbrücke', 'Donnersberger Brücke');
    name = name.replace('München Hackerbrücke', 'Hackerbrücke');
    name = name.replace('München Hirschgarten', 'Hirschgarten');
    name = name.replace('München Harras', 'M. Harras');
    name = name.replace('München Siemenswerke', 'M. Siemenswerke');
    //replace Train prefixes
    name = name.replace('BRB', ' ');
    name = name.replace('WFB', ' ');
    name = name.replace('ALX', ' ');
    name = name.replace('OPB', '');
    //remove the Gl. prefix from the names
    name = name.split('Gl.')[0].trim();
  } catch (error) {
    return originalName; // return the original name if an error occurs
  }
  return name;
}
