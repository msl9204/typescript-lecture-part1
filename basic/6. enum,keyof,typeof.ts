(function () {
    const enum EDirection {
        UP,
        DOWN,
        LEFT,
        RIGHT
    } // enum은 js에서 사라진다. (숫자로 매핑됨)

    const ODirection = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    } // 이렇게 선언하면 js에 남아있는다.

    const constODirection = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    } as const; // as const를 붙여주면 정확하게 타이핑된다.

    const a = EDirection.UP;

    const obj = {a: '123', b: 'hello', c: 'world'}; // 값을 나타내는 obj => key들만 가져올 수 있다. const가 없어서 key가 string이 됨.
    const obj2 = {a: '123', b: 'hello', c: 'world'} as const; // const가 붙어서 value도 고정됨
    // typeof를 붙여주면 타입이 됨
    // 거기에 keyof를 붙여주면 key들만 뽑혀진다.

    type Key = keyof typeof obj;
    type Key2 = keyof typeof obj2;
    type Value = typeof obj2[keyof typeof obj2];


    function walk(dir: EDirection) {} // enum은 type으로 쓸 수 있다.

    type Direction = typeof ODirection[keyof typeof ODirection];
    function run(dir: Direction) {} // enum이 아닌 것을 parameter로 쓰려면 추가적으로 위처럼 해줘야한다.

    function test(dir: typeof constODirection[keyof typeof constODirection]) {}


    walk(EDirection.LEFT);
    run(ODirection.RIGHT);
    test(constODirection.RIGHT);


})()
