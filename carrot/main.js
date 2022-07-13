'use strict';

const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
const field = document.querySelector('.field');
const carrot = document.querySelector('.carrot-icon');
const bug = document.querySelector('.bug-icon');

let second = 15;

let stopWatch = setInterval(() => {
  second--;
  if(second == -1) {
    clearInterval(stopWatch);
    alert('우~~~~~~~~~~~~~~');
  } else {
    styleChange();
  }  


}, 1000);

function styleChange() {
  timer.innerHTML = second;
};


const fieldRect = field.getBoundingClientRect();
// console.log(fieldRect.left, fieldRect.top);

function randScatter() {
  let n = 10;
  for(let i=0; i<n; i++) {
    let left = (fieldRect.right-80-fieldRect.left)*Math.random(); // 당근 사이즈 80
    let top = (fieldRect.bottom-80-fieldRect.top)*Math.random();
    // console.log(left, top);
    createItem(left, top, carrot);
  }
  for(let i=0; i<n; i++) {
    let left = (fieldRect.right-80-fieldRect.left)*Math.random(); // 벌레 사이즈 80
    let top = (fieldRect.bottom-80-fieldRect.top)*Math.random();
    // console.log(left, top);
    createItem(left, top, bug);
  }
};

function createItem(left, top, item) {
  // console.log(left, top);
  const node = item.cloneNode(true);
  // console.log(node);
  node.removeAttribute('hidden');
  node.style.left = `${left}px`;
  node.style.top = `${top}px`;
  field.appendChild(node);
};


randScatter();

const carrots = document.querySelectorAll('.carrot-icon')
console.log(carrots.length);

let countNumber = 0
carrots.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(counter);
    event.target.remove();
    countNumber++;
    counterChange();
    if(countNumber == 10) {
      alert('김가람님의 승리를 축하합니다!!')
      clearInterval(stopWatch);
    }

  })
});

function counterChange() {
  counter.innerHTML = countNumber;
}

const bugs = document.querySelectorAll('.bug-icon')
console.log(bugs);
bugs.forEach((item) => {
  item.addEventListener('click', (event) => {
    alert('yeah it\'s so bad')
  })
});

