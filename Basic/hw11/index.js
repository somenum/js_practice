let btn = document.querySelectorAll(".btn");

document.addEventListener("keydown", (e) => {
  btn.forEach((item) => {
    let keyName = e.key;
    let btnButton = item.innerHTML;

    if (btnButton === keyName) {
      item.classList.toggle("btn-activated");
    } else item.classList.remove("btn-activated");
  });
});
