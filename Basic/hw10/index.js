let showPass = document.querySelectorAll(".icon-password");

showPass.forEach((item) => {
  item.addEventListener("click", toggleType);

  function toggleType() {
    let input = this.closest(".input-wrapper").querySelector(".password-input");
    if (input.type === "password") {
      item.classList.add("view");
      input.type = "text";
    } else {
      item.classList.remove("view");
      input.type = "password";
    }
  }
});

document.querySelector(".btn").onclick = function () {
  let password = document.querySelector(".password-input").value,
    confirmPass = document.querySelector(".confirm-pass").value,
    secondInput = document.querySelector(".second-input");

  if (password != confirmPass) {
    secondInput.insertAdjacentHTML(
      "beforeend",
      `<span class="warning">Нужно ввести одинаковые значения </span>`
    );
    return false;
  } else {
    secondInput.removeChild(secondInput.lastChild);
    alert("You are welcome");
  }
  return true;
};
