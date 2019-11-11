function getData(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            dataObj = JSON.parse(this.responseText);
            postMessage(dataObj);
        }
    }
    xhttp.open("GET","http://localhost:4000/api/getMatchData");
    xhttp.send();
}
this.onmessage = function(){
    getData();
    setInterval(()=>{
        this.getData();
    },5000);
}