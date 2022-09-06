function workTimeCount(){
    function dosomeThings(){
        console.log('3')
    }
    console.log('1');
    console.log('2');
    setTimeout(dosomeThings, 5000);
    console.log('4');
    console.log('5');
};

console.log('interval start');
let seconds = 0; 
const intervalId = setInterval(() => {
    console.log(seconds++);
    if(seconds === 10){
        clearInterval(intervalId);
    }
},500)
console.log('interval end');
