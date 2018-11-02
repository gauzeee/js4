export function modals() {
  let btnEngineer = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    modalPopup = document.querySelector(".popup"),
    callBtn = document.querySelectorAll(".phone_link");

  setTimeout(function() {
    modalPopup.classList.remove("fadeout");
    modalPopup.style.display = "block";
    modalPopup.classList.add("fade");
  }, 60000);

  //time();

  modalEngineer.addEventListener("click", function(event) {
    if (
      event.target.matches("div.popup_engineer") ||
      event.target.classList.contains("popup_close")
    ) {
      modalEngineer.classList.remove("fade");
      modalEngineer.classList.add("fadeout");
      setTimeout(function() {
        modalEngineer.style.display = "none";
      }, 1000);
    }
  });

  btnEngineer.addEventListener("click", function() {
    modalEngineer.classList.remove("fadeout");
    modalEngineer.style.display = "block";
    modalEngineer.classList.add("fade");
  });

  callBtn.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      modalPopup.classList.remove("fadeout");
      modalPopup.style.display = "block";
      modalPopup.classList.add("fade");
    });
  });

  modalPopup.addEventListener("click", function(event) {
    if (
      event.target.matches("div.popup") ||
      event.target.classList.contains("popup_close")
    ) {
      modalPopup.classList.remove("fade");
      modalPopup.classList.add("fadeout");
      setTimeout(function() {
        modalPopup.style.display = "none";
      }, 1000);
    }
  });
}
