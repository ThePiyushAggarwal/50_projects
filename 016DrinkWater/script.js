const smallCups = document.querySelectorAll('.cup-small')
const litres = document.getElementById('litres')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', ()=> highlightCups(idx))
})

function highlightCups(idx) {
  smallCups.forEach((cup2, idx2 ) => {
    if(idx)
  })
}