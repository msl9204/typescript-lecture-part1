(function () {

    function a(this: Window | typeof obj, param: string) {
        console.log(this.name)
    }

    const obj = {name: 'zerocho'}
    const b = a.bind(obj)
    b('1') // 'zerocho'

    /**
     * ThisParameterType
     */
    type T = ThisParameterType<typeof a>

    /**
     * OmitThisParameter -> 타입 추론이 실패했을 때
     * 기존 this를 없애버린다.
     */

    type NoThis = OmitThisParameter<typeof a>

    /**
     * bind 사용 예제
     * this를 사용하는 경우와
     * this를 사용하지 않는 경우로 나눌 수 있다.
     */

    const zerocho = {
        name: 'zerocho',
        sayHello(this: {name: string}) {
            console.log(`hi ${this.name}`);
        }
    }

    const sayHello = zerocho.sayHello;
    const sayHi = zerocho.sayHello.bind({name: 'nero'})

    function add(a: number, b: number, c: number, d: number, e: number, f: number) {
        return a + b + c + d + e + f;
    }

    const add1 = add.bind(null);
    add1(1, 2, 3, 4, 5, 6);

    const add2 = add.bind(null, 1);
    add2(2, 3, 4, 5, 6);

    const add3 = add.bind(null, 1 ,2);
    add3(3, 4, 5, 6);

    const add4 = add.bind(null, 1, 2, 3);
    add4(4, 5, 6);

    const add5 = add.bind(null, 1, 2, 3, 4);
    add5(5, 6);

    const add6 = add.bind(null, 1, 2, 3, 4, 5);
    // add6(6); 이거는 안만들어놔서 안된다.



})();
