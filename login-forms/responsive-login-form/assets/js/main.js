// Show Hidden Password
const showHiddenPassword = (inputPasword, inputIcon) => {
  let input = document.getElementById(inputPasword)
  let iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text"
      iconEye.classList.add("ri-eye-line")
      iconEye.classList.remove("ri-eye-off-line")
    } else {
      input.type = "password"
      iconEye.classList.add("ri-eye-off-line")
    }
  })
}

showHiddenPassword("login-password", "login-eye")
