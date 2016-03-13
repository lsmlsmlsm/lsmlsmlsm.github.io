//alert("hello")
//confirm("confirm")
//prompt("type you message here")

//var
//if()

/*var x = prompt ("Input your age")

if(x>=18){
  alert ("adult")
}else{
  alert ("kid")
}
*/

var button1= document.getElementById("button1");

button1.onclick = function(){
  var display = $(badge).css("display");
  //alert(display);
  if(display=="none")
    $("#badge").fadeIn("slow");
  else
    $("#badge").fadeOut("slow");
  }