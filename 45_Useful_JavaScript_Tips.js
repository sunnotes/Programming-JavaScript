//http://flippinawesome.org/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/

console.log([ 10 ] === 10); // is false

var flag;
if ([ 10 ] === 10) {
	flag = 'eq';
} else {
	flag = 'noteq';
};






function getCategory(age) {  
    var category = "";  
    switch (true) {  
        case isNaN(age):  
            category = "not an age";  
            break;  
        case (age >= 50):  
            category = "Old";  
            break;  
        case (age <= 20):  
            category = "Baby";  
            break;  
        default:  
            category = "Young";  
            break;  
    };  
    return category;  
}  
var res =getCategory(5);  // will return "Baby"

res
// is false
// [10] == 10 // is true
// '10' == 10 // is true
// '10' === 10 // is false
// [] == 0 // is true
// [] === 0 // is false
// '' == false // is true but true == "a" is false
// '' === false // is false
