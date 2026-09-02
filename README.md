# day drinking

The invite. Live at **https://sebastianverjoustinsky-rgb.github.io/day-drinking/**

## The flow

```
  "Do you like day drinking?"
        │
   Yes ─┴─ No
    │       │
    │    "Would you like to reconsider your choice?"
    │        │
    │   Yes ─┴─ No
    │    │       │
    │    └──► back to the question
    │            │
    │        "You are not invited."
    ▼
  "You have been considered for an invitation…"
    │  Continue
    ▼
  The details
```

## Changing the party details

Open `script.js`. Everything you need is in the block at the very top:

```js
const PARTY = {
  when:      "Saturday 19 September 2026",
  time:      "TBC — kick-off is early, that's the whole point",
  where:     "TBC",
  ...
};
```

- Edit the text between the `"quote marks"`.
- Set anything to `""` to hide that row entirely.
- Anything still starting with `TBC` renders greyed-out and italic, so unfinished bits are obvious.
- Want an RSVP button? Set `rsvpLink` to a `mailto:`, `sms:` or `https://wa.me/…` link. Leave it `""` and no button shows.

Commit and push — GitHub Pages redeploys in about a minute.

## Changing the words

All the copy is in `index.html`, one `<section class="screen">` per screen.

## Changing the look

`style.css`. The colours are the `:root` variables at the top.
