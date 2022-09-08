(function () {
    interface Arr<T> {
        forEach(callback: (item: T, index: number) => void): void;
        map<S>(callback: (value: T, i: number) => S): S[];
    }

    const a: Arr<number> = [1, 2, 3];
    const b = a.map((v) => v + 1);
    const c = a.map((v) => v.toString());
    const d = a.map((v) => v % 2 === 0);

    const e: Arr<string> = ['1', '2', '3'];
    const f = e.map((v) => +v);

})();
