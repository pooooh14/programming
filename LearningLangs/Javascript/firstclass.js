class Animal {
    constructor(legs, hands, name) {
        this.legs = legs;
        this.hands = hands;
        this.name = name;
    }
    animalName() {
        console.log(`Your animal name is ${this.name}`);
    }

    Legs() {
        console.log(`Your animal have ${this.legs} legs`)
    }

    Hands() {
        console.log(`Your animal have ${this.hands} hands.`)
    }

    printAllProp() {
        this.animalName();
        this.Legs();
        this.Hands();
    }
   
}

var dog = new Animal(4, 0, "bruno");
var cat = new Animal(2, 2, "meow");

dog.printAllProp()
cat.printAllProp()