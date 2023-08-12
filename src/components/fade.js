import { largeFrame } from './create'

const fadeButton = document.querySelector('.fade-btn')

fadeButton.addEventListener('click', () => {
  const newDiv = document.querySelector('.main-frame > div')
  newDiv.classList.toggle('fadeframe')
})
