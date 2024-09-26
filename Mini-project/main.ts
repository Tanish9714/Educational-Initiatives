const prompt = require('prompt-sync')();

import { Satellite } from './satellite/Satellite';
import { CommandInvoker } from './invoker/CommandInvoker';
import { RotateCommand } from './commands/RotateCommand';
import { ActivatePanelsCommand } from './commands/ActivatePanelsCommand';
import { CollectDataCommand } from './commands/CollectDataCommand';
import { DeactivatePanelsCommand } from './commands/DeactivatePanelsCommand';
import { Orientation } from './satellite/Orientation';

const satellite = new Satellite();
const invoker = new CommandInvoker();

let keepRunning = true;

while (keepRunning) {
    console.log("\nSatellite Control System");
    console.log("1: Rotate Satellite");
    console.log("2: Activate Solar Panels");
    console.log("3: Collect Data");
    console.log("4: Deactivate Solar Panels");
    console.log("5: Execute Commands");
    console.log("6: Show Status");
    console.log("0: Exit");

    const choice = prompt("Choose an option: ");

    switch (choice) {
        case '1':
            const direction = prompt("Enter direction (North, South, East, West): ") as Orientation;
            invoker.addCommand(new RotateCommand(satellite, direction));
            break;
        case '2':
            invoker.addCommand(new ActivatePanelsCommand(satellite));
            break;
        case '3':
            invoker.addCommand(new CollectDataCommand(satellite));
            break;
        case '4':
            invoker.addCommand(new DeactivatePanelsCommand(satellite));
            break;
        case '5':
            invoker.executeCommands();
            break;
        case '6':
            console.log(satellite.getStatus());
            break;
        case '0':
            keepRunning = false;
            break;
        default:
            console.log("Invalid choice, please try again.");
    }
}

console.log("Exiting Satellite Control System.");
