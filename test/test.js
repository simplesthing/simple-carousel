const assert = require('assert')
const api = require('../src/modules/api')


// Cannot run tests against the flickr api w/o
// configuring selenium because window is not defined
//
// describe('Places', function(){
//   describe('getPlaceId', function () {
//     it('should return a place id for Seattle', function(){
//     var p = new Promise(function(resolve, reject){
//       flickr.places.find({
//         query: "Seattle"
//       }, function(err, result){
//         if(err) {
//           reject()
//         } else {
//           resolve(result)
//         }
//       })
//       p.then(function(result){
//         assert.equal('uiZgkRVTVrMaF2cP', result.places.place[0].place_id)
//       })
//     })

//     })
//   })
// })
