# Lessons

## `<canvas>` is a replaced element — `inset:0` does NOT stretch it
**Context:** Three.js hero sphere rendered tiny in the top-left on some devices.
**Mistake:** Assumed `position:absolute; inset:0` would make the canvas fill its
parent. It doesn't — `<canvas>` is a *replaced element* (like `<img>`), so with
`width:auto` it falls back to its intrinsic drawing-buffer size (default 300×150).
The old code "worked" only because `renderer.setSize(window.innerWidth, …)` set the
buffer (= intrinsic size) to roughly the viewport.
**Worse mistake:** "Fixed" it by sizing the buffer from `canvas.clientWidth`, which
created a feedback loop: clientWidth=300 → setSize(300) → buffer 300 → clientWidth
stays 300. Collapsed to 300×150 forever.
**Rule:** Always give a canvas an explicit CSS display size (`width:100%;
height:100%`). Let CSS own the display size and JS own the drawing buffer
(`renderer.setSize(clientW, clientH, /*updateStyle*/ false)`). Never derive the
buffer size from the canvas's own client size unless CSS already forces that size.

## Verify layout/visual changes in a real browser BEFORE pushing
**Mistake:** Pushed a "responsive fix" reasoned purely from reading code; it broke
the layout and the user caught it ("u ruined everything").
**Rule:** For any CSS/layout/canvas/rendering change, run the dev server and inspect
in Playwright — measure real `clientWidth/clientHeight` vs buffer, screenshot at
desktop + mobile + a short (min-height) viewport — before committing. Reasoning
about CSS replaced-element/box-model behavior is error-prone; measure instead.
