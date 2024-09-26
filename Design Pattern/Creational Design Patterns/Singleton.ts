class Configuration {
    private static instance: Configuration;
    private settings: { [key: string]: string } = {};

    private constructor() {
        // Load settings from a file or environment
        this.settings = {
            dbHost: 'localhost',
            dbPort: '5432',
            dbUser: 'user',
            dbPassword: 'password'
        };
    }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }

    public getSetting(key: string): string {
        return this.settings[key];
    }
}

// Usage
const config1 = Configuration.getInstance();
console.log(config1.getSetting('dbHost')); 

const config2 = Configuration.getInstance();
console.log(config1 === config2); 
