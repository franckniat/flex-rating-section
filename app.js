const item = document.querySelector('.item3-1');
  const contenus = item.querySelectorAll('.item3-1-1');
  let currentIndex = 0;

  setInterval(() => {
    contenus[currentIndex].style.opacity = '0';
    contenus[currentIndex].style.display = 'none';
    contenus[currentIndex].style.transtion = 'ease 0.1s';

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % contenus.length;
      contenus[currentIndex].style.opacity = '1';
      contenus[currentIndex].style.display = 'flex';
    }, 1500);
}, 1500);