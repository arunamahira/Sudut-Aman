function onEyePasswordClick(element) {
    console.log(element,'--> sesuatu')
    const inputPassword = document.getElementById("loginpassword")
    const typePassword = inputPassword.getAttribute("type")
    console.log(typePassword, '--> sesuatu 2')
    const elementClass = element.classList
    if (typePassword == "password") {
        inputPassword.setAttribute("type", "text")
        elementClass.remove("bx-hide")
        elementClass.add("bx-show")
    } else {
        inputPassword.setAttribute("type", "password")
        elementClass.remove("bx-show")
        elementClass.add("bx-hide")
    }
}

function onEyePasswordSignUp(element) {
    console.log(element,'--> sesuatu')
    const inputPassword = document.getElementById("signuppassword")
    const typePassword = inputPassword.getAttribute("type")
    console.log(typePassword, '--> sesuatu 2')
    const elementClass = element.classList
    if (typePassword == "password") {
        inputPassword.setAttribute("type", "text")
        elementClass.remove("bx-hide")
        elementClass.add("bx-show")
    } else {
        inputPassword.setAttribute("type", "password")
        elementClass.remove("bx-show")
        elementClass.add("bx-hide")
    }

}



