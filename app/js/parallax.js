document.addEventListener('mousemove', parallax);


function parallax(e) {
  this.querySelectorAll('.hero__parallax').forEach(hero => {
    const speed = hero.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    hero.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}