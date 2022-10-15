

// Arrow function

console.log('Hello world');

let btn = document.getElementById('add')

btn.addEventListener('click', function(){
    console.log(add());
})


const add = (function () {
    let counter = 0
    return function () {
        counter +=1;
        return counter
    }
})()


