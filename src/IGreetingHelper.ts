import { Direction } from "readline";

export default interface IGreetingHelper {
    getFullName(firstName: string, lastName: string, direction: Direction): string;
}