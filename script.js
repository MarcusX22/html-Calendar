
import {ogList} from './ogList.js';
import{leave} from './leave.js';
import{callOffs}from './coSrc/coBtns.js';
import {GoingHomeNames} from './GoingHome.js';
import { femaleCheck } from './femaleCheck.js';


let DayNum = 1
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
let lists = localStorage.getItem('lists')? JSON.parse(localStorage.getItem('lists')) : [];

const calendar = document.getElementById('calendar')
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// sidebar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-overlay");
//sidebar buttons
const todayListBtn = document.querySelector("#todaysList");

const GoingContainer = document.querySelector(".goingContainer");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show");
});


// display items onload
window.addEventListener("DOMContentLoaded", load);

function openModal(date){
    clicked = date;
    GoingHomeNames(clicked);
    console.log(GoingContainer);
    GoingContainer.classList.add('show');

}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
     
    });
    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });

}


initButtons();


let Names = [];
for (let i = 0; i < ogList.length; i++) {
    Names.push(ogList[i]);
};



// Send Home Function Decides who will be sent home and renews the Names List
function SendHome (dayString) {
    let NamesClone = [];
    let GoHome = [];
    let Stay = [];
    let coList = [];
    let callList = callOffs.find(e => e.date === dayString);
    let leavingList = leave.find(e => e.date === dayString);
    
    for (let i = 0; i < Names.length; i++) {
        NamesClone.push(Names[i]);
    }
    if (callList) {
        // events = []
        let getEvent = events.filter(e => e.date === dayString);
        for (let i = 0; i < getEvent.length; i++){         
            let person = events.find(e => e.date === getEvent[i].date && e.Name === getEvent[i].Name);
            console.log(person);
            let index = events.indexOf(person); 
            events.splice(index,1);         
            localStorage.removeItem(`events[${index}]`);
            
        };
        
        let callPeople = callOffs.filter(e => e.date === dayString);
        for (let i = 0; i < callPeople.length; i++){
            let person = NamesClone.find(e => e.Name === callPeople[i].Name);
            let index = NamesClone.indexOf(person);
            coList.push(NamesClone[index]);
            }
    }
    if (leavingList) {
                // events = []
        let getEvent = events.filter(e => e.date === dayString);
        for (let i = 0; i < getEvent.length; i++){         
                    let person = events.find(e => e.date === getEvent[i].date && e.Name === getEvent[i].Name);
                    console.log(person);
                    let index = events.indexOf(person); 
                    events.splice(index,1);         
                    localStorage.removeItem(`events[${index}]`);
                    
                };
                
        let leavePeople = leave.filter(e => e.date === dayString);
        for (let i = 0; i < leavePeople.length; i++){
                    let person = NamesClone.find(e => e.Name === leavePeople[i].Name);
                    let index = NamesClone.indexOf(person);
                    coList.push(NamesClone[index]);
                    }
    }   
 
    let NamesLength = NamesClone.length;
    let k = 0;
    let i = 0;
    for (let j = 0; j < (NamesLength-14) - coList.length; j++) {
        
        if (coList.length > 0) { 
                let temp = coList.find((e) => e.Name === Names[i].Name);
                if (temp) {
                    console.log('true1');
                    k++;
                    i++;
                    temp = coList.find((e) => e.Name === Names[i].Name);
                    if(temp){
                        console.log('true2');
                        k++;
                        i++;
                        temp = coList.find((e) => e.Name === Names[i].Name);
                        if(temp){
                            console.log('true3');
                            k++;
                            i++;
                            temp = coList.find((e) => e.Name === Names[i].Name);
                            if(temp){
                                console.log('true4');
                                k++;
                                i++;
                                temp = coList.find((e) => e.Name === Names[i].Name);
                                if(temp){
                                    console.log('true5');
                                    k++;
                                    i++;
                                    GoHome.push(NamesClone[k]);
                                    NamesClone.splice(k,1);
            
                                }else{
                                    i++;
                                    GoHome.push(NamesClone[k]);
                                    NamesClone.splice(k,1);
            
                                }
        
                            }else{
                                i++;
                                GoHome.push(NamesClone[k]);
                                NamesClone.splice(k,1);
        
                            }

                        }else{
                            i++;
                            GoHome.push(NamesClone[k]);
                            NamesClone.splice(k,1);

                        }

                    }else{
                        i++;
                        GoHome.push(NamesClone[k]);
                        NamesClone.splice(k,1);

                    }
                }else {   
                    i++;   
                    GoHome.push(NamesClone[k]);
                    NamesClone.splice(k,1);
                
            }

        }else {
            i++;
            GoHome.push(NamesClone[k]);
            NamesClone.splice(k,1);
        }
    }


    for (let i = 0; i < NamesClone.length; i++) {
        Stay.push(NamesClone[i]);
    }

    femaleCheck(Stay, GoHome);
   
    const eventForDay = events.find(e => e.date === dayString);
    if (eventForDay) {

    }else {
       
        for (let i = 0; i < GoHome.length; i++) {
            events.push({
                date: dayString,
                title: `${GoHome[i].Name}`,
            
            })
        
        }
}
    localStorage.setItem('events', JSON.stringify(events));

    for (let i = 0; i < GoHome.length; i++) {
        Stay.push(GoHome[i]);
    }
    NamesLength = [];
    NamesClone = [];
    for (let i = 0; i < Stay.length; i++) {
        NamesClone.push(Stay[i]);
    }
    
        lists.push({
            date: dayString,
            list: NamesClone,
        });
    localStorage.setItem('lists', JSON.stringify(lists));

    Names = [];

    for (let i = 0; i < NamesClone.length; i++) {
        Names.push(NamesClone[i]);
    }
    Stay = [];
    GoHome = [];
    coList = [];

};




