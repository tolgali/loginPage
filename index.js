// Selectors 
const logInSection = document.querySelector("#log-in")
const signUpSection = document.querySelector("#sign-up")
const btnDiv = document.querySelector("#btn-div")
const btnDiv2 = document.querySelector("#btn-div2")
const btnLogIn = document.querySelector(".btn-login")
const btnSignUp = document.querySelector(".btn-signup")
const btnLogIn2 = document.querySelector(".btn-login2")
const btnSignUp2 = document.querySelector(".btn-signup2")


// Event
btnLogIn.addEventListener("click", () => {
    signUpSection.style.display = "none"
    logInSection.style.display = "block"
})
btnSignUp.addEventListener("click", () => {
    signUpSection.style.display = "block"
    logInSection.style.display = "none"
    btnDiv2.style.right = "0px"
})
btnLogIn2.addEventListener("click", () => {
    signUpSection.style.display = "none"
    logInSection.style.display = "block"
})
btnSignUp2.addEventListener("click", () => {
    signUpSection.style.display = "block"
    logInSection.style.display = "none"
    btnDiv2.style.right = "0px"
})
