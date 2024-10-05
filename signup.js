function checkform(){
    if(document.getElementById("un").value == 'netflix@gmail.com' && document.getElementById("pw").value == 'admin123' ){
      window.location.href=("https://www.netflix.com/");  
      alert("Login Successful");
        
    }else{
        alert("Access denied. Valid username and password is required.");
        return;
    }

  }
  
  
      





