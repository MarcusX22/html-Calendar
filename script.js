let nav = 0;
let leaveNav = 0
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
let lists = localStorage.getItem('lists')? JSON.parse(localStorage.getItem('lists')) : [];
let callOffs = localStorage.getItem('callOffs')? JSON.parse(localStorage.getItem('callOffs')) : [];
let leave = localStorage.getItem('leave')? JSON.parse(localStorage.getItem('leave')) : [];
let GoingHome = localStorage.getItem('GoingHome')? JSON.parse(localStorage.getItem('GoingHome')) : [];
let DayNum = 1

const calendar = document.getElementById('calendar')
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop')
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// sidebar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-overlay");
//sidebar buttons
const addCoBtn = document.querySelector("#addCallOff");
const addLeaveBtn = document.querySelector("#addLeave");
const todayListBtn = document.querySelector("#todaysList");

//callOff Screen
const coScreen = document.querySelector(".Call-Off");
const ListOfNames = document.querySelector("#CallNames");
const callDate= document.querySelector("#callDate");
const callDoneBtn = document.querySelector("#callSubmit");
const callCancelBtn = document.querySelector("#callCancel");

//leave screen
const leaveContainer = document.querySelector(".leaveContainer");
const leaveNamesList = document.querySelector("#leaveNames");
const leaveDate= document.querySelector("#leaveDate");
const leaveDoneBtn = document.querySelector("#leaveSubmit");
const leaveCancelBtn = document.querySelector("#leaveCancel");
const leaveNextBtn = document.querySelector("#dateNext");
const leaveBackBtn = document.querySelector("#dateBack");

//GoingHome Screen
const GoingNames = document.querySelector("#GoingNames");
const GoingContainer = document.querySelector(".goingContainer");
const GoDate = document.querySelector("#goDate");
const goDoneBtn = document.querySelector("#goDone");
const goCancelBtn = document.querySelector("#goCancel");


function todaysDate() {
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const dayString = `${month + 1 }/${day}/${year}`;
    return dayString;
}
goCancelBtn.addEventListener("click", function () {
    GoingContainer.classList.toggle("show");
  });
  goDoneBtn.addEventListener("click", function () {
    GoingContainer.classList.toggle("show");
  });


toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show");
});


// display items onload
window.addEventListener("DOMContentLoaded", load);
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

function openModal(date){
    clicked = date;
    GoingHomeNames(clicked);
    console.log(GoingContainer);
    GoingContainer.classList.add('show');

    // const eventForDay = events.find(e => e.date === clicked);

    // if (eventForDay) {
    //     document.getElementById('eventText').innerText = eventForDay.title;
    //     deleteEventModal.style.display = 'block';
    // } else {
    //     newEventModal.style.display = 'block';
        
    // }
    // backDrop.style.display = 'block';
}





function closeModal() {
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
};

function saveEvent() {
    if (eventTitleInput.value) {
        eventTitleInput.classList.remove('error');
        events.push({
            date: clicked,
            title: eventTitleInput.value,

        });

        localStorage.setItem('events', JSON.stringify(events));
        closeModal();
    }else {
        eventTitleInput.classList.add('error');
    }
}
    

function deleteEvent() {
    events = events.filter(e => e.date!== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
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

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal);

    
    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);
}

const ogList = [
{Name: 'Lara', Sex: 'Male'},
{Name: 'Perez.F', Sex: 'Male'},
{Name: 'Alcocer', Sex: 'Female'},
{Name: 'Trejo', Sex: 'Male'},
{Name: 'Sabori', Sex: 'Male'},
{Name: 'Romero', Sex: 'Female'},
{Name: 'Jiminez', Sex: 'Male'},
{Name: 'Torres', Sex: 'Male'},
{Name: 'Valdez', Sex: 'Female'},
{Name: 'Harris', Sex: 'Male'},
{Name: 'Juarez', Sex: 'Male'},
{Name: 'Esqueda', Sex: 'Male'},
{Name: 'Quinones', Sex: 'Male'},
{Name: 'Perez.D', Sex: 'Female'},
{Name: 'Williams', Sex: 'Male'},
{Name: 'Diaz', Sex: 'Male'},
{Name: 'Laris', Sex: 'Female'},
{Name: 'Nava', Sex: 'Male'},
{Name: 'Random', Sex: 'Female'},



];

// DON'T FORGET YOU NEED TO FIX THE CO BECAUSE YOU CANT CHANGE IT ONCE YOU CLICK A NAME
let addCONames = [];

