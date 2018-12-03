function cached(parameter: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // do something
    }
}

export {
    cached
};
