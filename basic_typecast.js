document.write("<br/>"+Number("3.14787868"));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number("99 88"));
//THe toexponential()method//
let numexp=3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));
//The toprecision()method//
let numPrec=3.14;
document.write("<br/>"+numPrec.toPrecision(1));
document.write("<br/>"+numPrec.toPrecision(2));
document.write("<br/>"+numPrec.toPrecision(4));
document.write("<br/>"+numPrec.toPrecision(6));
//the tofixed()//
let numfixed=3.14;
document.write("<br/>"+numfixed.toFixed(1));
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));
//Max value//
document.write("<br/>"+Number.MAX_VALUE);
//minimum value//
document.write("<br/>"+Number.MIN_VALUE);
//positive number//
document.write("<br/>"+Number.POSITIVE_INFINITY);
//negative number -1/ 0;//
document.write("<br/>"+Number.NEGATIVE_INFINITY);


//ParseInt()//
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt(" years is:10"));
//parsefloat//
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 years"));
//date-year,month,day,hour,minutes,seconds,milliseconds//
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018,11,24,10,33,30,0));
document.write("<br/>"+new Date ("October 13,2014 11:13:00"));

var d=new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());
