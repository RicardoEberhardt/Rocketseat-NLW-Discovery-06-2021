import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions acheck")

checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        modal.open()
    })
})