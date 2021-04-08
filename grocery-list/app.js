// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', submit);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

function createItem(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    element.querySelector('.delete-btn').addEventListener('click', deleteItem);
    element.querySelector('.edit-btn').addEventListener('click', editItem);
    list.appendChild(element);
}

function addItem(value) {
    //not a good method to generate IDs for serious projects
    const id = new Date().getTime().toString();
    createItem(id, value);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
    addToLocalStorage(id, value);
    setBackToDefault();
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    const items = document.querySelectorAll('.grocery-item');
    if (!items.length) { container.classList.remove('show-container'); }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = 'edit';
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length) { items.forEach(item => list.removeChild(item)); }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

function submit(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value && !editFlag) {
        addItem(value);
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const items = localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : {};
    items[id] = value;
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    const items = JSON.parse(localStorage.getItem('list'));
    delete items[id];
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    const items = JSON.parse(localStorage.getItem('list'));
    items[id] = value;
    localStorage.setItem('list', JSON.stringify(items));
}

// ****** SETUP ITEMS **********
function setupItems() {
    const items = JSON.parse(localStorage.getItem('list'));
    for (const id in items) {
        createItem(id, items[id]);
        container.classList.add('show-container');
    }
}