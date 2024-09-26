// Base component interface
interface Coffee {
    cost(): number;
    ingredients(): string;
}

// Concrete component
class SimpleCoffee implements Coffee {
    public cost(): number {
        return 5; // Base cost of coffee
    }

    public ingredients(): string {
        return "Coffee";
    }
}

// Base Decorator class
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    public abstract cost(): number;
    public abstract ingredients(): string;
}

// Concrete Decorator for adding milk
class MilkDecorator extends CoffeeDecorator {
    public cost(): number {
        return this.coffee.cost() + 1; // Adding cost of milk
    }

    public ingredients(): string {
        return `${this.coffee.ingredients()}, Milk`;
    }
}

// Concrete Decorator for adding sugar
class SugarDecorator extends CoffeeDecorator {
    public cost(): number {
        return this.coffee.cost() + 0.5; // Adding cost of sugar
    }

    public ingredients(): string {
        return `${this.coffee.ingredients()}, Sugar`;
    }
}

// Usage
let myCoffee: Coffee = new SimpleCoffee();
console.log(myCoffee.cost()); 
console.log(myCoffee.ingredients()); 

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost()); 
console.log(myCoffee.ingredients()); 

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.cost()); 
console.log(myCoffee.ingredients()); 
