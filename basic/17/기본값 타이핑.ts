(function () {

    // 기본값 있을 때 자동으로 타이핑 된다.
    const a = (b = 3, c = 5) => {
        return '3'
    }

    a(1)

    // 제네릭도 기본값 넣어줄 수 있다.
    const add = <T = unknown>(x: T, y: T) => ({x, y})
    add(1, 2)

})();
