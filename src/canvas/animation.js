let stop = false;

export function stopAnimation() {
  stop = true;
}

export function startAnimation(work) {
  requestAnimationFrame(tick);
  stop = false;

  function tick(time) {
    console.log("tick", time);
    if (stop) {
      return;
    }
    requestAnimationFrame(tick);
    work();
  }
}
