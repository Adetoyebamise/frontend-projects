const inputs = document.querySelectorAll(".form__input")
console.log("inputs", inputs)

const addFocus = () => {
  let.parent = this.parentNode.parentNode
  parent.classList.add("focus")
}
const removeFocus = () => {
  let.parent = this.parentNode.parentNode
  if (this.value == "") {
    parent.classList.remove("focus")
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", addFocus)
  input.addEventListener("blur", removeFocus)
})
