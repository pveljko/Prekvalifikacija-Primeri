var n = 50;
var i = 0;
var last = 0;
var current = 1;
var next = 0;
for (i = 1; i < n; i++) {
    next = last + current;
    last = current;
    current = next;
}
console.log("Fibonacijev broj pod rednim brojem " + n + " je " + current);
