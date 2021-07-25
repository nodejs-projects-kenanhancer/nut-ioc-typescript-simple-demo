declare module 'nut-ioc' {
    type NutIoc = {
        get: (name: string) => any,
        set: (name: string, value: any) => void,
        getServices: () => any,
        getDependency: (ServiceName) => any,
        getDependencies: () => any,
        addDependency: (dependency: any, ServiceName = '', spread = false) => void,
        useNutIocContainer: (nutIocContainer) => void,
        useDependencyLoader: ({ name, loader }) => void,
        useDependencyFilter: ({ name, filter }) => void,
        useConfiguration: ({ dependencyLoader, dependencyFilter }) => void,
        useDependency: ({ ServiceName, Namespace, Service, Interceptor }: { ServiceName: string, Namespace?: string, Service: any, Interceptor?: any }) => void,
        usePlugin: (pluginFn) => void,
        use: ({ dependencyPath, nameProvider, ignoredDependencies = [], dependencies = {}, interceptor }: { dependencyPath: string, nameProvider?: (name: string) => string, ignoredDependencies?: Array, dependencies?: Record<string, any>, interceptor?: any }) => void,
        build: <T>() => Promise<T>
    };
}

declare module 'nut-ioc' {

    function nutIoc(): NutIoc;

    export = nutIoc;
}