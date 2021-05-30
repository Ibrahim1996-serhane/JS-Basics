
let img_1= document.querySelector('#image1');
let img_2= document.querySelector('#image2');
let img_3= document.querySelector('#image3');
let img_4 = document.querySelector('#image4');
let img_5= document.querySelector('#image5');

document.addEventListener('mouseover', event => {
  if (event.target == img_1 ) {
    img_1.src = "images/image1_2.jpg";
  }
  else if(event.target==img_2){
    img_2.src="images/image2_2.jpg";
  }
  else if(event.target==img_3){
    img_3.src="images/image3_2.jpg";
  }
  else if(event.target==img_4){
    img_4.src="images/image4_2.jpg";
  }
  else if(event.target==img_5){
    img_5.src="images/image5_2.jpg";
  }
})