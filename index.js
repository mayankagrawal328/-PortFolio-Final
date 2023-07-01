button1();

document.getElementById ("button1").addEventListener ("click", button1);
function button1(){
  if(screen.width > 420){
    document.getElementById ("job").style = "margin: 10% 0%;"
    document.getElementById ("job1").style = "padding-left: 22%;"
    document.getElementById ("job2").style = "padding-left: 22%;"
  
  }
  else{
    document.getElementById ("job").style = "margin: 10% 0%;"
    document.getElementById ("job1").style = "padding-left: 2%;"
    document.getElementById ("job2").style = "padding-left: 2%;"
  
  }

  document.getElementById ("list1").style = "visibility:visible;"
  document.getElementById ("list2").style = "visibility:collapse;"
  document.getElementById ("edu").style = "display:none"
  document.getElementById ("button1").style="box-shadow: 0 12px 16px 0 rgb(0, 0, 0),0 17px 50px 0 rgb(0, 0, 0)"
  document.getElementById ("button2").style="box-shadow: 0"
  document.getElementById ("button3").style="box-shadow: 0"
  
}
  
document.getElementById ("button2").addEventListener ("click", button2);
function button2(){
  document.getElementById ("list1").style = "visibility:collapse;"
  document.getElementById ("list2").style = "visibility:visible;"
  document.getElementById ("edu").style = "display:none"
  document.getElementById ("button2").style="box-shadow: 0 12px 16px 0 rgb(0, 0, 0),0 17px 50px 0 rgb(0, 0, 0)"
  document.getElementById ("button1").style="box-shadow: 0"
  document.getElementById ("button3").style="box-shadow: 0"
}
  
document.getElementById ("button3").addEventListener ("click", button3);
function button3(){
  document.getElementById ("list1").style = "visibility:collapse;"
  document.getElementById ("list2").style = "visibility:collapse;"
  document.getElementById ("edu").style = "display:block"
  document.getElementById ("button3").style="box-shadow: 0 12px 16px 0 rgb(0, 0, 0),0 17px 50px 0 rgb(0, 0, 0)"
  document.getElementById ("button1").style="box-shadow: 0"
  document.getElementById ("button2").style="box-shadow: 0"
}
  
document.getElementById ("contacta").addEventListener ("click", contact);
function contact(){
  document.getElementById ("contacta").style="color: #ff0000;"
  document.getElementById ("abouta").style="color: #ffffff;"
  document.getElementById ("homea").style="color: #ffffff;"
}

document.getElementById ("abouta").addEventListener ("click", about);
function about(){
  document.getElementById ("abouta").style="color: #ff0000;"
  document.getElementById ("contacta").style="color: #ffffff;"
  document.getElementById ("homea").style="color: #ffffff;"
}

document.getElementById ("homea").addEventListener ("click", home);
function home(){
  document.getElementById ("homea").style="color: #ff0000;"
  document.getElementById ("contacta").style="color: #ffffff;"
  document.getElementById ("abouta").style="color: #ffffff;"
}


window.addEventListener("scroll", function(){
  let topNav = document.getElementById("topNav");
console.log(window.pageYOffset)
if(window.pageYOffset > 220){
  about();
}
if(window.pageYOffset > 780){
  contact();
}
if(window.pageYOffset < 220){
  home();
}
});
if(window.pageYOffset < 220){
  home();
}