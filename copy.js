const resultInput = document.getElementById('result')

export const copy = document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget //pegando quem acionou o evento (o botao)

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})