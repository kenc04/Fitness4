const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
qty = document.querySelector(".qty");

let a = 1;

plus.addEventListener("click", ()=>{
    if(a < 10){
        a++;
        qty.innerText = a;
    }
});

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        qty.innerText = a;
    }
});