var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
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
    User.prototype.getUserName = function () {
        return this.name;
    };
    User.prototype.getUserAge = function () {
        return this.age;
    };
    return User;
}());
var user1 = new User("A", 10);
var product1 = new Product("Car", 1000, 10);
var product2 = new Product("Car 2", 2000, 20);
console.log("Username: ".concat(user1.getUserName()));
console.log("ProductName: ".concat(product1.getName()));
