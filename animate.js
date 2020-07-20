
const totalPaths= document.querySelectorAll('#svgtriangle path');
var op=0.4;
const x= document.getElementsByClassName('cls-1');
for(let i=0;i<totalPaths.length;i++){
    x[i].style.opacity= op;
    op=op+0.02;
    console.log(op);
}

