let stopAnimation = false;
export function stopAnimation() {
  stopAnimation = true;
}

export function startAnimation(work) {
  requestAnimationFrame(tick);
  stopAnimation = false;

  function tick() {
    if (stopAnimation) {
      return;
    }
    requestAnimationFrame(tick);
    work();
  }
}
