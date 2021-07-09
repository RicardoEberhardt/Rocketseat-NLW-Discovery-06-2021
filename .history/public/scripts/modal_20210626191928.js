export default function Modal() {

    const modalWrapper = 
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        .classList.add("active")
    }
    function close() {
        document.querySelector('.modal-wrapper').classList.remove("active")
    }

    return {
        open,
        close
    }
}