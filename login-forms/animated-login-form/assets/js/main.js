// Password
const showHiddenPassword = (loginPass, loginEye) => {
  let input = document.getElementById(loginPass)
  let iconEye = document.getElementById(loginEye)
  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text"
      iconEye.classList.add("ri-eye-line")
      iconEye.classList.remove("ri-eye-off-line")
    } else {
      input.type = "password"

      iconEye.classList.remove("ri-eye-line")
      iconEye.classList.add("ri-eye-off-line")
    }
  })
}

showHiddenPassword("login-password", "login-eye")
