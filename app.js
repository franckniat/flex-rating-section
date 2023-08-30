const item = document.querySelector('.item3-1');
  const contenus = item.querySelectorAll('.item3-1-1');
  let currentIndex = 0;

    setInterval(() => {
        contenus[currentIndex].classList.add('active');
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % contenus.length;
          contenus[currentIndex].classList.add('active');
        }, 1500);
        contenus[currentIndex].classList.remove('active');
    }, 1500);
  