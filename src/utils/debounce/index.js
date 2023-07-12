const debounce = (func, waitFor = 1000) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, waitFor);
  };
};

export default debounce;
