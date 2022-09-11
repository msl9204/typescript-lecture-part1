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
     * Pick이랑 Omit으로 아래처럼 가능
     */

    const newZerocho1: Pick<Profile, 'name' | 'age'> = {
        name: 'zerocho',
        age: 29
    }

    const newZerocho2: Omit<Profile, 'married'> = {
        name: 'zerocho',
        age: 29
    }

    /**
     * Pick도 아래처럼 구현할 수 있다.
     */

    type P<T, U extends keyof T> = {
        [key in U] : T[key]
    }

    const newPick: P<Profile, 'name' | 'age'> = {
        name: 'zerocho',
        age: 29
    }

})()
