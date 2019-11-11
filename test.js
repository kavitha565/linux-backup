onmessage = function(e){ // this method is used to receive data from post message 
    if(e.data.addData){
        postMessage({result : e.data.addData.num1+e.data.addData.num2}) //do some operatin and send result to UI
    }
}
var myWorker = new Worker("worker.js");
myWorker.postMessage({
    data:"hii"
})
myWorker.onmessage = function(e){
    console.log(e.data.result);
}