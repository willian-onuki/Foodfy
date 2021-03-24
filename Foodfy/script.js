const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgID = card.getAttribute("id")

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `img/${imgID}.png` /* Não entendi o pq ele não pega as outras img, sendo q não tem nenhuma classe declarada para diferenciar de outras img */
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    /*modalOverlay.querySelector('food').src = ``*/ 
})