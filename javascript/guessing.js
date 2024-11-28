const random = Math.floor(Math.random() * 50 + 1);
console.log(random)

const check = document.getElementById('select')
const enter = document.getElementById('sub')
const gtreat = document.getElementById('result')

enter.addEventListener('click', () => {
 const guess =check.Value;;
    if (guess === random) {
    gtreat.textContent = 'you got it!'
  } else {
    gtreat.textContent = 'keep trying'
  }
})
