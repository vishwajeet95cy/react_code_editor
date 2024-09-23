export const toggleClass = (el, className) => {
  let main = document.querySelector(el);
  main.classList.toggle(className);
};

export const removeClass = (el, className) => {
  let main = document.querySelector(el);
  main.classList.remove(className);
};
