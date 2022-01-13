const draw = document.querySelector('.draw');
const reset = document.querySelector('.reset');
const numbersDiv = document.querySelector('.numbers');
const lottoNumbers = [];
const colors = ["tomato","green","orange","purple","blue"];

function paintNum(number){
    const eachNumSpan = document.createElement('span');
    let colorIndex = Math.floor(number / 10)
    eachNumSpan.classList.add('eachnum')
    eachNumSpan.style.backgroundColor = colors[colorIndex]
    eachNumSpan.textContent = number
    numbersDiv.appendChild(eachNumSpan)
  }
   
  draw.addEventListener('click', function(){
    for(let i=0; lottoNumbers.length < 6; i++){
      let ran = Math.floor(Math.random() * 45) + 1
      if(lottoNumbers.indexOf(ran) === -1){
        lottoNumbers.push(ran)
        paintNum(ran)
      }
    }
  })

  reset.addEventListener('click',() => {
    lottoNumbers.splice(0,6);
    numbersDiv.innerHTML = ''
  })