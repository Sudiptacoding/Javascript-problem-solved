// // Foot to Mile convat.
function feetToMile(inputFeet){
    var mile=inputFeet*0.000189394;
    return mile;
 }
var result=feetToMile(1000);
console.log(result);



// // WoodCalculater.
function woodCalculator(tables,cheyars,khats){
    var table=tables*1;
    var cheyar=cheyars*3;
    var khat=khats*5;
    var total=(table+cheyar+khat);
    return total;
    }
var input=woodCalculator(1,24,4);
console.log( "Total Cubic Wood :", input); 



// // brickCalculator.
function brickCalculator(n){
    if(n>=1&&n<=10){
        var total=n*15;
        var total1 =total*1000;
        return total1;
      }
    else if(n>=11 && n<=20){
        var some=n-10;
        var total2=some*12;
        var total3=total2*1000;
        return total3+150000;
    }  
    else if(n>20) {
        var some1=n-20
        var total4=some1*10;
        var total5=total4*1000;
        return total5+120000+150000;
    }
 }
var output=brickCalculator(18);
console.log(output);


// tinyFriend

var nam=[12,22,33,444,55,666]
var result=nam[0];
for( var i=0; i<nam.length ;i++){
    var element=nam[i];
      if(element>result){
          result=element;
      }
}
console.log(result);

// tinyFriend 2
function data(str){
    var show = str.split(" ");
     show.sort(function (a,b){
         return b.length - a.length; 
     })
     return show[0];
}
console.log(data(str = "ssssss","ww","dfasdasdasd"));


// Animal count
function distensww(distens){
    var animal=0;
if(distens<=10){
    animal=distens*50;
}
else if(distens<=20){
    var firstpart=10*50;
    var deep=distens-10;
    var secendPart=deep*100;
    animal=firstpart+secendPart;
}
else{
    var firstpart=10*50;
    var secendPart=10*100;
    var deep1=distens-20;
    var thirdPart=deep1*300;
    animal=firstpart+secendPart+thirdPart;
}
return animal;
}
var result=distensww(22);
console.log(result)


