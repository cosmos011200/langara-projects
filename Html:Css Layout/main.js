const scroller = document.querySelector('.now');
const prevBtn = document.querySelector('.now-prev');
const nextBtn = document.querySelector('.now-next');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.close-btn');
const recommendation = document.querySelector('.recommendation');
const scrollerRec = document.querySelector('.recommendation');
const prevBtnRec = document.querySelector('.rec-prev');
const nextBtnRec = document.querySelector('.rec-next');

if (prevBtnRec && scrollerRec) {
  prevBtnRec.addEventListener('click', () => {
    scrollerRec.scrollBy({ left: -getScrollAmount(scrollerRec), behavior: 'smooth' });
  });
}

if (nextBtnRec && scrollerRec) {
  nextBtnRec.addEventListener('click', () => {
    scrollerRec.scrollBy({ left: getScrollAmount(scrollerRec), behavior: 'smooth' });
  });
}

if (prevBtn && scroller) {
  prevBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: -getScrollAmount(scroller), behavior: 'smooth' });
  });
}

if (nextBtn && scroller) {
  nextBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: getScrollAmount(scroller), behavior: 'smooth' });
  });
}

if (hamburger && overlayMenu) {
  hamburger.addEventListener('click', () => {
    overlayMenu.classList.add('show');
  });
}

if (closeBtn && overlayMenu) {
  closeBtn.addEventListener('click', () => {
    overlayMenu.classList.remove('show');
  });
}

prevBtnRec.addEventListener('click', () => {
  scrollerRec.scrollBy({ left: -getScrollAmount(scrollerRec), behavior: 'smooth' });
});
nextBtnRec.addEventListener('click', () => {
  scrollerRec.scrollBy({ left: getScrollAmount(scrollerRec), behavior: 'smooth' });
});

  function getScrollAmount() {
    const card = scroller.querySelector('.film-card');
    const gap = parseInt(getComputedStyle(scroller).gap || 0, 10);
    return card.offsetWidth + gap;
  }

  prevBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

hamburger.addEventListener('click', () => {
  overlayMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlayMenu.classList.remove('show');
});
hamburger.addEventListener('click', () => {
  overlayMenu.classList.add('show');
  document.body.style.overflow = 'hidden'; 
});

closeBtn.addEventListener('click', () => {
  overlayMenu.classList.remove('show');
  document.body.style.overflow = ''; 
});
