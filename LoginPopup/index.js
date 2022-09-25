let formBtn = document.querySelector("#LoginBtn");
let LoginForm = document.querySelector(".LoginformContainer");
let formClose = document.querySelector("#formClose");

formBtn.addEventListener("click", () => {
  LoginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  LoginForm.classList.remove("active");
});
