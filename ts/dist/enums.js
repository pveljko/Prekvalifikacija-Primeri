var Semafor;
(function (Semafor) {
    Semafor[Semafor["Green"] = 0] = "Green";
    Semafor[Semafor["Yellow"] = 1] = "Yellow";
    Semafor[Semafor["Red"] = 2] = "Red";
})(Semafor || (Semafor = {}));
var s = Semafor.Red;
var Ocena;
(function (Ocena) {
    Ocena[Ocena["Jedinica"] = 1] = "Jedinica";
    Ocena[Ocena["Dvojka"] = 2] = "Dvojka";
    Ocena[Ocena["Trojka"] = 3] = "Trojka";
    Ocena[Ocena["\u010Cetvorka"] = 4] = "\u010Cetvorka";
    Ocena[Ocena["Petica"] = 5] = "Petica";
})(Ocena || (Ocena = {}));
var o = Ocena.Petica;
var Keys;
(function (Keys) {
    Keys[Keys["Steel"] = 1] = "Steel";
    Keys[Keys["Bronze"] = 2] = "Bronze";
    Keys[Keys["Silver"] = 4] = "Silver";
    Keys[Keys["Gold"] = 8] = "Gold";
    Keys[Keys["Diamond"] = 16] = "Diamond";
})(Keys || (Keys = {}));
var inventar = Keys.Steel | Keys.Gold;
if ((inventar & Keys.Steel) == Keys.Steel) {
    console.log("Igrač ima čelični ključ.");
}
