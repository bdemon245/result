
let getResult = document.querySelector('#get-result');
let input = document.querySelector('#roll');
window.addEventListener('load', ()=>{
    input.focus();
    console.log('Refreshed')
})

let app = document.querySelector('#app');
input.addEventListener('keyup', (event)=>{
    const key = event.key;
    if (key === 'Backspace') {
        let roll = input.value;
        if (roll == '') {
            window.location.reload();
        } 
    }
    
})
getResult.addEventListener('click', ()=>{
    let roll, url;
    roll = input.value;
    console.log(roll);
    url = 'https://btebresultszone.com/results/' + roll + '?';
    if(roll!=""){
        window.open(url, '_blank');
    }
})
input.addEventListener('keypress', (eve) =>{
    const key = eve.key;
    if (key === 'Enter') {
        let roll;
        roll = input.value;
        console.log(roll);
        input.addEventListener('keyup', (event) =>{
            const keyName = event.key;
            if (keyName === 'Enter') {
                let url = 'https://btebresultszone.com/results/' + roll + '?';
                (function (url, condition) {//invoced first
                    if(condition){
                        window.open(url, '_blank');
                    }
                })(url, roll!="");
        
            }
            
            // (function (element) {//invoced last
            //     if (element == '') {
            //         alert("Enter Your Roll!");
            //     }  
            // })(roll)
        });
    }
    
});
