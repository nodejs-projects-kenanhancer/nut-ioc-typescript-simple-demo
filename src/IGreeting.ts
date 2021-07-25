export default interface IGreeting {
    getFullName(firstName: string, lastName: string): string;
    sayHello(firstName: string, lastName: string): string;
}