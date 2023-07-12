const debounce = (func, waitFor = 500) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, waitFor);
  };
};

export default debounce;
