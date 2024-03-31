import{ogList}from '../ogList.js';
import{callOffs}from '../script.js';
import{addCONames}from './coBtns.js';
const ListOfNames = document.querySelector("#CallNames");
const callDate= document.querySelector("#callDate");

function coNames() {
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
export{coNames,addCONames}