class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }

  caculatePrice() {
    return this.price;
  }
}

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUserName() {
    return this.name;
  }

  getUserAge() {
    return this.age;
  }
}

const user1 = new User("A", 10);

const product1 = new Product("Car", 1000, 10);
const product2 = new Product("Car 2", 2000, 20);

console.log(`Username: ${user1.getUserName()}`);
console.log(`ProductName: ${product1.getName()}`);
