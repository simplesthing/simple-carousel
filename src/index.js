import Carousel from './modules/carousel'

// check for a query param
const uri = window.location
// set place from url or use default
const place = uri.search ? decodeURI(uri.search.split('=')[1]) : 'Seattle'

const carousel = new Carousel()
carousel.init(place, 'container')
