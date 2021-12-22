const h1 = document.querySelector('.text')
const btn = document.querySelector('.btn')
const  body = document.querySelector('body')
const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click', change)

function change() {
  let hex = '#'
  for(let i=0; i<6; i++){
    const index = parseInt(Math.random() * color.length)
    hex += color[index]
  }  
  h1.textContent = `HEX COLOR :${hex}`
  body.style.backgroundColor = hex
}