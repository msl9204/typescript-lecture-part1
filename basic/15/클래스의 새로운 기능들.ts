(function () {

    class A {
        // a: string;
        // b: number;
        //
        // constructor(a: string, b: number) {
        //     this.a = '123';
        //     this.b = 123;
        // }

        // 위 코드를 생략해서 아래처럼 사용 가능
        a: string = '123';
        b: number = 123;
    }

    type instance = A; // 이렇게 하면 A의 인스턴스를 의미
    const type = typeof A // 이렇게 하면 A class를 의미

    // const b: typeof A = new A(); // 이렇게는 에러남
    const c: typeof A = A; // 이렇게는 됨

    /**
     * private 키워드
     */
    class B {
        // # 보다는 private를 추천
        private a: string;
        private b: number;

        constructor(a: string, b: number) {
            this.a = a;
            this.b = b;
        }

        method() {
            console.log(this.a, this.b)
        }
    }

    interface D {
        readonly a: string;
        b: string;
    }

    class E implements D {
        // private a: string = '123';
        // protected b: string = 'world';
        a: string = '123';
        b: string = 'world';
        c: string = 'wow'

        method() {
            console.log(this.a)
            console.log(this.b)
            console.log(this.c)
        }
    }

    class F extends E {
        method() {
            // console.log(this.a) // private 접근X
            console.log(this.b) // protected는 상속한 클래스에서 접근 가능
            console.log(this.c)
        }
    }

    // new E().a // private 접근X
    // new E().b // protected 접근X
    new E().c // public 접근O

    /**
     * abstract도 가능하다
     */
    abstract class G {
        abstract method(): void
    }



})();
