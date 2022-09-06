(function () {

    interface Array<T> {
        filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
        filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    }

    const filtered1 = ['1',2,'3',4,'5'].filter((value) => typeof value === 'string');

    const predicate = (value: string | number): value is string => typeof value === 'string';
    const filtered2 = ['1',2,'3',4,'5'].filter(predicate);

    console.log(filtered1)
})();
