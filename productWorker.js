function checkPrice(data){
    var filteredObj = [];
    for(var i=0;i<data.length;i++){
        if(data[i].price>1000){
            filteredObj.push(data[i])
        }
    }
    return filteredObj;
}
function getData(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        dataObj = JSON.parse(this.responseText);
            postMessage(checkPrice(dataObj));
        }
    }
    xhttp.open("GET","http://localhost:4000/api/getData");
    xhttp.send();
}
onmessage = function(){
    getData();
    setInterval(()=>{
        this.getData();
    },5000);
}
//console.log(this); // this in worker.js is Dedicated worker global scope consists of methods like postMesssage, onmessage etc.,
