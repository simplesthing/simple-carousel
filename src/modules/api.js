const Flicker = require('../../node_modules/flickrapi/browser/flickrapi')
const flickr = new Flickr({api_key: '4f909c5048c2d990084b01f981c302d9'})

export default class Api {

  placeId(place) {
   return new Promise((resolve, reject) => {
     flickr.places.find({
        query: place
      }, (err, result) => {
        if(err){
          reject(err)
        } else {
          resolve(result.places.place[0].place_id)
        }
      })
   })
  }

  photos(placeId) {
    return new Promise((resolve, reject) => {
      flickr.photos.search({
        place_id: placeId,
        safe_search: 1,
        per_page: 10 // limit the number of items for better UX
      }, (err, result) => {
        if(err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

}


