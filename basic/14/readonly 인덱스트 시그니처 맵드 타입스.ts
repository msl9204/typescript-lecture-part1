(function () {
    interface A {
        readonly a: string;
        b: string
    }

    const aaaa: A = { a: 'hello', b: 'world'}
    // aaaa.a = "asd" // 이렇게 안됨

    // 인덱스드 시그니처
    interface B {
        [key: string]: number // 어떤 키든간에 string만 들어오면 된다
    }

    const bbbb: B = { a: 1, b: 2, c: 3, d: 4, e: 5}

    // 맵드 타입스
    type candid = 'Human' | 'Mammal' | 'Animal'
    type objs = { [key in candid]: number }

    const objs: objs = { Human: 123, Animal: 5, Mammal: 7}

})();
