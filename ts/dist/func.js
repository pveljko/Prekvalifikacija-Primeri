function isDivisible(what, by) {
    return what % by == 0;
}
console.log(isDivisible(10, 5));
console.log(isDivisible(11, 5));
var myfun = function (a, b) {
    return a + b;
};
console.log(myfun(10, 20));
var myfun2 = function (a, b) {
    return a + b;
};
console.log(myfun2(10, 20));
var myfun3 = function (a, b) {
    return a + b;
};
console.log(myfun3(10, 20));
var arr1 = [3, 1, 4, 1, 5, 9, 2, 6];
function filterArray(arr, filter) {
    var rez = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a_1 = arr_1[_i];
        if (filter(a_1)) {
            rez[rez.length] = a_1;
        }
    }
    return rez;
}
console.log(filterArray(arr1, function (a) { return a % 2 == 0; }));
console.log(arr1.filter(function (a) { return a % 2 == 0; }));
function myfun4(a, b, c) {
    if (c === void 0) { c = 4; }
    if (b == undefined)
        b = 0;
    return a + b + c;
}
console.log(myfun4(1, 2, 3)); //6
console.log(myfun4(1)); //5
console.log(myfun4(1, undefined, 3)); //4
console.log(myfun4(1, 5)); //10
var arr2 = [1, 2, 4, 8, 16, 32, 64, 128];
function myfun5() {
    return arr2.length;
}
console.log(myfun5()); //8
