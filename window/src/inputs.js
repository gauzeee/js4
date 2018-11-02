export function inputs() {
  let inputs = document.querySelectorAll(".number_input");

  inputs.forEach(function(input) {
    input.addEventListener("input", function() {
      this.value = `${this.value.replace(/\D/g, "")}`;
    });
  });
}
