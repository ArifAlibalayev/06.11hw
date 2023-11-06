const submit = document.querySelector('input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('ul')
const jkr = document.querySelectorAll('ul li')

btn.addEventListener("click", function() {
    if (submit.value === "") {
        alert('Please, fill the input box.')
        ul.removeChild(list)
    }
    let list = document.createElement('li')
    let close = document.createElement("strong")
    close.innerHTML = "x "
    list.innerHTML = submit.value
    ul.appendChild(list)
    list.append(close)
    submit.value = ''


    list.addEventListener("click", function() {
        list.classList.toggle('active')
    })

    close.addEventListener("click", function() {
        list.remove(list)
    })

})