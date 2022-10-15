

// Arrow function

console.log('Hello world');

let button = document.getElementById('add')

button.addEventListener('click', function(){
    console.log(add());
})


const add = (function () {
    let counter = 0
    return function () {
        counter +=1;
        return counter
    }
})()


