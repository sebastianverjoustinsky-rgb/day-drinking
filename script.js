const screens = document.querySelectorAll(".screen");

function show(name) {
  const next = document.querySelector(`[data-screen="${name}"]`);
  if (!next) return;
  for (const s of screens) s.classList.toggle("is-active", s === next);
  requestAnimationFrame(() => next.querySelector("button")?.focus({ preventScroll: true }));
}

document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) show(go.dataset.go);
});
