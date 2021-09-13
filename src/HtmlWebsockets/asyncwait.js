async function returnTrue() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 1000)
    });
    let result = await promise;
    console.log(result);
}
returnTrue();