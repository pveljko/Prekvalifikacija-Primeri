let a:string = 'Once upon a midnight dreary';
let b:string = "while I pondered, weak and weary";
let c:string = `${a}, ${b} — ukupno ${a.length + b.length + 2} simbola.`;

console.log(c);

let r:string = c.match("ukupno (\\d+) simbola")[1];
console.log(r);
let rr:number = Number(r);
console.log(rr);

let verse:string = c.split("—")[0];
console.log(verse);
