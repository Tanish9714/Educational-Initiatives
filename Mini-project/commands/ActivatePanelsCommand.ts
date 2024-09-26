import { Command } from './Command';
import { Satellite } from '../satellite/Satellite';

export class ActivatePanelsCommand implements Command {
    private satellite: Satellite;

    constructor(satellite: Satellite) {
        this.satellite = satellite;
    }

    execute() {
        this.satellite.activatePanels();
    }
}
