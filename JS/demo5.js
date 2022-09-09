function update(city){
    var bg =document.getElementById("bg-fade");//1
    bg.style.display="block";//1

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        //console.log(this.responseText)  ;
        // convert to object of js
        var data = JSON.parse(this.responseText);
        //console.log(data.main.temp);
        var t = data.main.temp;//26
        var x1 = document.getElementById("temp");
        x1.innerText=t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pr = data.main.pressure;
        document.getElementById("press").innerText = pr;

        bg.style.display="none";//1
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric ";
    xhttp.open("get",link,true);
    xhttp.send();
}
