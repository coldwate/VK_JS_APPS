//var h = 12;
var h = parseInt(prompt("Kotorii Chas?:",''));
//var m = 18;
var m = parseInt(prompt("Skol'ko minut?:",''));
var s = 0;
var x=250;//x0=500/2
var y=250;//y0=500/2


var i = 0;
var j = 0;
var k = 0;
//alert("000");


function chasysf()
{
s+=1;

if (s>=60){s=0;m+=1;
if (m>=60){m=0;h+=1;
if (h>=24){h=0;}
}
}


sect.value=s;
min.value=m;
hr.value=h;
t=setTimeout('chasysf()',10);//500ms
t=setTimeout('grafikaf()',10);//500ms
}



function grafikaf()
{
var drawingCanvas=document.getElementById('cnv');
if (drawingCanvas&&drawingCanvas.getContext)
{
var context=drawingCanvas.getContext('2d');
context.strokeStyle="#000";

context.fillStyle="#fc0";//dashed
context.beginPath();


//hours selector
context.moveTo(x/2,y/2);// A(0;0) = A(x0,y0)
context.lineTo(x/2-75*Math.sin(-Math.PI/180*30*h),y/2-75*Math.cos(-Math.PI/180*30*h));//A(1;1) = A(x0,y0-100)

//minutes selector
context.moveTo(x/2,y/2);// A(0;0) = A(x0,y0)
context.lineTo(x/2-90*Math.sin(-Math.PI/180*6*m),y/2-90*Math.cos(-Math.PI/180*6*m));//A(1;1) = A(x0,y0-100)

//seconds selector
context.moveTo(x/2,y/2);// A(0;0) = A(x0,y0)
context.lineTo(x/2-100*Math.sin(-Math.PI/180*6*s),y/2-100*Math.cos(-Math.PI/180*6*s));//A(1;1) = A(x0,y0-100)


//***
//context.moveTo(x/2,y/2);// A(0;0) = A(x0,y0)
//context.lineTo(x/2-200*Math.sin(-Math.PI/180*6*s),y/2-200*Math.cos(-Math.PI/180*6*s));//A(1;1) = A(x0,y0-100
//***

context.fillStyle="#ddd";
context.fillRect(0,0,500,500);//A(1;1) = A(x0,y0-100)

//hours label
//context.strokeText(h,100,100);// hours
context.strokeText(h,(x/2-85*Math.sin(-Math.PI/180*30*h)),(y/2-85*Math.cos(-Math.PI/180*30*h)));


//minutes label
//context.strokeText(m,100,100);// minutes
context.strokeText(m,(x/2-100*Math.sin(-Math.PI/180*6*m)),(y/2-100*Math.cos(-Math.PI/180*6*m)));


//secundi label
//context.strokeText(s,100,100);// secundi

//SECONDS--->context.strokeText(s,(x/2-105*Math.sin(-Math.PI/180*6*s)),(y/2-105*Math.cos(-Math.PI/180*6*s)));


context.closePath();
context.stroke();

//draw circle
context.beginPath();
//context.moveTo(x/2,y/2);// A(0;0) = A(x0,y0)
//context.arc(x/2,y/2,220,0,Math.PI*2,true);
context.arc(125,125,115, 0, 2 * Math.PI, false);
context.closePath();


//metki verx 12
context.moveTo(x/2,y/2-100);// 
context.lineTo(x/2,y/2-90);//

//metki niz 6
context.moveTo(x/2,y/2-(-1)*100);// 
context.lineTo(x/2,y/2-(-1)*90);//

//metki bok 3
context.moveTo(x/2-(-1)*100,y/2);// 
context.lineTo(x/2-(-1)*90,y/2);//

//metki bok 9
context.moveTo(x/2-100,y/2);// 
context.lineTo(x/2-90,y/2);//

//metki bok ?
//context.moveTo(x/2-(-100)*Math.sin(-Math.PI/6),y*0.75);// 
//context.moveTo(x/2-(-90)*Math.sin(-Math.PI/6),y*0.75);// 





context.stroke();
}
//DrawSquareT();
}
