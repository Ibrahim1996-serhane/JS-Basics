let green = document.querySelector(".green");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let text = document.querySelector('#text');
document.addEventListener('click',event=>{
    if(event.target==green){
        text.style.color='green';
    }
    else if(event.target==red){
        text.style.color='red';
    }
    else {
        text.style.color='blue';
    }
})
