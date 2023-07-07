//for each loop

// array decleration 1
var a=[];
a=["ankit","kumar","gupta"];
a[3]="hello";

// array decleration 2
var b=new Array();
b=["red","black","blue"];

// b.forEach(colr);
// function colr(item){
//     document.getElementById("loop").innerHTML=item;
//    document.write(item+"<br/>");
// }

for (var i = 0; i < b.length; i++) {
    //document.getElementById("loop").innerHTML=b[i];
    document.write(b[i]+"<br/>");
    
}
