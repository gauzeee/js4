export function modals() {
  let btnEngineer = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    form = document.querySelector(".popup_engineer .form"),
    formTitle = form.querySelector("h2"),
    titleSpan = formTitle.querySelector("span"),
    formInput1 = form.querySelectorAll("input")[0],
    formInput2 = form.querySelectorAll("input")[1],
    formBtn = form.querySelector("button"),
    formP = form.querySelector("p"),
    close = document.querySelector(".popup_close_engineer");

  btnEngineer.addEventListener("click", function() {
    modalEngineer.style.display = "block";
  });

  close.addEventListener("click", function() {
    modalEngineer.style.display = "none";
  });

  modalEngineer.addEventListener("click", function(event) {
    if (
      event.target != form &&
      event.target != formTitle &&
      event.target != formInput1 &&
      event.target != formInput2 &&
      event.target != formBtn &&
      event.target != formP &&
      event.target != titleSpan
    ) {
      modalEngineer.style.display = "none";
    }
    console.log(event.target);
  });
}
