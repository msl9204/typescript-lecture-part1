(function () {
    const x: {} = 'hello'
    const y: Object = 'hi' // {}, Object 모든 타입 (null과 undefined 제외)

    // const xx: object = 'hi' // Object랑 object랑 다름 (이렇게는 에러남)
    const yy: object = { hello: 'world' } // object 지양, interface, type, class 사용

    const z: unknown = 'hi'

    // unknown => 얘도 모든 타입을 받을 수 있음 (any 보다는 낫다)
    // 4.8 부터는 unknown = {} | null | undefined
    if (z) {
        z
    } else {
        z
    }

})();

