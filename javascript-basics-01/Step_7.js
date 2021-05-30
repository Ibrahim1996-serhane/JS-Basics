function Multiple_operations(shoe_size , year) {
var shoe_size = parseFloat(document.getElementById('shoe_size').value);
var year= parseFloat(document.getElementById('year').value);
var result =(((((shoe_size * 2) + 5) * 50) / year) + 1766);
alert("result:  " +result +"\n");

}