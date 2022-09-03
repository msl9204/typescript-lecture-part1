(function (){

    function numOrStr(a: number | string) {
        // 타입가드
        if (typeof a === 'string') {
            a.split(",");
        } else {
            a.toFixed(1);
        }

        // if (typeof a === 'boolean') {
        //     a.toString() // 여기서는 never type으로 바뀐다.
        // }
    }

    numOrStr('123')
    numOrStr(1)

    function numberOrNumArray(a: number | number[]) {
        if (Array.isArray(a)) { // number[]
            a.concat(4);
        } else { // number
            a.toFixed(3)
        }
    }

    numberOrNumArray(123)
    numberOrNumArray([1, 2, 3])

    class A {
        aaa() {}
    }

    class B {
        bbb() {}
    }

    /**
     * class 인경우에는 instanceof로 검증한다
     */
    function aOrB(param: A | B) {
        if (param instanceof A) {
            param.aaa();
        } else {
            param.bbb();
        }
    }

    aOrB(new A())
    aOrB(new B())


    /**
     * 이렇게도 된다.
     * 객체의 속성을 가지고 type을 구분한다.
     */
    type E = { type: 'e', eee: string }
    type F = { type: 'f', fff: string }
    type G = { type: 'g', ggg: string }

    function typeCheck(a: E | F | G) {
        if (a.type === 'e') {
            a.eee
        } else if (a.type === 'f') {
            a.fff
        } else {
            a.ggg
        }
    }

    /**
     * in을 이용해서도 구분할 수 있다.
     */
    function typeCheck2(a: E | F | G) {
        if ('eee' in a) {
            a.eee
        } else if ('fff' in a) {
            a.fff
        } else {
            a.ggg
        }
    }



})()

