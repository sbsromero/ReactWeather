 var names = ['Sebas','Daniela','Arnobis'];
//
// names.forEach(function (name){
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Sebas'));
//
// var person = {
//   name: 'Sebas',
//   great: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.great();

function sumar(a,b) {
  return a+b;
}

var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(4,7));

var addExpresion = (a,b) => a+b;
console.log(addExpresion(3,-2));
