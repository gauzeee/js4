export function inputs() {
  let inputs = document.querySelectorAll(".number_input");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      this.value = `${this.value.replace(/\D/g, "")}`;
    });
  });
}
