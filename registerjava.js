function register()
        {
            var instagram=document.getElementById("instagram");
            var facebook=document.getElementById("facebook");
            var whatsapp=document.getElementById("whatsapp");
            var snapchat=document.getElementById("snapchat");

            if(instagram.checked==true)
              alert("Wow you like "+instagram.value);
            else if(facebook.checked==true)
              alert("Wow You like "+facebook.value);
            else if(whatsapp.checked==true)
              alert("Wow you like "+whatsapp.value);
            else if(snapchat.checked==true) 
              alert("wow You like "+snapchat.value);      
        }



function add()
{
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var sum = parseInt(num1) + parseInt(num2);
  alert("Addition : "+sum );
}

function sub(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;

  var sub = num1 - num2;
  alert("Substraction : "+sub);
}

function mul(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var mul=num1*num2;
  alert("Multiplication : "+mul);
}

function div(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var div=num1/num2;
  alert("Division : "+div);
}