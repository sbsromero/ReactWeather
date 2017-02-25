// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Colombia', function (err, temp){
//   if(err){
//     console.log('error',err);
//   }
//   else{
//     console.log('sucess', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve (79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Colombia').then(function (temp){
//   console.log('Promise success', temp);
// },function(err){
//   console.log('Promise Error', err);
// });

function addPromise (a,b){
  return new Promise(function (resolve, reject){
    if(typeof a == 'number' && typeof b == 'number'){
      resolve(a+b);
    }
    else{
      reject('A o B No son numeros');
    }
  });
}

addPromise(2,6).then(function(res){
  console.log('Promise Sucess', res);
},function(err){
  console.log('Promise Error',err);
});
