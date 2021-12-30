const plusBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');

function todo() {
   // 1. 사용자가 입력한 텍스트를 받아옴
   const text = input.value;
   if (text === '') {
     input.focus();
     return;
   }
   // 2. 새로운 아이템을 만듦 (텍스트 + 삭제 버튼)
   const item = createItem(text);
   // 3. items 컨테이너안에 새로 만든 아이템을 추가
   items.appendChild(item);
   // 4. 새로 추가된 아이템으로 스크롤링
   item.scrollIntoView({ block: 'center' });
   // 5. input을 초기화 한다.
   input.value = '';
   input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item__row');

  const item2 = document.createElement('div');
  item2.setAttribute('class','item');

  const span = document.createElement('span');
  span.setAttribute('class','item__name');
  span.innerText = text;

  const delBtn = document.createElement('button');
  delBtn.setAttribute('class','item__delete');
  delBtn.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>'
  delBtn.addEventListener('click',() => {
    items.removeChild(itemRow);
  })
  const divider = document.createElement('div');
  divider.setAttribute('class','item__divider');

  item2.appendChild(span);
  item2.appendChild(delBtn);

  itemRow.appendChild(item2);
  itemRow.appendChild(divider);
  return itemRow;
}
plusBtn.addEventListener('click', todo)

input.addEventListener('keypress', (e) => {
  if(e.key==='Enter') {
    todo();
  }
})