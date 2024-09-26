// Product Interface
interface Button {
    render(): void;
}

// Concrete Products
class WindowsButton implements Button {
    public render(): void {
        console.log('Rendering a Windows button');
    }
}

class MacOSButton implements Button {
    public render(): void {
        console.log('Rendering a MacOS button');
    }
}

// Creator Interface
abstract class Dialog {
    public abstract createButton(): Button;

    public render(): void {
        const button = this.createButton();
        button.render();
    }
}

// Concrete Creators
class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

class MacOSDialog extends Dialog {
    public createButton(): Button {
        return new MacOSButton();
    }
}

// Usage
let dialog: Dialog;

const platform = 'Windows'; // Assume we determine the platform dynamically
if (platform === 'Windows') {
    dialog = new WindowsDialog();
} else {
    dialog = new MacOSDialog();
}

dialog.render();
