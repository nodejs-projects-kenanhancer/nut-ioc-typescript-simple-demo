import { Direction } from "readline";
import IGreetingHelper from "./IGreetingHelper";

export default class GreetingHelper implements IGreetingHelper {
    getFullName(firstName: string, lastName: string, direction: Direction) {
        return `${firstName} ${lastName}: Direction=> ${direction}`;
    }
}