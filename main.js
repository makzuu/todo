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
        const button = document.createElement('button')

        li.innerText = input.value
        button.innerText = 'x'

        button.addEventListener('click', remove)

        li.appendChild(button)
        ul.appendChild(li)

        input.value = ''

        saveToLocalStorage()
    }
}

function remove(e) {
    e.target.parentElement.remove()
    saveToLocalStorage()
}

function saveToLocalStorage() {
    const items = []
    for (const item of ul.children) {
        items.push(item.firstChild.data)
    }

    localStorage.setItem('todoList', JSON.stringify(items))
}
