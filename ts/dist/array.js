var list = [1, 2, 3];
var list2 = [3, 2, 1];
console.log(list2.length);
for (var x_1 in list2) {
    console.log(x_1); //ispisuje 0,1,2
}
for (var _i = 0, list2_1 = list2; _i < list2_1.length; _i++) {
    var x_2 = list2_1[_i];
    console.log(x_2); //ispisuje 3,2,1
}
console.log(list2.join("&")); //ispisuje 3&2&1
