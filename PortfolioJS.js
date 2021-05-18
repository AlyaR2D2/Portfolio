const openModelButtons = document.querySelectorAll('[data-modal-target]')
//const closeModelButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = document.querySelector(button.dataset.modalTarget)
        openModal(window);
        }
    )
})

/*closeModelButtons.forEach(button => {
    button.addEventListener('click', () => {
            const modal = button.closest('modal')
            closeModal(modal)
        }
    )
})*/

function openModal(window){
    if(window == null) return
    window.classList.add('active')
    overlay.classList.add('active')
}
/*function closeModal(modal){
    if(modal == null){
        return
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}*/