let button = document.querySelector("button");
button.addEventListener('click',function(){
    let password =document.getElementById("password");
    let confirmation =document.getElementById("confirmation");
    if(password.value != confirmation.value){
        password.style.border='2px blue solid';
        confirmation.style.border='2px blue solid'; 
    }
    else {
        password.style.border='none';
        confirmation.style.border='none';
    }
});

