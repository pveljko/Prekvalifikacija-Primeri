//primer iz handbook-a
interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj:any = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface WineSpecification{
  type?:string;
  grape?:string;
  vintage?:string;
}

let order1:WineSpecification = {};
let order2:WineSpecification = {type: "red"};
let order3:WineSpecification = {type: "red",
grape: "Tannat", vintage: "2006"};

function orderWine(w:WineSpecification):void{
  console.log(`We have ordered a nice bottle of ${w.type ? w.type : ""} ${(w.grape) ? w.grape : ""} wine ${w.vintage ? "from " : ""} ${w.vintage ? w.vintage  : ""}`);
}

orderWine(order1);
orderWine(order2);
orderWine(order3);

orderWine({type: "red"});
//orderWine({type: "red", flavor: "Delicious"});//ERROR
orderWine({type: "red", flavor: "Delicious"} as WineSpecification);//Works

interface Order{
  table?:string;
  [index:number] : WineSpecification;
}

let order4:Order = {table:"Table 14", 0:{}, 1:{type: "red"}};
let order5:Order = [{}, {type: "red"}, {type: "red", grape: "Tannat", vintage: "2006"}];

console.log(order4[0]);
console.log(order5[2]);
