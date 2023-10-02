document.querySelector('form')
    .addEventListener('submit', function(e) {
        e.preventDefault()
        add()
    })

const ul = document.querySelector('ul')
const input = document.querySelector('input')

function add() {
    if (input.value) {
        const li = document.createElement('li')
        li.innerText = input.value
        ul.appendChild(li)

        input.value = ''
    }
}
