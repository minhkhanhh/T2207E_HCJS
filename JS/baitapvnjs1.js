function loadingWeather(){
    var xHttp = new XMLHttpRequest();
    xHttp.onload = function (){
        var data = JSON.parse(this.responseText)
        var all =data.list;
        for(var i=0;i<all.length;i++){
            var date= all[i].dt_txt;
            var tp = all[i].main.temp;
            var ic = all[i].weather;
            for(var j=0; j<ic.length;j++){
                var image = ic[j].icon;
                var dr = ic[j].description;

                console.log(all[i].weather.icon);
                var content = `<div class="main">
                      <h2><span class="datetime">${date}</span></h2>
                      <span><img src="http://openweathermap.org/img/wn/${image}@2x.png"/></span>
                      <h1><span class = "temp">${tp}</span><sup>o</sup>C</h1>
                      <h3><span class = "des">${dr}</span></h3>
                      </div>`;
                var div = document.getElementById("all");
                div.innerHTML += content;
            }

        }
    }
    xHttp.open("GET","http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xHttp.send();
}
loadingWeather();