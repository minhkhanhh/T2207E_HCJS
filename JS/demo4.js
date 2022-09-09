function demoEvent(){
var flag = false
    if(flag == false){
        var h = document.getElementById ("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag = true;
    }
}
var x=0;
function changeText(){
    var h = document.getElementById("heading");
    h.style.transform="rotate("+x+"deg)";
    x++;
}
function inputsearch(obj) {
//  var ix = document.getElementById(id);
    console.log("Searching: " + obj.value);
}
function demoEvent2(){
 //   var ips = document.getElementsByTagName("input");//array
 //   var ips = document.getElementsByClassName("input-text");//array
      var ips = document.querySelectorAll("input.input-text[type=text]");//array

    for (var i=0;i<ips.length;i++){
        ips[i].style.backgroundColor = "pink";
    }
}