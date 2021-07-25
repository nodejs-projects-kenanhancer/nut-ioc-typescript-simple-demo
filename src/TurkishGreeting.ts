import EnglishGreeting from "./EnglishGreeting";
import IGreeting from "./IGreeting";
import IGreetingHelper from "./IGreetingHelper";

export default class TurkishGreeting extends EnglishGreeting implements IGreeting {
    constructor(GreetingHelper: IGreetingHelper) {
        super(GreetingHelper)
    }

    getFullName(firstName: string, lastName: string): string {
        return super.getFullName(firstName, lastName);
    }

    sayHello(firstName: string, lastName: string): string {

        return `Merhaba ${super.getFullName(firstName, lastName)}`;
    }
}