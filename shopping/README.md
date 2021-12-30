## 쇼핑리스트 목록

---

**input창에 쇼핑리스트 입력, +버튼 누르기와 엔터키 치는 2가지로 값 넣기**

```
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
```

- **휴지통 누르면 리스트 삭제**
  ![스크린샷(140)](https://user-images.githubusercontent.com/79892837/136212808-74d5d502-7e05-4153-b972-f1c27bc130a3.png)
