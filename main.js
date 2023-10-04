document.querySelector('form')
    .addEventListener('submit', function(e) {
        e.preventDefault()
        add()
    })

const ul = document.querySelector('ul')
const input = document.querySelector('input')

loadFromLocalStorage()

function renderItem(text) {
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')

    li.innerText = text
    deleteButton.innerText = 'x'

    deleteButton.addEventListener('click', remove)

    li.appendChild(deleteButton)
    ul.appendChild(li)
}

function add() {
    if (input.value) {
        renderItem(input.value)

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

function loadFromLocalStorage() {
    const stringItems = localStorage.getItem('todoList')
    if (stringItems) {
        const items = JSON.parse(stringItems)

        for (item of items) {
            renderItem(item)
        }
    }
}
