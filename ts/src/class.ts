class Osoba {
  protected _ime:string;
  protected _prezime:string;
  public get ime():string{
    return this._ime;
  }
  public set ime(v:string){
    this._ime = v;
  }
  public get prezime():string{
    return this._prezime;
  }
  public set prezime(v:string){
    this._prezime = v;
  }
  public constructor(i:string, p:string){
    [this._ime, this._prezime] = [i, p];
  }
  public zdravo():string{
    return `Zdravo, ${this._ime} ${this._prezime}!`;
  }
}

class Student extends Osoba {
  protected _indeks:string;
  public get indeks():string{
    return this._indeks;
  }
  public set indeks(v:string){
    this._indeks = v;
  }
  public constructor(i:string, p: string, ind: string)
  {
    super(i, p);
    this._indeks = ind;
  }
  public zdravo():string{
    return `Zdravo, ${this._ime} ${this._prezime} (${this._indeks})!`;
  }
}
let ss:Osoba = new Student("Pera", "Peric", "1124");
ss.ime = "Petar";
(ss as Student).indeks = "11549";
console.log(ss.zdravo());

class Point {
  public x:number;
  public y:number;
}

class Point2{
  private x:number;
  private y:number;
}

let p:Point = {x: 10, y:50};
//let p2:Point2 = {x: 10, y:50};//Greska!

abstract class GeometrijskaFigura{
  abstract getPovrsina():number;
  abstract getObim():number;
  ime:string;
  constructor(i:string){
    this.ime = i;
  }
}

class Kvadrat extends GeometrijskaFigura{
  a:number;
  constructor(stranica:number){
    super("Kvadrat");
    this.a = stranica;
  }
  getPovrsina():number{
    return this.a * this.a;
  }
  getObim():number{
    return this.a * 4;
  }
}

let gf:GeometrijskaFigura = new Kvadrat(6);
console.log(`Ova geometrijska figura je ${gf.ime}
  sa površinom od ${gf.getPovrsina()} i obimom od ${gf.getObim()}`);

class Zaposlen{
  constructor(public ime:string, public prezime:string){
  }
  sayHello():string{
    return `Hello, ${this.ime} ${this.prezime}!`;
  }
}

let zz:Zaposlen = new Zaposlen("Pera", "Peric");
console.log(zz.sayHello());
