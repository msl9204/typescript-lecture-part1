(function () {

    const a: string = 'hello';
    const b: String = 'hell'; // 래퍼 타입

    console.log(a)
    console.log(b)

    type World = "world" | 'hell';
    const c: World = "world"

    console.log(c)

    type Greeting = `hello ${World}`
    const d: Greeting = "hello hell"

    console.log(d)


    let arr: string[] = [];
    let arr2: Array<string> = [];

    function rest(a, ...args: string[]) {
        console.log(args); // 1, [2, 3]
    }

    rest('1', '2', '3');

    const tuple: [string, number] = ['1', 1];
    // tuple[2] = 'hello'; // 얘는 안되고

    tuple.push('hello'); // 얘는 된다


})();
