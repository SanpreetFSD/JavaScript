class Shape() {
    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
    }
    this.draw = class() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}


//abstraction
//polymorphism