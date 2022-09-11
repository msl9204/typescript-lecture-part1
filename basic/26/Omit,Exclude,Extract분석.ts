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
     * Exclude
     */

    type Animal = 'Cat' | 'Dog' | 'Human';
    type Mammal = Exclude<Animal, 'Human'>;

    type E = Exclude<keyof Profile, 'married'>



    /**
     * Omit
     */

    const newZerocho2: Omit<Profile, 'married'> = {
        name: 'zerocho',
        age: 29
    }

    // S extends keyof any => 'string' | 'number' | 'symbol'
    /**
     * Omit도 아래처럼 구현할 수 있다.
     */
    type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>

    const oZerocho: O<Profile, 'married'> = {
        name: 'zerocho',
        age: 29,
    }

    /**
     * Extract
     */
    type Human = Extract<Animal, 'Cat' | 'Dog'>



})();
