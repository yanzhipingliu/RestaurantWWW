//using and printing to the console 
console.log("Hello World");
// Variables 
let firstName = 'Tina';
let lastName = 'Xu';

console.log(firstName);
console.log(lastName);

const courseName = 'web design for beginners';
console.log(courseName);

firstName = 'David';
console.log(firstName);

// contenation of strings and variables

console.log('my name is ' + firstName + ' ' + lastName + '.');

//Query of
const h1 = document.querySelector('h1');
console.log(h1);

const navButtons = document.querySelectorAll('.nav-link');
console.log(navButtons);

// lists of arrays of
let classList = ['Cindy', 'nia', 'Sugar', 'janice', 'Lucy', 45, true, h1];
classList[5] = 'Judy';
console.log(classList);

const header = document.querySelector('header');
console.log(header.innerHTML);
console.log(header.innerText);

const sectionList = document.querySelectorAll('section');
console.log(sectionList);
sectionList[1].classList.remove('reverse-flex');
sectionList[0].classList.add('reverse-flex');

function myGreeting() {
    console.log('Hey there!');
    console.log('Hope you are doing well!');
}

function timeGreeting() {
    // I want this function to give the proper greetings
    let time = 13;
    let date = new Date();
    console.log(date);
    time = date.getHours();
    if (time < 12) {
        console.log('Good morning');
    } else {
        console.log('good night');
    }

}

function timesTable() {
    console.log('1*6 =' + 1 * 6);
    let multiplier = 6;
    let number = 1;
    while (number <= 100) {
        console.log(number + 'X' + multiplier + '=' + number * multiplier);
        number++;
    }
}

function forTimesTable(multiplier, limit) {
    // let multiplier = 6;
    for (let number = 1; number <= limit; number++) {
        console.log(number + 'X' + multiplier + '=' + number * multiplier);
        number++;
    }
}

h1.addEventListener('click', timeGreeting);
var w;

function startWorker() {
    if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}