function emptyCONames() {
    const ListOfButtons = document.querySelectorAll("#coNameBtn");
    ListOfButtons.forEach(function(e) {
        if (e.classList.contains("clicked")) {
         e.classList.remove("clicked");   
        }
    });

}
function coNames() {
    addCONames = [];
    for (let i = 0; i < ogList.length; i++) {
        ListOfNames.innerHTML += `<button id='coNameBtn'>${ogList[i].Name}</button>`;
    }
    const dt = new Date();
     const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const dayString = `${month + 1 }/${day}/${year}`;
    callDate.innerText = dayString;
    let ListOfButtons = document.querySelectorAll("#coNameBtn");
    let check = callOffs.find(e => e.date === dayString);
    if (check) {
        let people = callOffs.filter(e => e.date === dayString);
        for (let i = 0; i < people.length; i++) {
            addCONames.push(people[i].Name);
            
        };
        for (let i = 0; i < ListOfButtons.length; i++) {
            if(people.find(e => e.Name === ListOfButtons[i].innerText )) {
                ListOfButtons[i].classList.add("clicked");
            }
        }
    
    }

    ListOfButtons.forEach(function(e) {
        e.addEventListener("click", function () {  
            if (e.classList.contains("clicked")) {
                e.classList.toggle("clicked")
                console.log('true');
                let index = addCONames.indexOf(e.innerText);
                addCONames.splice(index, 1);
                console.log(addCONames);
               
            } else {
                console.log(addCONames);
                console.log('false');
                addCONames.push(e.innerText);
                console.log(addCONames);
                e.classList.toggle("clicked") 
            };
        });
        
    });
   
        
};
callDoneBtn.addEventListener("click", function () {
    callOffs = [];
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const dayString = `${month + 1 }/${day}/${year}`;
    coScreen.classList.toggle("show");

    for (let i = 0; i < addCONames.length; i++) {
      callOffs.push({
                    date: dayString,
                    Name: addCONames[i],        
                    })         
    } 
    localStorage.setItem('callOffs', JSON.stringify(callOffs));
    location.reload();

  });

  callCancelBtn.addEventListener("click", function () {
    coScreen.classList.toggle("show");
    emptyCONames();
    addCONames=[];
  });


// show CO Screen when clicked
addCoBtn.addEventListener("click", function () {
    coScreen.classList.add("show");
    sidebar.classList.toggle("show");
    coNames();
});
function emptyLeaveNames() {
    const ListOfButtons = document.querySelectorAll("#leaveNameBtn");
    ListOfButtons.forEach(function(e) {
        if (e.classList.contains("clicked")) {
         e.classList.remove("clicked");   
        }
    });

}
// show Leave Screen when clicked "add or remove leave names"
addLeaveBtn.addEventListener("click", function () {
//handle leave Btn generation
    let leaveNames = [];
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    let dayString = `${month + 1 }/${day}/${year}`;
    let leaving = leave.find(e => e.date === dayString);

    for (let i = 0; i < leave.length; i++) {
        leaveNames.push({
            date: leave[i].date,
            Name: leave[i].Name
        });
    };
    leaveDate.innerHTML = dayString;
        for (let i = 0; i < ogList.length; i++) {
            leaveNamesList.innerHTML += `<button id='leaveNameBtn'>${ogList[i].Name}</button>`;
        }
        callDate.innerText = dayString;
        let ListOfButtons = document.querySelectorAll("#leaveNameBtn");

        if (leaving) {
            let people = leave.filter(e => e.date === dayString);
            for (let i = 0; i <ListOfButtons.length; i++){
                if(people.find(e => e.Name === ListOfButtons[i].innerText )) {
                    ListOfButtons[i].classList.add("clicked");
                }
            }
        }
       console.log(leaveNames);
        ListOfButtons.forEach(function(e) {
            e.addEventListener("click", function () {  
                if (e.classList.contains("clicked")) {
                    e.classList.toggle("clicked")
                    let person = leaveNames.find(a => a.Name === e.innerHTML);
                    console.log(person);
                    if (person) {
                        let dates = leaveNames.filter(a => a.Name === e.innerHTML);
                        let date = dates.find(a => a.date === leaveDate.innerHTML);
                        let index = leaveNames.indexOf(date);
                        leaveNames.splice(index, 1);
                    }
                    
        
                   
                } else {
                    console.log(e.innerText);
                    leaveNames.push({
                        date: leaveDate.innerHTML,
                        Name:e.innerText
                    });
                    console.log(leaveNames);
                    e.classList.toggle("clicked") 
                };
    
            });
            
        });
                
    leaveContainer.classList.add("show");
    sidebar.classList.toggle("show");
    
    let dayNum = day;
    
    leaveNextBtn.addEventListener("click", function () {
        console.log(leaveNames);
        emptyLeaveNames();
        if(month + nav <=11){
            let days= new Date(year, month + nav + 1, 0).getDate();
            dayNum++;
            if (dayNum <= days){
            dayString = `${month + 1 + nav }/${dayNum}/${year}`;  
            leaveDate.innerHTML = dayString;
            } else{
                nav++;
                dayNum = 1;
                dayString = `${month + 1 + nav }/${dayNum}/${year}`;
                leaveDate.innerHTML = dayString;
    
    
            }
        }
        leaving = [];
        people = [];
        leaving = leaveNames.find(e => e.date === dayString);
        people = leaveNames.filter(e => e.date === dayString);
         if (leaving){
            for (let i = 0; i<ListOfButtons.length; i++){
                if(people.find(e => e.Name === ListOfButtons[i].innerText )) {
                    ListOfButtons[i].classList.add("clicked");
                }
            }
        }
       
    });
    leaveBackBtn.addEventListener("click", function () {
        console.log(leaveNames);
        emptyLeaveNames();
        if(month+nav >= month){
            let days= new Date(year, month + nav + 1, 0).getDate();
        console.log(days);
        dayNum--;
        if (dayNum >= 1){
        dayString = `${month + 1 + nav }/${dayNum}/${year}`;  
        leaveDate.innerHTML = dayString;
        } else{
            nav--;
            let days= new Date(year, month + nav + 1, 0).getDate();
            dayNum = days;
            dayString = `${month + 1 + nav }/${dayNum}/${year}`;
            leaveDate.innerHTML = dayString;


        }
        }
        let leaving = leaveNames.find(e => e.date === dayString);
        let people = leaveNames.filter(e => e.date === dayString);

        if (leaving){
           for (let i = 0; i<ListOfButtons.length; i++){
               if(people.find(e => e.Name === ListOfButtons[i].innerText )) {
                   ListOfButtons[i].classList.add("clicked");
               }
           }
       }
        
    });
    leaveDoneBtn.addEventListener("click", function (){
        leave = [];
        if(leaveNames.length > 0){
            console.log(leaveNames);
            for (let i = 0; i < leaveNames.length; i++) {
                leave.push({
                    date: leaveNames[i].date,
                    Name: leaveNames[i].Name,
                });
            }
      
        }
        localStorage.setItem('leave', JSON.stringify(leave));
        emptyLeaveNames()
        leaveContainer.classList.remove("show");
        location.reload();
     
    });
    leaveCancelBtn.addEventListener("click", function (){
        emptyLeaveNames()
        leaveContainer.classList.remove("show");
        location.reload();
     
    });
        
    
  
  
});


