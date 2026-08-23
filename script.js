// Small, deliberately subtle motion for the cinematic homepage.
const hero = document.querySelector('.hero');
const bg = document.querySelector('.hero-bg');

if (hero && bg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 5;
    const y = (e.clientY / window.innerHeight - 0.5) * 5;
    bg.style.transform = `scale(1.04) translate(${x}px, ${y}px)`;
  });
  hero.addEventListener('pointerleave', () => {
    bg.style.transform = 'scale(1.04)';
  });
}
