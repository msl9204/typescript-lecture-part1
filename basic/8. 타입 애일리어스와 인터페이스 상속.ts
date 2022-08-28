(function () {
    type Animal = { breath: true };
    type Mammal = Animal & { breed: true };
    type Human = Mammal & { think: true };

    const zerocho: Human = {breath: true, breed: true, think: true};

    interface A {
        breath: true
    }

    interface B extends A {
        breed: true
    }

    const b: B = {breath: true, breed: true};


    /**
     * type은 중복이 안되지만
     * interface는 중복해서 쓸 수 있다. (선언 할 때마다 합쳐진다)
     */
    interface C {
        talk: () => void
    }

    interface C {
        eat: () => void
    }

    interface C {
        shit: () => void
    }

    const c: C = {talk(){}, eat(){}, shit(){}}

    /**
     * 네이밍 규칙
     * (요즘 스타일: 안붙이고 해도 됨)
     */
    interface IProps {} // I 붙여줌
    type TType = string | number; // T 붙여줌
    enum EHello { // E 붙여줌
        Left,
        Right
    }



})();
