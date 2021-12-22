const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const arr = ['red','yellow','blue','green','orange','purple']
body.style.backgroundColor = 'violet'

function color() {
    let index = parseInt(Math.random() * arr.length)
    body.style.backgroundColor = arr[index]
}
btn.addEventListener('click',color);