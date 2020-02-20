const input = document.querySelector('input');


const submitBtn = document.querySelector('.addBtn');
const list = document.querySelector('ul');


const addNewElement = () => {
    if (input.value === '') return;
    const newLi = document.createElement('li');
    newLi.classList.add('transition');
    newLi.innerHTML = `${input.value} <i onclick="remove()" class="fas fa-times"></i>`;
    list.appendChild(newLi);
    input.value = '';

}

input.addEventListener('keypress', e => {
    if (e.key === 'Enter') addNewElement();
})
submitBtn.addEventListener('click', addNewElement);

function remove() {
    let target = window.event.srcElement;

    target.parentNode.classList.add('animate');
    setTimeout(function () {
        list.removeChild(target.parentNode);
    }, 350);

}