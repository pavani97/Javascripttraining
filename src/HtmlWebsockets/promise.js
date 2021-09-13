var promise1 = new Promise(function (resolve,reject)
{
    setTimeout(function(){
        resolve('hello');},300);
    });
promise1.then(function(value){
    console.log(value);
});
console.log(promise1);