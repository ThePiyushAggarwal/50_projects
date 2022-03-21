const textarea = document.getElementById('textarea')
const tags = document.querySelector('#tags')

textarea.addEventListener('keyup', (e) => {
  createFloats(e)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

const randomSelect = () => {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
  tag.classList.add('highlight')
}
const unHighlightTag = (tag) => {
  tag.classList.remove('highlight')
}

const createFloats = (e) => {
  const filter = e.target.value
    .split(',')
    .filter((x) => x.trim() !== '')
    .map((x) => x.trim())

  tags.innerHTML = ''

  filter.forEach((item) => {
    const tag = document.createElement('span')
    tag.textContent = item
    tag.classList.add('tag')
    tags.append(tag)
  })
}
