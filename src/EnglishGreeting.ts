import { Direction } from "./Direction";
import IGreeting from "./IGreeting";
import IGreetingHelper from "./IGreetingHelper";

export default class EnglishGreeting implements IGreeting {
    constructor(private GreetingHelper: IGreetingHelper) { }

    getFullName(firstName: string, lastName: string): string {
        return this.GreetingHelper.getFullName(firstName, lastName, Direction.Down);
    }

    sayHello(firstName: string, lastName: string): string {
        return `Hello ${this.GreetingHelper.getFullName(firstName, lastName, Direction.Down)}`;
    }
}