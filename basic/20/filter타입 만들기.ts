(function () {
    interface Arr<T> {
        forEach(callback: (item: T, index: number) => void): void;
        map<S>(callback: (value: T, i: number) => S): S[];
        filter<S extends T>(callback: (value: T) => value is S): S[]
    }

    const a: Arr<number> = [1, 2, 3];
    const b = a.filter((v): v is number => v % 2 === 0);

    const c: Arr<number | string> = [1, '2', 3, '4', 5];
    const d = c.filter((v): v is string => typeof v === 'string')


})();
