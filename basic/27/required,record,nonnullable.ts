(function () {
    interface Profile {
        name?: string,
        age?: number,
        married?: boolean
    }

    /**
     * Required를 쓰면 optional field를 required로 바꿀수 있다.
     */

    const zerocho: Required<Profile> = {
        name: 'zerocho',
        age: 29,
        married: false
    };

    /**
     * Required를 아래처럼 만들 수도있다.
     */

    type R<T> = {
        [key in keyof T]-?: T[key] // optional을 제거
    }

    const Rzerocho: R<Profile> = {
        name: 'zerocho',
        age: 29,
        married: false
    };

    /**
     * Readonly
     */

    const readOnly: Readonly<Profile> = {
        name: 'zerocho',
        age: 29,
        married: false
    }

    // readOnly.age = 30 => 이경우는 에러

    /**
     * Readonly 직접 만들면 아래와 같다.
     */

    type rdonly<T> = {
        readonly [key in keyof T]: T[key]
    }

    // type rdonly<T> = {
    //     -readonly [key in keyof T] : T[key] -> -readonly 붙여놓으면 떼서 가져올 수도 있다.
    // }

    const customReadOnly: rdonly<Profile> = {
        name: 'zerocho',
        age: 29,
        married: false
    }

    // customReadOnly.age = 30 => 에러

    /**
     * Record 타입
     * 아래와 같은 모양을 간단하게 만들고 싶을 때 Record를 사용한다
     * Record<string, number>
     */

    interface Obj {
        [key: string]: number
    }

    const a: Record<string, number> = {a: 3, b: 4}

    /**
     * 직접 만들면 아래와 같다.
     */

    type CustomRecord<T extends keyof any, S> = {
        [key in T] : S
    }

    type newType = keyof any

    const cr: CustomRecord<string, number> = {a: 3, b: 4}

    /**
     * Nonnullable
     */

    type A = string | null | undefined | boolean | number
    type B = NonNullable<A> // null / undefined 빼고 나온다

    /**
     * NonNullable 직접 만들기
     */

    type N<T> = T extends null | undefined ? never : T // key에 사용함
    type cusN = N<A> // null / undefined 빼고 나온다
    
})();
