const btnLogin = document.querySelector('.btn-login') // para selecionar o buton
const form = document.querySelector('form') // para selecionar o formulario.



btnLogin.addEventListener('click', (event) => { // pediu pora ouvir o click e acionar a função
        event.preventDefault() // impedir o evento de acontecer sem antes validar

        const validar = [...document.querySelectorAll(".input-block input")]
        validar.forEach(item => {
                if (item.value === '') form.classList.add('validate-error')

            }) // percorrer o item por meio forEach e validar se possui erro



        const formErro = document.querySelector('validate-error')
        if (formErro) {
            formErro.addEventListener('animationend', (event) => {
                if (event.animationName === 'nono') {
                    formErro.classList.remove('validate-error')
                }
            })
        } else {
            form.classList.add("form-hide")

        }

    })
    // linha de baixo: quando for valido certo
form.addEventListener('animationstart', (event) => {
        // pediu pora ouvir o click e acionar o evento
        if (event.animationName === 'down') { // se o evento for igual, ira
            document.querySelector('body').style.overflow = 'hidden' // selecionar o body e utilizar o valor css para causar a animação
        }
    })
    // quando a validação estiver errada
form.addEventListener('animationend', (event) => {
    if (event.animationName === 'down') {
        form.style.display = 'none' //
        document.querySelector('body').style.overflow = 'none'

    }
})