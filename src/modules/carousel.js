import Api from './api'

const transition = `transition: left 750ms ease;`

class Carousel {

  constructor() {
    this.width = 100
    this.length = 0
    this.left = 0
  }

  transitionComplete() {
    const carousel = document.getElementById('carousel_list')
    var newStyles
    let styles = carousel.getAttribute('style').split(';')
    // remove transition transform style
    newStyles = styles.slice(0,2)
    carousel.style = styles.join(';')
    // reset list position
    if(this.left === 100) {
      newStyles = styles.slice(0,1)
      let move = (this.length -1) * -100
      this.left = move
      newStyles.push(`left: ${move}%`)
      carousel.style = newStyles.join(';')
    }
    if(this.left === (this.length) * -100) {
      newStyles = styles.slice(0,1)
      this.left = 0
      newStyles.push('left: 0')
      carousel.style = newStyles.join(';')
    }
  }

  move(move) {
    const carousel = document.getElementById('carousel_list')
    let styles = carousel.getAttribute('style').split(';')
    styles.push(`left: ${move}%`)
    styles.push(transition)
    carousel.style = styles.join(';')
    this.left = move
    setTimeout(this.transitionComplete.bind(this), 750)
  }


  previousImage() {
    let move = this.left - 100
    if(move >= this.length *-100) {
      this.move(move)
    }
  }

  nextImage() {
    let move = this.left + 100
    if(move <= 100) {
      this.move(move)
    }
  }

  events() {
    const nextBtn = document.getElementById('next')
    const prevBtn = document.getElementById('previous')
    nextBtn.addEventListener('click', this.nextImage.bind(this))
    prevBtn.addEventListener('click', this.previousImage.bind(this))
  }

  items(photo, length) {
    const item = document.createElement('li')
    const infoSection = document.createElement('div')
    const title = document.createElement('h4')
    item.classList.add('carousel_list_item')
    item.style = `background-image: url(https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg);
    width: ${100/this.length/2}%;`
    infoSection.classList.add('carousel_list_item_info')
    title.classList.add('carousel_list_item_info-title')
    title.innerHTML = photo.title
    infoSection.appendChild(title)
    item.appendChild(infoSection)
    return item
  }

  template() {
    const template = document.createElement('div')
    template.innerHTML = `<div class="carousel" role="region" aria-label="Flcikr Images from Seattle">
    <div class="carousel_viewport">
      <ul id="carousel_list" style="width:${this.width}%;"></ul>
      <nav class="carousel_navigation">
        <button type="button" class="carousel_navigation_arrow-previous carousel_navigation_arrow" id="previous" >
          <span class="visuallyHidden">Previous Image</span>
          <span class="carousel_navigation_arrow_icon carousel_navigation_arrow_icon-previous"></span>
        </button>
        <button type="button" class="carousel_navigation_arrow-next carousel_navigation_arrow" id="next" >
          <span class="visuallyHidden">Next Image</span>
          <span class="carousel_navigation_arrow_icon carousel_navigation_arrow_icon-next"></span>
        </button>
      </nav>
    </div>
    </div>`
    return template
  }

  build(photos, domElem) {
    const _photos = photos.concat(photos)
    const template = this.template(photos.length)
    const list = template.querySelector('#carousel_list')
    const items = _photos.map( item => {
      list.appendChild(this.items(item))
    })
    const _carousel = document.getElementById(domElem)
    _carousel.appendChild(template)
    this.events()
  }

  init(place, domElem) {
    // instantiate a new API class to call Flickr
    const API = new Api()
    // get place_id for Seattle
    API.placeId(place).then(res => {
      API.photos(res).then(results => {
        this.length = results.photos.photo.length
        this.width = results.photos.photo.length * 200
        this.build(results.photos.photo, domElem)
      })
    })
  }

}

export default Carousel
