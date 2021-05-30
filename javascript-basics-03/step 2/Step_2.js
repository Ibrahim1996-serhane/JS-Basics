let text = document.querySelector('#texte');
document.addEventListener('click',event=>{
    if(event.target==show){
        text.style.display='block';
    }
    else if(event.target==hide){
        text.style.display='none';
    }
                         })