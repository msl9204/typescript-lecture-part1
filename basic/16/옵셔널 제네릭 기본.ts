(function () {

    /**
     * 옵셔널
     */
    function abc(a: number, b?: number, c?: number) {

    }

    abc(1)
    abc(1, 2)
    abc(1, 2, 3)

    let obj: { a: string, b?: string } = {a: 'hello', b: 'world'}
    obj = {a: 'hello'}


    /**
     * 제네릭
     */
    // function add<T extends string | number>(x: T, y: T): T {
    //     return x + y;
    // }
    //
    // add(1, 2)
    // add("1", "2")
    // add(true, false) // 이런거는 원치않는다

    function add1<T extends string[]>(x: T): T {
        return x;
    }

    function add2<T extends (a: string) => number>(x: T): T {
        return x;
    }

    add1(["1", "2"])
    add2((a) => +a)


})();
