# 로또 번호 추첨기

>**1~45까지의 랜덤 숫자를 6개 도출하기**  

![20220113_164403](https://user-images.githubusercontent.com/96277626/149287288-20081e02-ca8c-4e4c-bdbf-8bdc5c5d18cd.png)

* 랜덤으로 도출한 숫자들에서 같은 숫자가 없으면(-1) 배열에 push하도록 함.
```
   if(lottoNumbers.indexOf(ran) === -1){
        lottoNumbers.push(ran)
```


