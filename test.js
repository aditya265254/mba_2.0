// class Person {
//     constructor(name, age, city, isMarrird) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.isMarrird = isMarrird;
//     }
// }

// let persone1 = new Person ("Aditya", 45, "kaparwar", false);
// let persone2 = new Person("puskar", 53, "Bihar", true);


// let persons = [persone1, persone2];
// console.log(persons);


// // constructor function
// function Person ( name, age, city, isMarrird ) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.isMarrird = isMarrird;
// }

// let persone1 = new Person ("Aditya", 45, "kaparwar", false);
// let persone2 = new Person("puskar", 53, "Bihar", true);


// let persons = [persone1, persone2];
// console.log(persons);


// class Vechile {
//     constructor(name, vechileNumber, colour, manufactureDate) {
//         this.name = name;
//         this.vechileNumber= vechileNumber;
//         this.colour = colour;
//         this.manufactureDate = manufactureDate;
//     }
//     // write function in class method
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// let vechile1 = new Vechile("maruti", 6878, "Black", "24-9-2003");
// vechile1.greet()
// ;let vechile2 = new Vechile("honda", 4343, "White", "9-2003");

// let vechile = [vechile1, vechile2];
// console.log(vechile);

// function Vechile (name, vechileNumber, colour, manufactureDate) {
//         this.name = name;
//         this.vechileNumber= vechileNumber;
//         this.colour = colour;
//         this.manufactureDate = manufactureDate;
//         // how to add method inside constructor function 

//         this.greet = function () {
//             console.log(`hello ${name}`);
//         };
//     }

// let vechile1 = new Vechile("maruti", 6878, "Black", "24-9-2003");
// let vechile2 = new Vechile("honda", 4343, "White", "9-2003");

// let vechile = [vechile1, vechile2];
// console.log(vechile);    

// vechile1.greet()

// let obj = {
//     name: "Aditya",
//     age: 21
// }

// console.log(obj.name)
// //  2nd way to acess it = 
// console.log(obj["name"]);


class Vechile {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    start() {
        console.log("Vechile started");
    }
    stop() {
        console.log("Vechile stopped");
    }
}

class Car extends Vechile {
    constructor(name, color, model, fuleCapacity, milage) {
        super(name, color);
        this.model = model;
        this.fuleCapacity = fuleCapacity;
        this.milage = milage;
    }
    start () {
        console.log(`${this.name} ${this.model} has started`)
    }
}

let car = new Car("Jaguar", "Black", "x90", 89, 76);

console.log(car.name)
car.start();
