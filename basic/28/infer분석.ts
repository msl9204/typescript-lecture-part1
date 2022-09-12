(function () {
    function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean } {
        return {x, y, z}
    }


    /**
     * Parameters
     */
    type Params = Parameters<typeof zip>
    type First = Params[0]

    /**
     * Parameters 직접 만들기
     */
    // (...args: any) => any 함수로 제한두는 방법
    type P<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never // 타입스크립트가 알아서 A를 추론해라는 뜻


    /**
     * 리턴타입을 가져오고 싶을 때
     */
    type R<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never
    type Ret = R<typeof zip>

    /**
     * 위 같은기능을
     * ReturnType으로도 가능
     */

    type Ret1 = ReturnType<typeof zip>

    /**
     * 생성자 관련
     */

    // abstract new (...args: any) => any 가 있으면 생성자 관련이다.
    type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
    type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

    class A {

        a: string;
        b: number;
        c: boolean;

        constructor(a: string, b: number, c: boolean) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    const c = new A('123', 456, true);
    type C = ConstructorParameters<typeof A>
    type I = InstanceType<typeof A>

})();
