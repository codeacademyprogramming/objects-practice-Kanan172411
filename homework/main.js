//TASK 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user["name"];


//TASK 2
function isEmpty(myobj) {
    for (key in myobj) {
      return false;
    }
    return true;
}


//TASK 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let sumOfSalaries = 0;
for (key in salaries) {
    sumOfSalaries += salaries[key];
  }
console.log(sumOfSalaries);


//TASK 4 
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu)
function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyByTwo(menu)
console.log(menu)

