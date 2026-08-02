# NOTES.md — hand-built vs shadcn/Base UI

## What I built
Disclosure, Tabs (roving tabindex + ArrowLeft/Right with wrap), Modal
(focus trap, Escape, focus return on every close path). Built from
scratch against the W3C APG patterns, keyboard-only tested.

## What shadcn/Base UI handled that I missed
1. Scroll lock — Base UI's Dialog primitive locks body scroll while
   open (usually by setting `overflow: hidden` on `<body>` internally
   or via a scroll-lock utility). My version never touched `body`
   scroll, so a long page behind the overlay stays scrollable with
   the mouse wheel/touch even while the modal is "modal."
2. Portal — `dialog.tsx` wraps the content in a `Portal` component,
   rendering the dialog at the end of `document.body` instead of
   wherever it's declared in the tree. Mine renders in place, which
   risks z-index/overflow/clipping issues if a parent has
   `overflow: hidden` or a lower stacking context.
3. Home/End keys on tabs — their `Tabs` primitive supports Home
   (jump to first tab) and End (jump to last), on top of arrow
   navigation. I only wired ArrowLeft/ArrowRight with wraparound —
   Home/End weren't part of my TODOs, so they're missing.
4. Background hidden from assistive tech — while open, Base UI
   applies `aria-hidden="true"` (or `inert`) to sibling content
   outside the dialog, so screen reader users can't navigate into
   the page behind it even though my focus trap stops *keyboard*
   focus from leaving. Without `aria-hidden`/`inert`, a screen
   reader's virtual cursor can still read background content that a
   sighted keyboard user can't reach.

## What surprised me reading the source
How little visible logic the shadcn files actually contain — most of
what I hand-wrote (focus trap, Escape handling, focus return) doesn't
appear in `dialog.tsx`/`tabs.tsx` at all because it's implemented
inside the Base UI primitives the files import and re-style. The
shadcn layer is mostly Tailwind classes and composition, not behavior.