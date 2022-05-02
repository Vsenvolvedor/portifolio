import scroll from './modules/smoothScroll.js'
import mobile from './modules/mobileMenu.js'
import title from './modules/animaTitle.js'
import filter from './modules/filter.js'
import slide from './modules/slide.js'
import column from './modules/column.js'
import Copy from './modules/copy.js'

title()
mobile()
scroll()
filter()
column()
slide()


const copy = new Copy('[data-copy]','active').init()