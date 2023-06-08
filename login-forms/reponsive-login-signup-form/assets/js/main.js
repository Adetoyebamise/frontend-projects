const signUp = document.getElementById("sign-up")
const signIn = document.getElementById("sign-in")
const logIn = document.getElementById("login-in")
const logUp = document.getElementById("login-up")

signUp.addEventListener("click", () => {
  logIn.classList.remove("block")
  logUp.classList.remove("none")
  logIn.classList.add("none")
  logIn.classList.add("block")
})
signIn.addEventListener("click", () => {
  logIn.classList.add("block")
  logUp.classList.add("none")
  logIn.classList.remove("none")
  logUp.classList.remove("block")
})
