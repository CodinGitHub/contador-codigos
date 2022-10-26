let counterBtn = document.querySelector('.btn');
let counterNumber = document.querySelector('.counter__number');

let counter = 0;

counterBtn.addEventListener('mousedown', ()=>{
    counterBtn.style.transform = 'translateY(4px)';
});
counterBtn.addEventListener('mouseup', ()=>{
    if(counter < 45){
        counter++
    }else{
        counter = 0;
    }
    counterNumber.innerText = counter; 
    counterBtn.style.transform = 'translateY(0px)';
});
counterBtn.addEventListener('mouseleave', ()=>{
    counterBtn.style.transform = 'translateY(0px)';
});