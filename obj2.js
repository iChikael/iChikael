// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = prompt("What do you want to know about the user?", "name");

//   // access by variable
//   alert( user[key] ) ; // John (if enter "name")

// these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };

// console.log( obj.for + obj.let + obj.return );


// var user = {
//     name: "John",
//     surname: "Smith"
// };
// user.age = 20;

// for(let prop in user){
//     console.log(prop);
// }

// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log(clone.name);
// console.log(user.name);

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  console.log( user.sizes === clone.sizes ); // true, same object
 
  user.sizes.width = 60;    // change a property from one place
  console.log(clone.sizes.width); // 60, get the result from the other one

