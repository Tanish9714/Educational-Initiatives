import { Command } from './Command';
import { Satellite } from '../satellite/Satellite';
import { Orientation } from '../satellite/Orientation';

export class RotateCommand implements Command {
    private satellite: Satellite;
    private direction: Orientation;

    constructor(satellite: Satellite, direction: Orientation) {
        this.satellite = satellite;
        this.direction = direction;
    }

    execute() {
        this.satellite.rotate(this.direction);
    }
}