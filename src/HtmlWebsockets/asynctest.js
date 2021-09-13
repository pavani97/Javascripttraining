function raiseAfter24(x){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(x * 2);
        }, 2000);
    });
}
async function addAsync(x){
    const a = await raiseAfter24(10);
    const b = await raiseAfter24(20);
    const c = await raiseAfter24(30);
    return x + a + b + c;
}
addAsync(10).then((sum) =>{
    console.log(sum);
})