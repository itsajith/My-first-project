function login(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    if(name==""){
        alert("Enter the required details first");
        return false;
    }
    else if(email==""){
        alert("Enter the required details first");
        return false;
    }
    else if(pass==""){
        alert("Enter the required details first");
        return false;
    }
    else{
      localStorage.setItem("name", name);
      localStorage.setItem("pass", pass);
      alert('Your account has been created');
    }
}


function check()
{
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pass');

    var uname = document.getElementById('uname');
    var upass = document.getElementById('upass');

    if(uname.value == storedName && upass.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
        return false;
    }
}
