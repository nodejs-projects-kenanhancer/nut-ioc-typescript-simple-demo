import nutIoc, { NutIoc } from 'nut-ioc';
import { Direction } from "./src/Direction";
import IGreeting from "./src/IGreeting";
import IGreetingHelper from "./src/IGreetingHelper";

type DependencyType = {
    authorBasicInfo: { firstName: string, lastName: string };
    GreetingHelper: IGreetingHelper;
    EnglishGreeting: IGreeting;
    TurkishGreeting: IGreeting;
};

class Program {
    private static nutIocContainer: NutIoc = nutIoc();

    static async main(): Promise<void> {

        this.nutIocContainer.useDependency({
            ServiceName: "authorBasicInfo",
            Service: ({ firstName: "Josh", lastName: "Iron" })
        });

        this.nutIocContainer.use({
            dependencyPath: `${__dirname}/src`,
            ignoredDependencies: ['*.DS_Store']
        });

        const dependencies: DependencyType = await this.nutIocContainer.build();



        console.log(dependencies.authorBasicInfo);

        console.log(dependencies.GreetingHelper.getFullName('kenan', 'hancer', Direction.Down));

        console.log(dependencies.GreetingHelper.getFullName("Hasan", "Ozgul", Direction.Down));

        console.log(dependencies.EnglishGreeting.sayHello('Eren', 'hancer'));

        console.log(dependencies.TurkishGreeting.sayHello('Enes', 'hancer'));
    }
}

Program.main();