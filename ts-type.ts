const a: string = '5';
const b: number = 5;
const c: boolean = true
const d: undefined = undefined
const e: null = null
const f: symbol = Symbol.for("abc")
const g: any = 123

function add(x: number, y: number): number { return x + y }

type Add = (x: number, y: number) => number // 타입 별칭
const add1: Add = (x, y) => x + y

// 인터페이스를 사용해서도 타이핑 가능
interface AddInterface {
    (x: number, y: number): number
}
const add2: AddInterface = (x, y) => x + y


// 객체의 타입
const obj: {lat: number, lon: number} = {lat: 37.5, lon: 127.5}


// 배열의 타입
const arr1: string[] = ['123', '456']
const arr2: number[] = [123, 456]
const arr3: Array<number> = [123, 456]

// 튜플(길이가 고정된 배열)의 타입
const arr4: [number, number, string] = [1, 2, "3"]
