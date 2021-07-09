import { Modal } from ''

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.eventListener("click", event => {
        modal.open()
    })
})