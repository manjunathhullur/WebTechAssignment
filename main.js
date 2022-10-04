

let watch = document.getElementById("watchbox");
let conatiner = document.getElementById("container");

let random=(a , b)=>{
let   num =   Math.round(a+ (b-a)* Math.random())
    return num
}

setInterval(() => {
    let d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let day = d.getDay()
let date = d.getDate()
let month = d.getMonth()
let year = d.getFullYear()
watch.innerText = `${hour} : ${min} : ${sec}`
}, 1000);

setInterval(() => {

conatiner.style.backgroundColor = `${"#" + random(100000 , 999999)}`
}, 2000);
