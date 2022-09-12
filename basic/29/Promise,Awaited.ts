(function () {

    const p1 = Promise.resolve(1).then((a) => a + 1).then((a) => a + 1).then((a) => a.toString());
    // Promise<number>, Promise<number>, Promise<number>, Promise<string>
    const p2 = Promise.resolve(2); // Promise<number>
    const p3 = new Promise((res, rej) => { //Promise<unknown>
        setTimeout(res, 1000)
    })

    Promise.all([p1, p2, p3]).then((result) => {
        console.log(result) // ['3', 2, undefined]
    })

})();
