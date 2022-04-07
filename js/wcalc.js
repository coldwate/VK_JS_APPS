var x = 0;

//fer example 
//etalon wei  80 kg = 100% 
//myown wei   72 kg = x%
//            x = 72*100/80      
//x = correction coefficient  

var wonmercury = 30.2;
var wonvenus = 72.5;
var wonmoon = 13.2;
var wonmars = 30.1;
var wonupiter = 189.1;
var wonsaturn = 73.2;
var wonuran = 71.1;
var woneptun = 90;
var wonpluton = 5.36;
var wonsun = 2165.7;

var mymercuryweight = 0;
var myvenusyweight = 0;
var mymoonweight = 0;
var mymarsweight = 0;
var myupiterweight = 0;
var mysaturnweight = 0;
var myuranweight = 0;
var myneptunweight = 0;
var myuranweight = 0;
var myplutonweight = 0;
var mysunweight = 0;

function inputf()
{
    inpweight.value = prompt("Каков ваш вес?",'');
    if ((inpweight.value > 0) && (inpweight.value < 300) )//&& !(isNan(inpweight.value))
    {
        //alert("caculating...");
        wcalcf();
    }
    else{
        alert("Please try again");
        inpweight.value = 0;
        inputf();
        }

}

function wcalcf()
{
x = (inpweight.value*100)/80;
mymercuryweight = (x*wonmercury)/100;
//alert("on Mercury " + (k*30.2)/100);
wmercury.value = mymercuryweight;

myvenusyweight  = (x*wonvenus)/100;
//alert("on Mercury " + (k*30.2)/100);
wvenus.value = myvenusyweight;

mymoonweight  = (x*wonmoon)/100;
//alert("on Mercury " + (k*30.2)/100);
wmoon.value = mymoonweight;

mymarsweight  = (x*wonmars)/100;
//alert("on Mercury " + (k*30.2)/100);
wmars.value = mymarsweight;

myupiterweight  = (x*wonupiter)/100;
//alert("on Mercury " + (k*30.2)/100);
wupiter.value = myupiterweight;
//alert("it works");

mysaturnweight  = (x*wonsaturn)/100;
//alert("on Mercury " + (k*30.2)/100);
wsaturn.value = mysaturnweight;

//alert("it works");
myuranweight  = (x*wonuran)/100;
//alert("on Mercury " + (k*30.2)/100);
wuran.value = myuranweight;

//alert("it works");
myneptunweight  = (x*woneptun)/100;
//alert("on Mercury " + (k*30.2)/100);
wneptun.value = myneptunweight;

//alert("it works");
myplutonweight  = (x*wonpluton)/100;
//alert("on Mercury " + (k*30.2)/100);
wpluton.value = myplutonweight;

//alert("it works");
mysunweight  = (x*wonsun)/100;
//alert("on Mercury " + (k*30.2)/100);
wsun.value = mysunweight;


}