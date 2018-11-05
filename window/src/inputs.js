export function inputs() {
  let inputs = document.querySelectorAll(".number_input");

  inputs.forEach(input => {
    input.addEventListener("input", event => {
      event.target.value = `${event.target.value.replace(/\D/g, "")}`;
    });
  });
}
