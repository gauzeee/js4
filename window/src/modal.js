export function modals() {
  let btnEngineer = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    modalPopup = document.querySelector(".popup"),
    callBtn = document.querySelectorAll(".phone_link");

  setTimeout(() => {
    modalPopup.classList.remove("fadeout");
    modalPopup.style.display = "block";
    modalPopup.classList.add("fade");
  }, 60000);

  //time();

  modalEngineer.addEventListener("click", event => {
    if (
      event.target.matches("div.popup_engineer") ||
      event.target.classList.contains("popup_close") ||
      event.target.matches("strong")
    ) {
      modalEngineer.classList.remove("fade");
      modalEngineer.classList.add("fadeout");
      setTimeout(function() {
        modalEngineer.style.display = "none";
      }, 980);
    }
  });

  btnEngineer.addEventListener("click", () => {
    modalEngineer.classList.remove("fadeout");
    modalEngineer.style.display = "block";
    modalEngineer.classList.add("fade");
  });

  callBtn.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      modalPopup.classList.remove("fadeout");
      modalPopup.style.display = "block";
      modalPopup.classList.add("fade");
    });
  });

  modalPopup.addEventListener("click", event => {
    if (
      event.target.matches("div.popup") ||
      event.target.classList.contains("popup_close") ||
      event.target.matches("strong")
    ) {
      modalPopup.classList.remove("fade");
      modalPopup.classList.add("fadeout");
      setTimeout(() => {
        modalPopup.style.display = "none";
      }, 980);
    }
  });
}
