import{events}from './script.js';
import {leave}from './leave.js';
import { callOffs } from './coSrc/coBtns.js';

//GoingHome Screen
const GoingNames = document.querySelector("#GoingNames");
const GoingContainer = document.querySelector(".goingContainer");
const GoDate = document.querySelector("#goDate");
const goDoneBtn = document.querySelector("#goDone");
const goCancelBtn = document.querySelector("#goCancel");



goCancelBtn.addEventListener("click", function () {
    GoingContainer.classList.toggle("show");
  });
  goDoneBtn.addEventListener("click", function () {
    GoingContainer.classList.toggle("show");
  });

  function GoingHomeNames(clicked) {
    GoingNames.innerHTML = '';
   const eventForDay = events.find(e => e.date === clicked);
   const coForDay = callOffs.find(e => e.date === clicked);
   const leaveForDay = events.find(e => e.date === clicked);
       if (eventForDay) {
           let list = events.filter(e => e.date === eventForDay.date);
           console.log(list);
           for (let i = 0; i < list.length; i++) {
               console.log(list[i]);
               GoingNames.innerHTML += `<button class='goNameBtn'>${list[i].title}</button>`;
           }
           GoDate.innerText = eventForDay.date;
   
       }
       if (coForDay) {
           let list = callOffs.filter(e => e.date === coForDay.date);
           console.log(list);
           for (let i = 0; i < list.length; i++) {
               console.log(list[i]);
               GoingNames.innerHTML += `<button id=coNameBtn'>${list[i].Name}</button>`;
           }
           GoDate.innerText = coForDay.date;
   
       }
       if (leaveForDay) {
           let list = leave.filter(e => e.date === leaveForDay.date);
           console.log(list);
           for (let i = 0; i < list.length; i++) {
               console.log(list[i]);
               GoingNames.innerHTML += `<button id='leaveBtn'>${list[i].Name}</button>`;
           }
           GoDate.innerText = eventForDay.date;
   
       }
   }
   export{GoingHomeNames};