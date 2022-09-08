(function () {
    function a(x: string): number {
        return +x;
    }

    a('1') // 1

    /**
     * (리턴타입의 경우)
     * 아래처럼 대입할 수 있을까? => 가능
     * 넓은타입으로 대입 가능
     * 반대는 안됨
     */
    type B = (x: string) => number | string
    const b: B = a

    /**
     * (매개변수의 경우)
     * 매개변수는 리턴타입과 반대로 적용
     * 좁은타입으로 대입 가능
     */

    function c(x: string | number): number {
        return +x;
    }

    type D = (x: string) => number
    const d: D = c


})();