// console.log(ListOfButtons);



let Names = [];
for (let i = 0; i < ogList.length; i++) {
    Names.push(ogList[i]);
};


function fourFemales(Stay, GoHome) {

let malesStay = [];
let femalesStay = [];
let femaleGo = [];
let maleGo = [];


    for (let i = 0; i < Stay.length; i++) {
        if (Stay[i].Sex === 'Female') {
            femalesStay.push(Stay[i]);
        }
        if (Stay[i].Sex === 'Male') {
            malesStay.push(Stay[i]);
        }
    }
    for (let i = 0; i < GoHome.length; i++) {
        if (GoHome[i].Sex === 'Female') {
            femaleGo.push(GoHome[i]);
        }
        if (GoHome[i].Sex === 'Male') {
            maleGo.push(GoHome[i]);
        }
    }
        if (femalesStay.length < 4) {        
            if (femaleGo.length >= 1) {
                // male correction
                for (let i = 0; i < 4 - femalesStay.length; i++) {
                    GoHome.push(malesStay[i]);
                    let switcher = Stay.indexOf(malesStay[i]);
                    Stay.splice(switcher,1);
                    
                }

                //females correction
                for (let i = 0; i < 4 - femalesStay.length; i++) { 
                        let num = femaleGo.length - 1;
                        Stay.unshift(femaleGo[num]);
                        let switcher = GoHome.indexOf(femaleGo[num]);
                        GoHome.splice(switcher,1);                     
                        
                };   
            }

        }


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
                    // console.log(k);
                    // console.log(NamesClone[k])
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

    fourFemales(Stay, GoHome);
   
    const eventForDay = events.find(e => e.date === dayString);
    if (eventForDay) {

    }else {
       
        for (let i = 0; i < GoHome.length; i++) {
            events.push({
                date: dayString,
                title: `${GoHome[i].Name}`,
            
            })
        
        }
        // for (let i = 0; i < coList.length; i++) {
        //     events.push({
        //         date: dayString,
        //         title: `${coList[i].Name}`,
            
        //     });

        // }
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
                        // events.push({
                        //     date: dayString,
                        //     title: "BlueDay",
                        
                        // });
                        // localStorage.setItem('events', JSON.stringify(events));
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
                    // events.push({
                    //     date: dayString,
                    //     title: "BlueDay",
                    
                    // });
                    //      localStorage.setItem('events', JSON.stringify(events));
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
initButtons();
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


  leaveCancelBtn.addEventListener("click", function () {
    coScreen.classList.toggle("show");
    emptyCONames();
    addCONames=[];
  });
 