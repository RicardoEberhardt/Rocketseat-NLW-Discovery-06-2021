import { Modal } from './modal'

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.eventListener("click", {
        modal.open()
    })
})