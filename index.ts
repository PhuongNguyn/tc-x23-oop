class Product {
  // access modifier
  // private -> khong truy cap tu ben ngoai vao duoc
  // protected -> chi co lop con ke thua moi co the truy cap duoc
  // public -> co the truy cap duoc o bat cu dau
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }


  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  caculatePrice() {
    return this.price;
  }
}
class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }


  setName(name: string) {
    this.name = name.toLowerCase()
  }

  getUserName() {
    return this.name;
  }

  getUserAge() {
    return this.age;
  }
}

// create instance of class
const product2 = new Product("Car 2", 2000, 20);

class Animals {
  private age: number;
  private eyes: number;

  constructor(age: number, eyes: number) {
    this.age = age;
    this.eyes = eyes;
  }

  setAge(age: number) {
    this.age = age
  }

  getAge() {
    return this.age
  }

}



class Dog extends Animals {
  private legs: number;

  constructor(age: number, legs: number, eyes: number) {
    super(age, eyes)
    this.legs = legs
  }


  run() { }

}

class Cat extends Animals {
  private legs: number;

  constructor(age: number, legs: number, eyes: number) {
    super(age, eyes)
    this.legs = legs
  }


  jump() {

  }

}

class Bird extends Animals {
  private wings: number;

  constructor(age: number, wings: number, eyes: number) {
    super(age, eyes)
    this.wings = wings
  }

  fly() {

  }
}

const bird = new Bird(5, 2, 2)
bird.getAge()
