const list = document.querySelectorAll("aside ul li");
console.log(list);

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

list.forEach((item) => {
  item.style.backgroundColor = `rgb(${randomNumber(0, 255)},${randomNumber(
    0,
    255
  )},${randomNumber(0, 255)})`;
});
