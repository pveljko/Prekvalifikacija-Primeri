//primer iz handbook-a
interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj:any = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
