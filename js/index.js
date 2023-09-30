var elementosPergunta = document.querySelectorAll('.pergunta')

elementosPergunta.forEach(function (pergunta) {
    pergunta.addEventListener('click', function() {
        pergunta.classList.toggle('ativa')
    })
})
console.log(elementosPergunta)