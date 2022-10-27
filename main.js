let counterBtn = document.querySelector('.btn-count');
let resetBtn = document.querySelector('.btn-reset');
let counterNumber = document.querySelector('.counter__number');

let counter = 0;

counterBtn.addEventListener('click', ()=>{
    if(counter < 45){
        counter++
    }else{
        counter = 0;
    }
    counterNumber.innerText = counter; 
});

resetBtn.addEventListener('click', ()=>{
    counter = 0;
    counterNumber.innerText = counter; 
});



animateBtn(counterBtn)
animateBtn(resetBtn)

function animateBtn(btn){
    btn.addEventListener('mouseup', ()=>{
        btn.style.transform = 'translateY(0px)';
    });

    btn.addEventListener('mousedown', ()=>{
        btn.style.transform = 'translateY(4px)';
    });
    
    btn.addEventListener('mouseleave', ()=>{
        btn.style.transform = 'translateY(0px)';
    });

    btn.addEventListener('touchstart', ()=>{
        btn.style.transform = 'translateY(4px)';
    });

    btn.addEventListener('touchend', ()=>{
        btn.style.transform = 'translateY(0px)';
    });
}