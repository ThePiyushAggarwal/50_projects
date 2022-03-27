const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 100

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      console.log(c, increment)
      setTimeout(updateCounter, 50)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
