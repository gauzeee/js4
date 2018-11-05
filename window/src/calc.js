export function calc() {
  let priceButtons = document.querySelectorAll(".popup_calc_btn"),
    calc = document.querySelector(".popup_calc"),
    calcProfile = document.querySelector(".popup_calc_profile"),
    calcEnd = document.querySelector(".popup_calc_end"),
    calcNextBtn = document.querySelector(".popup_calc_button"),
    calcProfileNextBtn = document.querySelector(".popup_calc_profile_button"),
    close = document.querySelectorAll(".popup_calc_close"),
    popups = [calc, calcProfile, calcEnd],
    balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
    balconBig = document.querySelectorAll(".big_img > img"),
    coldBox = document.querySelector(".cold"),
    warmBox = document.querySelector(".warm"),
    form = document.querySelector(".form_calc"),
    formData = new FormData(),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Loading...",
      success: "Мы скоро с вами свяжемся!",
      failure: "Произошла ошибка"
    };

  priceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      calc.style.display = "block";
      calc.classList.remove("fadeout");
      calc.classList.add("fade");
    });
  });

  close.forEach(x => {
    x.addEventListener("click", () => {
      popups.forEach(function(item) {
        setTimeout(() => {
          item.style.display = "none";
          item.classList.remove("fade");
          item.classList.remove("fadeout");
        }, 980);
        item.classList.remove("fade");
        item.classList.add("fadeout");
        clearInputs();
      });
    });
  });

  balconIcons.forEach((icon, index) => {
    icon.addEventListener("click", event => {
      event.preventDefault();
      balconIcons.forEach(icon => {
        icon.style.width = "20%";
        icon.classList.remove("choosen");
      });
      balconBig.forEach(img => {
        img.style.display = "none";
      });
      this.style.width = "30%";
      this.classList.add("choosen");
      balconBig[index].style.display = "inline-block";
    });
  });

  calcNextBtn.addEventListener("click", () => {
    let width = document.querySelector("#width").value,
      height = document.querySelector("#height").value,
      type = document.querySelector(".choosen");

    if (width == "" || height == "" || type == null) {
      alert("Введите высоту и ширину, выбирите форму балкона");
    } else {
      formData.append("form", type.alt);
      formData.append("width", width);
      formData.append("height", height);
      calc.style.display = "none";
      calcProfile.style.display = "block";
    }
  });

  coldBox.addEventListener("click", () => {
    warmBox.checked = false;
  });

  warmBox.addEventListener("click", () => {
    coldBox.checked = false;
  });

  calcProfileNextBtn.addEventListener("click", () => {
    let viewType = document.querySelector("#view_type").value;

    if (!warmBox.checked && !coldBox.checked) {
      alert("Выберите тип профиля для рассчета.");
    } else {
      if (coldBox.checked) {
        formData.append("profile_type", "cold");
      } else {
        formData.append("profile_type", "warm");
      }
      formData.append("view_type", viewType);
      calcProfile.style.display = "none";
      calcEnd.style.display = "block";
    }
  });

  function clearInputs() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
      input.value = "";
    });
    formData = new FormData();
    setTimeout(function() {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    let name = document.querySelector("#calc_user_name").value,
      phone = document.querySelector("#calc_phone").value;

    formData.append("name", name);
    formData.append("phone", phone);

    form.appendChild(statusMessage);

    function postData(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open("POST", "server.php");
        request.setRequestHeader(
          "Content-Type",
          "application/json; charset=utf-8"
        );

        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              resolve();
            }
          } else {
            reject();
          }
        };
        request.send(data);
      });
    }
    postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInputs);
  });
}
