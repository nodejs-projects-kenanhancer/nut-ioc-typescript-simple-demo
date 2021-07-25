# nut-ioc-typescript-simple-demo
TypeScript Demo Project using with nut-ioc framework

**nut-ioc.d.ts** file should be copied in root folder of your repository and then **tsconfig.json** file should be updated as **"include": [ "nut-ioc.d.ts" ]** or use this one.

## Usage

There are two classes named **GreetingHelper.ts** and **EnglishGreeting.ts** and **EnglishGreeting.ts** want to use **GreetingHelper.ts** as a dependency so it can be required via constructor function.

**./src/GreetingHelper.ts**
```typescript
import { Direction } from "readline";
import IGreetingHelper from "./IGreetingHelper";

export default class GreetingHelper implements IGreetingHelper {
    getFullName(firstName: string, lastName: string, direction: Direction) {
        return `${firstName} ${lastName}: Direction=> ${direction}`;
    }
}
```

Notice that constructor has **GreetingHelper** parameter so **nut-ioc** can inject it in runtime..

**./src/EnglishGreeting.ts**
```typescript
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
```