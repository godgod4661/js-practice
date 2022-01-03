const arr = [
  {
    sentence: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    writer: "Nelson Mandel",
  },
  {
    sentence: "The way to get started is to quit talking and begin doing.",
    writer: "Walt Disney",
  },
  {
    sentence: "Your time is limited, so don\’t waste it living someone else\’s life..",
    writer: "Steve Jobs",
  },
  {
    sentence: "If life were predictable it would cease to be life, and be without flavor..",
    writer: "Eleanor Roosevelt",
  },
  {
    sentence: "If you set your goals ridiculously high and it\’s a failure, you will fail above everyone else\’s success..",
    writer: "James Cameron",
  },
]

const btn = document.querySelector('.btn');
const sentence = document.querySelector('.sentence');
const writer = document.querySelector('.writer')

btn.addEventListener('click',(e) => {
  const index = arr[Math.floor(Math.random() * arr.length)]
  sentence.textContent = index.sentence
  writer.textContent = index.writer
})