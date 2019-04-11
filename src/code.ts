import {Observable} from 'rxjs/Observable';


var observable=Observable.create((observer:any)=>{
    observer.next("hi i'm");
    setInterval(()=>{
        observer.next("Set Interval")
    },1000);
});

var observer=observable.subscribe(
    (data:any)=> addItem(data+"--1"),
    (err)=> addItem("error"),
    (complete)=> addItem("completed")
);

var observer=observable.subscribe(
    (data:any)=> addItem(data+"--2")
);

setTimeout(()=>{
    observable.unsubscribe();
},5000);


function addItem(val:any){
    var node=document.createElement("li");
    var textNOde=document.createTextNode(val);
    node.appendChild(textNOde);
    document.getElementById("output").appendChild(node);
}

