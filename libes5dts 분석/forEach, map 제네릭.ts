(function () {

    /**
     * 제너릭은 타입추론해주는 기능도 있다.
     */
    interface Array<T> {
        forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    }

    const a: Array<number> = [1, 2, 3];
    a.forEach((value) => {console.log(value)});


    [1, 2, 3].forEach((item) => { console.log(item) });
    ['1', '2', '3'].forEach((item) => { console.log(item) });
    [true, false, true].forEach((item) => { console.log(item) });

    ['123', 123, true].forEach((item) => { console.log(item) });

    const strings = [1, 2, 3].map((item) => item.toString())

})();
