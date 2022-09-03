(function () {
    interface Cat {
        meow: number;
    }

    interface Dog {
        bow: number;
    }

    // 리턴값에 is가 있으면 커스텀 타입 가드 함수 -> if문 안에서 쓴다.
    function catOrDog(a: Cat | Dog): a is Dog {
        // 타입 판별
        if ((a as Cat).meow) return false
        return true // a가 Dog 일때만 return true
    }

    // 타입을 구분해주는 커스텀 함수를 직접 만들 수 있다.
    const cat: Cat | Dog = {meow: 3}
    if (catOrDog(cat)) {
        console.log(cat.meow);
    }

    if ('meow' in cat) {
        console.log(cat.meow);
    }
})();

// 두개 다 타입가드
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected'
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled'

// Promise -> Pending -> Settled(Resolved, Rejected)

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')])
const errors = promises.filter((promise) => promise.status === 'rejected') // rejected만 받아야 하는데, Settled로 타입스크립트는 넓게 추론한다.
const errors1 = promises.filter(isRejected) // 정확한 타입이 추론된다.
export {};
