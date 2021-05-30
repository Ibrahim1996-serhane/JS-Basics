function Age(age) {
var age = parseFloat(document.getElementById('age').value);
if (age >"18")
    alert("you are over 18"+"\n"+"and you're age is :  " +age +"\n");

else if (age < "18") {
    alert("you are under 18"+"\n"+"and you're age is :  " +age +"\n");
}
}
