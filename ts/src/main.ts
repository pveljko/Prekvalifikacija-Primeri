let n:number = 50;
let i:number = 0;
let last:number = 0;
let current:number = 1;
let next:number = 0;
for(i = 1;i < n;i++){
  next = last + current;
  last = current;
  current = next;
}
console.log(`Fibonacijev broj pod rednim brojem ${n} je ${current}`);
