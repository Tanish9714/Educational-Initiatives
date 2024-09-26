// Observer interface
interface StockObserver {
    update(stockSymbol: string, price: number): void;
}

// Subject interface
interface Stock {
    registerObserver(observer: StockObserver): void;
    removeObserver(observer: StockObserver): void;
    notifyObservers(): void;
}

// Concrete Stock class (Subject)
class ConcreteStock implements Stock {
    private observers: StockObserver[] = [];
    private stockSymbol: string;
    private price: number;

    constructor(stockSymbol: string, price: number) {
        this.stockSymbol = stockSymbol;
        this.price = price;
    }

    public setPrice(price: number): void {
        console.log(`Stock ${this.stockSymbol} price updated to ${price}`);
        this.price = price;
        this.notifyObservers();
    }

    public registerObserver(observer: StockObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: StockObserver): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.stockSymbol, this.price);
        }
    }
}

// Concrete Observer (Dashboard)
class DashboardDisplay implements StockObserver {
    public update(stockSymbol: string, price: number): void {
        console.log(`Dashboard: Stock ${stockSymbol} is now ${price}`);
    }
}

// Concrete Observer (Mobile App)
class MobileAppDisplay implements StockObserver {
    public update(stockSymbol: string, price: number): void {
        console.log(`Mobile App: Stock ${stockSymbol} is now ${price}`);
    }
}

// Usage
const appleStock = new ConcreteStock('AAPL', 150);

// Create observers
const dashboardDisplay = new DashboardDisplay();
const mobileAppDisplay = new MobileAppDisplay();

// Register observers
appleStock.registerObserver(dashboardDisplay);
appleStock.registerObserver(mobileAppDisplay);

// Update stock price and notify observers
appleStock.setPrice(155); 
appleStock.setPrice(160); 
