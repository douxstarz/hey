const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting)
	})
}, {
	threshold: 0.5,
})

hiddenElements.forEach(hiddenElements => {
	observer.observe(hiddenElements)
})

