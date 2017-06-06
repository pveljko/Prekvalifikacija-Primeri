var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Osoba = (function () {
    function Osoba(i, p) {
        _a = [i, p], this._ime = _a[0], this._prezime = _a[1];
        var _a;
    }
    Object.defineProperty(Osoba.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (v) {
            this._ime = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Osoba.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (v) {
            this._prezime = v;
        },
        enumerable: true,
        configurable: true
    });
    Osoba.prototype.zdravo = function () {
        return "Zdravo, " + this._ime + " " + this._prezime + "!";
    };
    return Osoba;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(i, p, ind) {
        var _this = _super.call(this, i, p) || this;
        _this._indeks = ind;
        return _this;
    }
    Object.defineProperty(Student.prototype, "indeks", {
        get: function () {
            return this._indeks;
        },
        set: function (v) {
            this._indeks = v;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.zdravo = function () {
        return "Zdravo, " + this._ime + " " + this._prezime + " (" + this._indeks + ")!";
    };
    return Student;
}(Osoba));
var ss = new Student("Pera", "Peric", "1124");
ss.ime = "Petar";
ss.indeks = "11549";
console.log(ss.zdravo());
