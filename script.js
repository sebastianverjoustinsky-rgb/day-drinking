const screens = document.querySelectorAll(".screen");
const trail = [];

function render(next) {
  for (const s of screens) s.classList.toggle("is-active", s === next);
  for (const b of next.querySelectorAll("[data-back]")) b.hidden = trail.length === 0;
  requestAnimationFrame(() => next.querySelector("button:not([hidden])")?.focus({ preventScroll: true }));
}

function show(name) {
  const next = document.querySelector(`[data-screen="${name}"]`);
  const current = document.querySelector(".screen.is-active");
  if (!next || next === current) return;
  if (current) trail.push(current.dataset.screen);
  render(next);
}

function back() {
  const prev = trail.pop();
  if (prev) render(document.querySelector(`[data-screen="${prev}"]`));
}

document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) return show(go.dataset.go);
  if (e.target.closest("[data-back]")) back();
});
