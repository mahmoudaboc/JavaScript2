let form = document.getElementById("form")
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let input = document.getElementById("input");



let button = document.getElementById("button1");
button.addEventListener("click", xmlHttpFunc);


function xmlHttpFunc () {  
    let url = 'https://api.github.com/orgs/HackYourFuture/repos';
    let xmlHttp = new XMLHttpRequest();   //Create XMLHttpRequest
    xmlHttp.open("GET", url, false);     //link it to api link .
      xmlHttp.onload = function (){
      if (xmlHttp.status === 200 && xmlHttp.readyState === 4){
          let repos = JSON.parse(xmlHttp.response);
          html1(repos);
        }
      }    
      xmlHttp.send(); // send    
}



function html1 (data) {
    for ( let i in data){
        
        div2.innerHTML += "<br>"+"<a href ='"+data[i].html_url+"'>"+ data[i].name+"</a>"+"<br>";
    }
}





//2


let button2 = document.getElementById("button2");

button2.addEventListener("click", xmlHttp2);



function xmlHttp2 () {
    let apiLink = 'https://api.github.com/repos/HackYourFuture/';
    let repoName = input.value;
    let url = apiLink + repoName;
    
    let xmlHttp = new XMLHttpRequest();   //Create XMLHttpRequest
    xmlHttp.open("GET", url, false);     //link it to api link .
    xmlHttp.send(); // send  
    if (xmlHttp.status === 200 && xmlHttp.readyState === 4){
        let repos = JSON.parse(xmlHttp.response);   
        html2(repos);
        }
    else {
        alert("Please Write Good Repository Name for this search !")
    }
    
};

function html2 (data){
        div3.innerHTML += "<br>"+"Repository Name:  " + data.name +"<br>"+ "Repository Description:  " + data.description +"<br>"+ "Stargazers Count:  " + data.stargazers_count +"<br>"+ "Watchers Count:  " + data.watchers_count +"<br>"+  " Languag:  " + data.language +"<br>" +"Forks:  " + data.forks;
}






//3


let button3 = document.getElementById("button3");

button3.addEventListener("click", xmlHttp3);

function xmlHttp3 () {
    let apiLink = 'https://api.github.com/repos/HackYourFuture/';
    let cont = '/contributors';
    let linkName = input.value;
    let url = apiLink+linkName+cont;
    let xmlHttp = new XMLHttpRequest();   //Create XMLHttpRequest
    xmlHttp.open("GET", url, false);     //link it to api link .
    xmlHttp.send(); // send  
    let repos = JSON.parse(xmlHttp.response);
    
    if (xmlHttp.status === 200 && xmlHttp.readyState === 4){
        for (let i in repos){
        
            div4.innerHTML +="<br>"+"<a href = '"+repos[i].html_url+"'>"+repos[i].login+"</a>"+"<br>";
        }           
    }
    else {
        alert("Please Write Good Repository Name First to see the Contributors ! ");
    }
}

