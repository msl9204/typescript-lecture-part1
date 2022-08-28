namespace ten {
    declare function forEach(arr: number[], callback: (el: number) => void): void; // declare를 붙여주면 함수 구현부가 없이 선언만 있어도 된다. (실제 자바스크립트 코드에서는 안보임) - 컴파일은 안됨, 다른대서 선언함을 보장하는 키워드 declare

    interface A { a: string }

    // const obj: A = { a: "string", b: 'world'} // 객체를 바로 대입할 때,
    // 객체에서는 잉여 속성 검사

    const obj = { a: "string", b: 'world'}
    const obj1: A = obj // 변수로 빼면 검사를 안함


    function a(callback: () => void): void {
        // return '3' 이렇게는 에러
        // return undefined // 이거는 에러 X
        // return null // 이것도 에러
    }

    /**
     * function에서 void는 두가지로 기억해야한다.
     * function으로 선언할 때 => 이때 리턴타입이 다르면 에러
     * 여기서 void의 의미는 리턴값이 없다.
     *
     * 아래 둘의 케이스에서 void의 의미는 사용하지 않겠다.
     * method로 선언할 때에는 다르다 => 둘은 리턴타입이 달라도 에러X
     * 매개변수가 void인 타입도 다르다.
     */

    a(() => {
        return '3';
    });

    interface Human {
        talk: () => void;
    }

    const human: Human = {
        talk() {
            return 'abc'; // 리턴값이 존재할 수 있다.
        }
    }

    let target: number[] = [];
    forEach([1,2,3], el => { target.push(el) }) // push의 리턴값은 number이지만, 지금 콜백의 리턴값은 void로 선언되어 있음. 그런데 에러가 안남 => 매개변수의 void는 실제 return값이 뭐든 상관하지 않겠다라는 의미임
    forEach([1,2,3], el => target.push(el))


    interface B {
        talk: () => void
    }

    const b: B = {
        talk() {
            return 3;
        }
    }

    const c = b.talk() as unknown as number // 강제변환
    console.log(c)
}

