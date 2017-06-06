enum Semafor {Green, Yellow, Red}
let s:Semafor = Semafor.Red;
enum Ocena {Jedinica = 1, Dvojka, Trojka, Četvorka, Petica}
let o:Ocena = Ocena.Petica;
enum Keys {Steel = 1, Bronze = 2, Silver = 4, Gold = 8, Diamond = 16}
let inventar:number = Keys.Steel | Keys.Gold;
if((inventar & Keys.Steel) == Keys.Steel){
  console.log("Igrač ima čelični ključ.")
}
