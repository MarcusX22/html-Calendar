

function femaleCheck(Stay, GoHome) {

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
    export{femaleCheck}