
let leave = localStorage.getItem('leave')? JSON.parse(localStorage.getItem('leave')) : [];
import { ogList } from './ogList.js';


//leave screen
const leaveContainer = document.querySelector(".leaveContainer");
const leaveNamesList = document.querySelector("#leaveNames");
const leaveDate= document.querySelector("#leaveDate");
const leaveDoneBtn = document.querySelector("#leaveSubmit");
const leaveCancelBtn = document.querySelector("#leaveCancel");
const leaveNextBtn = document.querySelector("#dateNext");
const leaveBackBtn = document.querySelector("#dateBack");
const addLeaveBtn = document.querySelector("#addLeave");
const callDate= document.querySelector("#callDate");

//sidebar
const sidebar = document.querySelector(".sidebar-overlay");
function emptyLeaveNames() {
    const ListOfButtons = document.querySelectorAll("#leaveNameBtn");
    ListOfButtons.forEach(function(e) {
        if (e.classList.contains("clicked")) {
         e.classList.remove("clicked");   
        }
    });

}
let nav = 0;
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
            let leaving = [];
            let people = [];
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
    export{addLeaveBtn,leave};