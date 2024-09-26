import { Command } from '../commands/Command';

export class CommandInvoker {
    private commands: Command[] = [];

    public addCommand(command: Command) {
        this.commands.push(command);
    }

    public executeCommands() {
        this.commands.forEach((command) => command.execute());
        this.commands = [];
    }
}
