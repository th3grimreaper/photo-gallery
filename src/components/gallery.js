import imgOne from '../assets/lake01.jpg'
import imgTwo from '../assets/berserk.jpg'
import imgThree from '../assets/cardash.jpg'
import imgFour from '../assets/pattern.jpg'
import imgFive from '../assets/berserk01.png'
import { clearFrame, createEl, createFadeDiv, largeFrame } from './create'

const alts = {
  imgOne: 'A lake.',
  imgTwo: 'Guts standing in the dark.',
  imgThree: 'A car dashboard.',
  imgFour: 'Abstract pattern.',
  imgFive: 'Guts using his sword.',
}

const opts = document.querySelectorAll('.opt')

function insertImage() {
  opts.forEach((opt) => {
    if (opt.classList.contains('img-1')) {
      createEl(opt, document.createElement('img'), imgOne, alts.imgOne)
    }
    if (opt.classList.contains('img-2')) {
      createEl(opt, document.createElement('img'), imgTwo, alts.imgTwo)
    }
    if (opt.classList.contains('img-3')) {
      createEl(opt, document.createElement('img'), imgThree, alts.imgThree)
    }
    if (opt.classList.contains('img-4')) {
      createEl(opt, document.createElement('img'), imgFour, alts.imgFour)
    }
    if (opt.classList.contains('img-5')) {
      createEl(opt, document.createElement('img'), imgFive, alts.imgFive)
    }
  })
}

opts.forEach((opt) => {
  opt.addEventListener('click', (e) => {
    clearFrame()
    createFadeDiv()
    createEl(
      largeFrame,
      document.createElement('img'),
      e.target.src,
      e.target.alt
    )
  })
})

export default insertImage
