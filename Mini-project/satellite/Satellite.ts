import { Orientation } from './Orientation';

export class Satellite {
    private orientation: Orientation = Orientation.North;
    private solarPanelsActive: boolean = false;
    private dataCollected: number = 0;

    public getStatus() {
        return {
            orientation: this.orientation,
            solarPanels: this.solarPanelsActive ? "Active" : "Inactive",
            dataCollected: this.dataCollected
        };
    }

    public rotate(direction: Orientation) {
        this.orientation = direction;
        console.log(`Satellite rotated to ${direction}`);
    }

    public activatePanels() {
        this.solarPanelsActive = true;
        console.log("Solar panels activated.");
    }

    public deactivatePanels() {
        this.solarPanelsActive = false;
        console.log("Solar panels deactivated.");
    }

    public collectData() {
        if (this.solarPanelsActive) {
            this.dataCollected += 10;
            console.log(`Data collected: ${this.dataCollected} units.`);
        } else {
            console.log("Cannot collect data. Solar panels are inactive.");
        }
    }
}
