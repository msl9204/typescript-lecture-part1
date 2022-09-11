(function () {
    interface Profile {
        name: string,
        age: number,
        married: boolean
    }

    const zerocho: Profile = {
        name: 'zerocho',
        age: 29,
        married: false,
    }

    /**
     * 아래처럼
     * 부분적인 객체만 필요로 할 때
     */
    // const newZerocho: Profile = {
    //     name: 'zerocho',
    //     age: 29,
    // }

    /**
     * 아래처럼 쓸 수 있는데
     * 전부다 optional로 만들어 준다.
     */
    const newZerocho2: Partial<Profile> = {
        name: 'zerocho',
        age: 29,
    }

    /**
     * Partial을 직접 만들 수도 있다.
     */

    type P<T> = {
        [key in keyof T]?: T[key]
    }

    /**
     * 아래처럼 만들어서 사용 가능
     */

    const newZerocho3: P<Profile> = {
        name: 'zerocho',
        age: 29,
    }

})();

