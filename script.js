const followButton = document.getElementById("followButton");
const followMenu = document.querySelector(".follow-menu");

followButton.addEventListener("click", () => {
  const isOpen = followMenu.classList.toggle("open");

  followButton.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );
});

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
