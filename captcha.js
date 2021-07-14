
// var submit_Button = document.querySelector("button");
// var elements = document.querySelectorAll(".element");
// var box = document.querySelector("checkbox");

// // if statement
// elements.forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.id === fruit[random]) {
//       checkbox.checked = true;
//       submit_Button.disabled = false;
//       submit_Button.classList.remove("btn-default");
//       submit_Button.classList.add("btn-success");
//     } else {
//       alert("Please Verify you are human");
//       location.reload(true);
//     }
//   });
// });

// $( "#captchaForm" ).click(function() {
//   alert( "Handler for .submit() called." );
// });



function validate()
{

  var checked = 0;
  
  var tblfruits = document.getElementById("tblfruits");
  var chks = document.getElementsByClassName("checkbox");
  
 
  for(var i=0; i<=8; i++){

    if(chks[i].checked && chks[i].id == fruit[random]){
      
      checked++;
      
    }
  }
console.log(checked);
  
  if(checked < 3){
    alert("refresh the page and select 3 appropriate pictures");
    return false;
    location.reload(true);
  }
  else{
    
    return true;
  }
}

