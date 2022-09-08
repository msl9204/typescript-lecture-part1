interface Axios {
    get(): void;
}

class CustomError extends Error {
    response? : {
        data: any
    }
}

declare const axios: Axios

(async () => {
    try {
        await axios.get()
    } catch (err: unknown) {
        const customError = (err as CustomError) // 이렇게 할당해서 쓰면 타입저장해놓고 쓸 수 있다
        if (err instanceof CustomError) {

        }


        console.error((err as CustomError).response?.data);
    }
})()
