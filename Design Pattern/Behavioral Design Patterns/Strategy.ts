// Strategy interface
interface SortStrategy {
    sort(data: number[]): number[];
}

// Concrete strategies
class QuickSort implements SortStrategy {
    public sort(data: number[]): number[] {
        return data.sort((a, b) => a - b); // Placeholder for quicksort logic
    }
}

class BubbleSort implements SortStrategy {
    public sort(data: number[]): number[] {
        const arr = [...data]; // Clone to avoid mutating the original
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                }
            }
        }
        return arr;
    }
}

// Context
class SortContext {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    public sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

// Usage
const data = [5, 2, 9, 1, 5, 6];

const context = new SortContext(new QuickSort());
console.log(context.sort(data));

context.setStrategy(new BubbleSort());
console.log(context.sort(data)); 