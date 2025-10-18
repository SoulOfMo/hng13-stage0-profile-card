const timeContainer = document.querySelector(".time");

console.log(timeContainer);

const time = new Date();

timeContainer.innerHTML = time.toUTCString();
