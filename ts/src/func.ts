function isDivisible(what:number, by:number) : boolean {
  return what % by == 0;
}

console.log(isDivisible(10, 5));
console.log(isDivisible(11, 5));

let myfun:any = function(a:number, b:number) : number{
  return a + b;
}
console.log(myfun(10, 20));

let myfun2:(a:number, b:number) => number =
function(a:number, b:number) : number{
  return a + b;
}
console.log(myfun2(10, 20));

let myfun3:(a:number, b:number) => number =
function(a, b) {
  return a + b;
}
console.log(myfun3(10, 20));

let arr1:number[] = [3, 1, 4, 1, 5, 9, 2, 6];
function filterArray(arr:number[], filter:(a:number) => boolean):number[]{
  let rez:number[] = [];
  for(let a of arr){
    if(filter(a)){
      rez[rez.length] = a;
    }
  }
  return rez;
}

console.log(
  filterArray(arr1, function(a) {return a % 2 == 0;})
);

console.log(
  arr1.filter(function(a) {return a % 2 == 0;})
);

function myfun4(a:number, b?:number, c:number=4):number{
  if(b == undefined) b = 0;
  return a + b + c;
}
console.log(myfun4(1, 2, 3)); //6
console.log(myfun4(1)); //5
console.log(myfun4(1, undefined, 3)); //4
console.log(myfun4(1, 5));//10

let arr2:number[] = [1, 2, 4, 8, 16, 32, 64, 128];
function myfun5() : number{
  return arr2.length;
}

console.log(myfun5());//8
