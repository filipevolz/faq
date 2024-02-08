const itensQuestionAndResponse = document.querySelectorAll('.question-item')

itensQuestionAndResponse.forEach(item => {
    item.addEventListener('click', () => {
        const activatedItem = document.querySelector('.active')
        
        if(activatedItem) {
            activatedItem.classList.remove('active')
        }

        item.classList.add('active')
    })
})