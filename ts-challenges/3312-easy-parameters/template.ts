type MyParameters<T extends (...args: any[]) => any> = T extends (...infer args) => any