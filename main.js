const timeContainer = document.querySelector(".time");

const time = new Date();

timeContainer.innerHTML = time.toUTCString();
