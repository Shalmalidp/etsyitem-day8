(function(){

/////////////////HELPFUL CODE TIPS/////////////////
// console.log(items.length);                    //
// items.forEach(function(item){                 //
// console.log(item.price);                      //
// });                                           //
// you can search on one field and return another//                          //     
//  var prices = items.map(function(item){       //
// return item.price;                            // 
//return item.price +" "+ item.title             //
///////////////////////////////////////////////////



//******************* PROBLEM 1**********************

var prices = items.map(function(item){
return item.price;
});
//console.log(prices);

var sum = prices.reduce(function(prev, next){

return prev+next;

})
//console.log(sum);
var avg = sum/prices.length;
//console.log(avg);


//Conver it to 2 decimal places
var converted = avg.toFixed(2);
//console.log(converted);

// make it a string
var str = "The average price is $" +converted;

//make it show on the page
//find out answer element
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);
answer1.appendChild(textNode);


//*************** PROBLEM 2 **********************
var myarrayfilter=[];

var prices2 = items.filter(function(item){ 
 if (item.price >14 && item.price <18){
      myarrayfilter.push(item.title);
    }
});
//console.log(myarrayfilter);

//make it show on the page
//find out answer element
var answer2 = document.querySelector('#answer2');

myarrayfilter.forEach(function(x){ 
var textNode = document.createTextNode(x);
//adding line break so textNode does not display as string
var linebreak = document.createElement('br');
answer2.appendChild(textNode);
answer2.appendChild(linebreak);

});



//*************** PROBLEM 3 ***********************
//which item has currency code GBP
var cur_C;
var c_Code = items.filter(function(item){

if (item.currency_code=="GBP"){
    //console.log(item.title + " " + item.price);
  cur_C = item.title + " " + item.price;
}

}); //console.log(cur_C);

//var char="£";
var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(cur_C);
answer3.appendChild(textNode);

//*************** PROBLEM 4 ***********************
var wood;

var woody=  items.filter(function(item){

return item.materials.indexOf('wood' || 'wooden') !== -1 ;

}); 


var answer4 = document.querySelector('#answer4');
//var linebreak = document.createElement('br');

woody.forEach(function(x){
var textNode = document.createTextNode(x.title);
var linebreak = document.createElement('br');
answer4.appendChild(linebreak);
answer4.appendChild(textNode);
answer4.appendChild(linebreak);
});




//*************** PROBLEM 5 ***********************
var material=[];
var mat_count;

var materials = items.filter(function(item){
   if (item.materials.length >= 8){
    //console.log(item.title +" "  +item.materials +" "+ item.materials.length);
        material.push(item);
   };
});
var answer5 = document.querySelector('#answer5');


material.forEach(function(x){
  mat_count = x.materials.length;
  //console.log(x.materials.length);
  var str = "has " + mat_count + " " + "materials:"
  var textNode1 = document.createTextNode(x.title);
  var textNode2 = document.createTextNode(str);
  var linebreak=document.createElement('br');
  var textNode3, librk;
  answer5.appendChild(textNode1);
  answer5.appendChild(linebreak);
  answer5.appendChild(textNode2);
  answer5.appendChild(linebreak);
  x.materials.forEach(function(y){
     textNode3 = document.createTextNode(y);
     librk=document.createElement('br');
     answer5.appendChild(textNode3);
     answer5.appendChild(librk);
  });
});



//*************** PROBLEM 6 ***********************

var count=[];
var total;
var seller = items.filter(function(item){
if(item.who_made==="i_did"){
  count.push(item.who_made);

}
}); 
total =count.length;

// make it a string
var str = total + " "+ "were made by sellers" ;

//make it show on the page
//find out answer element
var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(str);
answer6.appendChild(textNode);





////////////////IIFE BRACKETS DO NOT TOUCH }());//////////
}());
