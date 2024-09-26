// Legacy payment system interface
interface LegacyPaymentSystem {
    processPayment(amount: number): void;
}

// Legacy payment system implementation
class OldPaymentSystem implements LegacyPaymentSystem {
    public processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through the old payment system.`);
    }
}

// New payment system interface
interface NewPaymentSystem {
    makePayment(amount: number): void;
}

// Adapter class to adapt the old payment system to the new payment system interface
class PaymentAdapter implements NewPaymentSystem {
    private legacyPaymentSystem: LegacyPaymentSystem;

    constructor(legacyPaymentSystem: LegacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }

    public makePayment(amount: number): void {
        this.legacyPaymentSystem.processPayment(amount);
    }
}

// Usage
const oldPaymentSystem = new OldPaymentSystem();
const paymentAdapter = new PaymentAdapter(oldPaymentSystem);

paymentAdapter.makePayment(100);
