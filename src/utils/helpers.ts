let debounceTimer: ReturnType<typeof setTimeout>;

export const debounce = (callback: () => void, time: number) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(callback, time);
};

let throttlePause = false;

export const throttle = (callback: () => void, time: number) => {
  if (throttlePause) return;

  throttlePause = true;

  setTimeout(() => {
    callback();

    throttlePause = false;
  }, time);
};
