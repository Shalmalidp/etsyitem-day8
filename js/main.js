(function(){

// console.log(items.length);
// items.forEach(function(item){
// console.log(item.price);

// });

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
//return item.price +" "+ item.title

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


//*************** PROBLEM 2 ***********************
// var myarrayfilter=[];

// var prices2 = items.map(function(item){ 
//  if (item.price >14 && item.price <18){
//       myarrayfilter.push myitem.title;
//     }
// });
// console.log((prices2));


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
answer2.appendChild(textNode);
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

// var wood;

// var wooden=items.filter(function(item){
//  if (item.description =='wood')
//   wood = item.description;
// });console.log(wood);

//*************** PROBLEM 5 ***********************
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
