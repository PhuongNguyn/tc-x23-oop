var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.caculatePrice = function () {
        return this.price;
    };
    return Product;
}());
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (name) {
        this.name = name.toLowerCase();
    };
    User.prototype.getUserName = function () {
        return this.name;
    };
    User.prototype.getUserAge = function () {
        return this.age;
    };
    return User;
}());
// create instance of class
var product2 = new Product("Car 2", 2000, 20);
var Animals = /** @class */ (function () {
    function Animals(age, eyes) {
        this.age = age;
        this.eyes = eyes;
    }
    Animals.prototype.setAge = function (age) {
        this.age = age;
    };
    Animals.prototype.getAge = function () {
        return this.age;
    };
    Animals.prototype.action = function () {
        console.log("action animals");
    };
    return Animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, legs, eyes) {
        var _this = _super.call(this, age, eyes) || this;
        _this.legs = legs;
        return _this;
    }
    Dog.prototype.action = function () {
        console.log("action dog");
    };
    Dog.prototype.run = function () { };
    return Dog;
}(Animals));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age, legs, eyes) {
        var _this = _super.call(this, age, eyes) || this;
        _this.legs = legs;
        return _this;
    }
    Cat.prototype.jump = function () {
    };
    return Cat;
}(Animals));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(age, wings, eyes) {
        var _this = _super.call(this, age, eyes) || this;
        _this.wings = wings;
        return _this;
    }
    Bird.prototype.fly = function () {
    };
    return Bird;
}(Animals));
var aninal = new Animals(3, 2);
aninal.action();
var dog = new Dog(3, 3, 2);
dog.action();
