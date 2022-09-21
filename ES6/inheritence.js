/*
The ES6 JavaScript supports Object-Oriented programming components such as Object, Class and Methods. Further in Classes we can implement inheritance to make child inherits all methods of Parent Class. This can be done using the extends and super keywords. We use the extends keyword to implement the inheritance in ES6.
*/

class Sabbir {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
let sabbir = new Sabbir("My sabbir");
console.log(sabbir); // Sabbir { speed: 0, name: 'My sabbir' }