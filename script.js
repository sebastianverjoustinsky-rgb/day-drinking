/* ══════════════════════════════════════════════════════════════════
   ⬇⬇⬇  EDIT YOUR PARTY DETAILS HERE.  THIS IS THE ONLY BIT.  ⬇⬇⬇

   • Change the text between the "quote marks".
   • To hide a row completely, set it to ""  (empty quote marks).
   • Save the file. That's it.
   ══════════════════════════════════════════════════════════════════ */

const PARTY = {

  when:      "Saturday 19 September 2026",
  time:      "TBC — kick-off is early, that's the whole point",
  where:     "TBC",
  address:   "TBC",
  dressCode: "TBC",
  bring:     "TBC",

  // The line under the details. Set to "" to hide it.
  rsvpNote:  "RSVP to Jayden by TBC, or forfeit your place to someone more enthusiastic.",

  // Optional RSVP button. Leave the link as "" and no button appears.
  // Examples:  "mailto:you@example.com"   "https://wa.me/61400000000"   "sms:+61400000000"
  rsvpLabel: "RSVP",
  rsvpLink:  "",

};

/* ══════════════════════════════════════════════════════════════════
   ⬆⬆⬆  STOP EDITING HERE. The rest just makes it work.  ⬆⬆⬆
   ══════════════════════════════════════════════════════════════════ */


/* ---- paint the details screen from PARTY ---- */

const ROWS = [
  ["When",       PARTY.when],
  ["Time",       PARTY.time],
  ["Where",      PARTY.where],
  ["Address",    PARTY.address],
  ["Dress code", PARTY.dressCode],
  ["Bring",      PARTY.bring],
];

const dl = document.getElementById("details");
for (const [label, value] of ROWS) {
  if (!value) continue;
  const dt = document.createElement("dt");
  dt.textContent = label;
  const dd = document.createElement("dd");
  dd.textContent = value;
  if (/^TBC/i.test(value)) dd.classList.add("tbc");
  dl.append(dt, dd);
}

const note = document.getElementById("rsvp-note");
if (PARTY.rsvpNote) note.textContent = PARTY.rsvpNote;
else note.remove();

const rsvpBtn = document.getElementById("rsvp-btn");
if (PARTY.rsvpLink) {
  rsvpBtn.href = PARTY.rsvpLink;
  rsvpBtn.textContent = PARTY.rsvpLabel || "RSVP";
  rsvpBtn.hidden = false;
}


/* ---- screen switching ---- */

const screens = document.querySelectorAll(".screen");

function show(name) {
  const next = document.querySelector(`[data-screen="${name}"]`);
  if (!next || next.classList.contains("is-active")) return;

  // the base .screen rule delays `visibility` by the fade duration, so the
  // outgoing screen stays painted while it fades and then stops taking clicks
  for (const s of screens) if (s !== next) s.classList.remove("is-active");

  // the door gets its own, colder weather
  document.body.classList.toggle("is-rejected", name === "rejected");

  requestAnimationFrame(() => {
    next.classList.add("is-active");
    // focus after it is visible, or the browser refuses; :focus-visible keeps
    // the ring off for mouse users
    next.querySelector(".btn:not([hidden])")?.focus({ preventScroll: true });
  });
}

document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) { show(go.dataset.go); return; }

  const copy = e.target.closest("[data-copy]");
  if (copy) {
    navigator.clipboard?.writeText(location.href).then(() => {
      const was = copy.textContent;
      copy.textContent = "Copied";
      setTimeout(() => (copy.textContent = was), 1600);
    }).catch(() => {});
  }
});
