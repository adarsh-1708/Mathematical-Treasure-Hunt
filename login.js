let form = document.querySelector("form")
let firstname = document.querySelector("input")
let email = document.querySelector("input")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (email.value == 0) {
        alert("Try Again .. ")

    } else if (email.value != 0) {
        window.location.href = 'Ramanujan.html'
    } else {
        console.log("Some other error");
    }
})