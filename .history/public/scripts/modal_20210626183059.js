export default function Modal() {
    function open() {
        document.querySelector(".modal-wrapper").classList.add("active")
    }
    function close() {
        document.querySelector('.modal-wrapper').classList
    }

    return {
        open,
        close
    }
}