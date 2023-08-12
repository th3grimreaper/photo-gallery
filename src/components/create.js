export const largeFrame = document.querySelector('.main-frame')

export function createEl(parent, element, src = '#', alt = '#') {
  const elementPointer = element
  const parentPointer = parent
  elementPointer.src = src
  elementPointer.alt = alt
  parentPointer.appendChild(elementPointer)
}

export function createFadeDiv() {
  const newDiv = document.createElement('div')
  largeFrame.appendChild(newDiv)
}

export function clearFrame() {
  largeFrame.innerHTML = ''
}
