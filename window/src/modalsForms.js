export function modalsForms() {
  let forms = document.querySelectorAll(".form"),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Loading...",
      success: "Мы скоро с вами свяжемся!",
      failure: "Произошла ошибка"
    };

  forms.forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      let input = form.querySelectorAll("input");
      form.appendChild(statusMessage);
      let formData = new FormData(form);

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
      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
        setTimeout(() => {
          statusMessage.innerHTML = "";
        }, 10000);
      }

      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.success))
        .catch(() => (statusMessage.innerHTML = message.failure))
        .then(clearInput);
    });
  });
}
