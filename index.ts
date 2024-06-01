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

abstract class Animals {
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

  action() {
    console.log("action animals")
  }

  caculateWeight(age: number, quantity: number): number {
    return age * quantity
  }

  abstract play(): void

}



class Dog extends Animals {
  private legs: number;

  constructor(age: number, legs: number, eyes: number) {
    super(age, eyes)
    this.legs = legs
  }


  // Overiding => cùng 1 phương thức nhưng nhiều thực thi khác nhau cùng kiểu dữ liệu trả về
  action() {
    console.log("action dog")
  }

  // Overloading => cùng 1 phương thức nhưng nhiều kiểu dữ liệu trả về, và nhiều params truyền vào
  // caculateWeight(age: number, quantity: number, name: string) {

  // }

  run() { }

  play(): void {
    // implement lai het
  }

}

class Cat extends Animals {
  private legs: number;

  constructor(age: number, legs: number, eyes: number) {
    super(age, eyes)
    this.legs = legs
  }


  jump() {

  }

  play(): void {

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

  play(): void {

  }
}

// const aninal = new Animals(3, 2)
// aninal.action()

// const dog = new Dog(3, 3, 2)
// dog.action()
