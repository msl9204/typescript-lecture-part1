(function () {

    interface A {
        talk: () => void
    }

    const a: A = {
        talk() {
            return 3
        }
    }

    const b: any = a.talk()
    b.method() // any로 선언하면 타입체크를 아예 안함

    const c: unknown = a.talk()
    // c.method() // unknown이면 이렇게 쓸 때 에러남

    // unknown이면 타입을 따로 정해줘야함.
    // const d: unknown = (d as A).talk()


    /**
     * unknown이 나오는 가장 흔한 케이스가 try catch 할 때 error
     */
    try {

    } catch (error) {
        (error as Error).message
    }

    /**
     * 타입을 잘못만들면 아래처럼 해야한다.
     * e.toString을 부를수가 없다.
     */
    const e = a.talk() as unknown as number
    e.toString()

    /**
     * undefined는 void에 대입 가능하다.
     */
    function f(): void {
        return undefined
    }



})()
