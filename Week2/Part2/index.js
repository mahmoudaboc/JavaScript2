//to change temperature from Fahrenheit to Celsius ,add &units=metric to the link

let api ='https://api.openweathermap.org/data/2.5/weather?q='; //https
let city = "Amsterdam";
let appId = '&APPID=1f15a358e3d1653781dd78c383b34d0e&units=metric';

let input = document.getElementById("input");  //link it to 

let div = document.createElement("div");
div.setAttribute("id","div");
document.body.appendChild(div);

let h3 = document.createElement("h3")
document.body.appendChild(h3);
h3.setAttribute("id", "text");
h3.innerHTML= "Write City Name Here";


function weatherask () {  
  let url = api+input.value+appId;
    let xmlHttp = new XMLHttpRequest();   //Create XMLHttpRequest
    xmlHttp.open("GET", url, false);     //link it to api link .
    xmlHttp.send(); // send  
    let weatherData = JSON.parse(xmlHttp.response); 
    
    div.innerHTML =  "The City " + weatherData.name +"<br>"+ "The Country Code is " + weatherData.sys.country +"<br>"+"Weather Description is   " + weatherData.weather[0].description +"<br>"+ "The temperature is  "+ weatherData.main.temp + " C"+"<br>"+ "The wind speed is  "+ weatherData.wind.speed ;
}

let buttonEL = document.getElementById("demo");
buttonEL.innerHTML="Click here to see the Weather"
buttonEL.addEventListener("click", weatherask);

let img = document.createElement("img");
document.body.appendChild(img)
img.setAttribute("id", "img");
img.setAttribute("src", "images/pic2.png")