function dayRotation() {
    events =[];
    lists = [];
    const firstDay = new Date(2024, 1, 1)
    let month = firstDay.getMonth();
    const year = firstDay.getFullYear();
    let days = 0;
    let k = 2
    for (let j = 0; j <= 11; j++) { 

        if (j === 0) {
            function daysInMonths(month, year) {
                days +=  new Date(year, month, 0).getDate();
              }; 
            let days = 0;    
            daysInMonths(1, year);
            for (let i = 8; i <= days; i++) {
                const dayString = `${month}/${i}/${year}`;
                    if (DayNum <= 4){
                       SendHome(dayString);
                            DayNum++;               
                    }else if (DayNum > 4 && DayNum <= 7){
                        DayNum++;
                    }else if (DayNum >7){
                        DayNum = 1;
                    };
                    
                }
        }else {
            
            function daysInMonths(month, year) {
                days +=  new Date(year, month, 0).getDate();
              }; 
            let days = 0; 
            daysInMonths(k, year);
            k++;
            for (let i = 1; i <= days; i++) {
            const dayString = `${month + j }/${i}/${year}`;
                if (DayNum <= 4){
                 SendHome(dayString);
                        DayNum++;
                }else if (DayNum > 4 && DayNum <= 7){
                    DayNum++;
                }else if (DayNum >7){
                    DayNum = 1;
                };
            }
            
        }

    }
};
dayRotation();
function load() {
    
    
    const dt = new Date();
    if (nav!== 0){
        dt.setMonth(new Date().getMonth() + nav);
    };

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(',')[0]);
     
    document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', {month: 'long' })} ${year}`;
    
    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            const eventForDay = events.find(e => e.date === dayString);
            const coForDay = callOffs.find(e => e.date === dayString);
            const leaveForDay = leave.find((e) => e.date === dayString);
            

            if (i - paddingDays === day && nav === 0){
                daySquare.id = "currentDay";
            }
            if (eventForDay) {
                const allEventsForDay = events.filter(e => e.date === dayString);
                allEventsForDay.forEach(function(e) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = e.title;
                daySquare.appendChild(eventDiv);
                });
            }
            if (coForDay) {
                const allCoForDay = callOffs.filter(e => e.date === dayString);
                allCoForDay.forEach(function(e) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('eventCO');
                eventDiv.innerText = e.Name;
                daySquare.appendChild(eventDiv);
                });
            }
            if (leaveForDay) {
                const allLeaveForDay = leave.filter(e => e.date === dayString);
                allLeaveForDay.forEach(function(e) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('eventLeave');
                eventDiv.innerText = e.Name;
                daySquare.appendChild(eventDiv);
                });
            }
    

            daySquare.addEventListener('click', () => openModal(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
};


  export{callOffs,leave,load,nav, events};