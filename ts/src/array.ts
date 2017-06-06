let list: number[] = [1, 2, 3];
let list2: Array<number> = [3, 2, 1];

console.log(list2.length);
for(let x in list2){
  console.log(x);//ispisuje 0,1,2
}
for(let x of list2){
  console.log(x);//ispisuje 3,2,1
}
console.log(list2.join("&"));//ispisuje 3&2&1
