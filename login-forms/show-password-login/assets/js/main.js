// Show Password

const showPassword = (inputOverlay, inputPassword, inputEyeCon) => {
  let overlay = document.getElementById(inputOverlay)
  let input = document.getElementById(inputPassword)
  let eyeCon = document.getElementById(inputEyeCon)

  eyeCon.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text"

      eyeCon.classList.add("bx-show")
    } else {
      input.type = "password"
      eyeCon.classList.remove("bx-show")
    }
    overlay.classList.toggle("overlay-content")
  })
}

showPassword("input-overlay", "input-password", "input-icon")
