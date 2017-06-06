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
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var Point2 = (function () {
    function Point2() {
    }
    return Point2;
}());
var p = { x: 10, y: 50 };
//let p2:Point2 = {x: 10, y:50};//Greska!
var GeometrijskaFigura = (function () {
    function GeometrijskaFigura(i) {
        this.ime = i;
    }
    return GeometrijskaFigura;
}());
var Kvadrat = (function (_super) {
    __extends(Kvadrat, _super);
    function Kvadrat(stranica) {
        var _this = _super.call(this, "Kvadrat") || this;
        _this.a = stranica;
        return _this;
    }
    Kvadrat.prototype.getPovrsina = function () {
        return this.a * this.a;
    };
    Kvadrat.prototype.getObim = function () {
        return this.a * 4;
    };
    return Kvadrat;
}(GeometrijskaFigura));
var gf = new Kvadrat(6);
console.log("Ova geometrijska figura je " + gf.ime + "\n  sa povr\u0161inom od " + gf.getPovrsina() + " i obimom od " + gf.getObim());
var Zaposlen = (function () {
    function Zaposlen(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
    Zaposlen.prototype.sayHello = function () {
        return "Hello, " + this.ime + " " + this.prezime + "!";
    };
    return Zaposlen;
}());
var zz = new Zaposlen("Pera", "Peric");
console.log(zz.sayHello());
