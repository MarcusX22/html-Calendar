
import{coNames} from'./coNames.js';

//callOff Screen
const coScreen = document.querySelector(".Call-Off");
const callDoneBtn = document.querySelector("#callSubmit");
const callCancelBtn = document.querySelector("#callCancel");
const addCoBtn = document.querySelector("#addCallOff");


let callOffs = localStorage.getItem('callOffs')? JSON.parse(localStorage.getItem('callOffs')) : [];
let addCONames = [];
const sidebar = document.querySelector(".sidebar-overlay");

function emptyCONames() {
    const ListOfButtons = document.querySelectorAll("#coNameBtn");
    ListOfButtons.forEach(function(e) {
        if (e.classList.contains("clicked")) {
         e.classList.remove("clicked");   
        }
    });

}
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
    addCONames = [];
    coNames();
});

export{callOffs,addCONames};