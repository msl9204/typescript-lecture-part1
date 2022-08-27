// 빈 배열을 선언하면 never 타입이 된다.
const array = [];
const notNeverArray: string[] = [];

const headMustHave: Element = document.querySelector("#head")!; // !를 쓰면 null-safety 채크를 건너 뛸 수 있다.
const head = document.querySelector("#head");

if (head) {
    head.innerHTML = "Hello World";
}
