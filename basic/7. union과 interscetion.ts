(function () {

    /**
     * 타입 선언 방법
     */
    type A = { a: string };
    const a: A = { a : 'hello'};

    interface B { a : string }
    const b: B = { a: 'hello'};

    /**
     * Union
     *
     * function add(x: string | number, y: string | number): string | number {
     *         return x + y
     *     }
     *     // 위가 얼추 맞아 보이지만 아래와 같은 경우에는 틀린게 된다.
     *     const result1: string = add(1, 2);
     *     const result2: string | number = add(1, 2);
     *
     *     // union
     *     add(1,2)
     *     add('1','2')
     *     add(1,'2')
     */


    /**
     * intersection
     */
    type C = string & number;
    // const c: C = 1; 안되는 케이스

    /**
     * 객체에서는 둘다 만족하는 케이스를 만들 수 있다.
     */
    type D = { hello: 'world' } & { zero: 'cho' }; // 모든 속성이 다 있어야 한다.
    const d: D = { hello : 'world', zero: 'cho'};

    // 또는도 된다 의미는 완전히 다름
    type E = { hello: 'world' } | { zero: 'cho' };
    const e1: E = { hello : 'world', zero: 'cho'};
    const e2: E = { hello : 'world' }; // 또는 이기 때문에 가능

})()
