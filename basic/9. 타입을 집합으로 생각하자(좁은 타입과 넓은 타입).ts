(function () {
    /**
     * 아래와 같은 경우 A가 더 넓은타입이다.
     * 집합으로 보기
     */
    type A = string | number;
    type B = string;

    type C = string & number; // 이거는 never type이 됨. 절대 될수가 없으므로

    /**
     * 객체의 경우
     * 속성이 적을수록 넓은 타입이다.
     * 객체는 상세할수록 좁다.
     */
    type D = { name: string };
    type E = { age: number };
    type F = { name: string, age: number };

    type DE = D | E
    type FF = D & E

    const de: DE = { name: 'zerocho'}
    const ff: FF = { name: 'zerocho', age: 100 }
    // const ffextra: FF = { name: 'zerocho', age: 100, married: false } // 잉여속성검사 때문에 에러난다.
    // const fff: FF = de // 이거는 안된다. (넓은 타입을 좁은 타입에 넣으려고 해서)
    const dede: DE = ff // 이거는 된다.(좁은 타입을 넓은 타입에 넣으려고 해서)


})();

