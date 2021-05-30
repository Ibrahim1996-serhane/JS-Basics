
btn_reset.addEventListener('click', () => {
    let name = document.querySelector('#name');
    let surname = document.querySelector('#surname');
    let city = document.querySelector('#city');
    let reset = document.querySelector('#reset');
    if(confirm("press enter to reset the info")){
        name.value = '';
        surname.value = '';
        city.value = '';
    }
});

