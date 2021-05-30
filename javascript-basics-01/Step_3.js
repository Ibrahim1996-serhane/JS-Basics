
function showAlert() {
    var person = prompt("Please enter your name:", "bob");
  if ( person  != "")
      alert("Hello " +  person );

  else if ( person  == null ) {
      alert("User cancelled the prompt.")
  }
}
