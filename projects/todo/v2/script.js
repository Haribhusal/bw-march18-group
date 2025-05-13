// capture user input
// work with form submission
// prevent reloading page when submitting
// create a paragraph item
// add user input value to recently created paragraph item as innerText
// create an li
// append p element in li


// console.log(localStorage)
// localStorage.setItem('ourCourse', "web design")

// let storedItem = localStorage.getItem('ourCourse')
// console.log(storedItem)

// let course = '             web           desiging    course       '
// let trimmed = course.trim();
// console.log(trimmed)

let todos = JSON.parse(localStorage.getItem('myTodos')) || [];
let myform = document.querySelector('form');

function saveTodos() {
    localStorage.setItem('myTodos', JSON.stringify(todos))
}

function showTodos() {
    let myList = document.querySelector('.list');
    myList.innerHTML = ''


    todos.forEach((todoItem, index) => {

        let createdLi = document.createElement('li');
        let createdP = document.createElement('p')
        createdP.innerText = todoItem;


        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"

        let editBtn = document.createElement('button')
        editBtn.innerText = "Edit"


        let wrapper = document.createElement('div');
        wrapper.classList.add('actions')


        wrapper.appendChild(deleteBtn)
        wrapper.appendChild(editBtn)

        createdLi.appendChild(createdP);
        createdLi.appendChild(wrapper)

        // work with buttons

        deleteBtn.onclick = function () {
            todos.splice(index, 1);
            saveTodos();
            showTodos();
        }
        editBtn.onclick = function () {
            let newValue = prompt("Edit your item:", todoItem);

            if (newValue && newValue.trim() !== '') {
                todos[index] = newValue
                saveTodos();
                showTodos();
            }
        }
        myList.appendChild(createdLi)
    })
}


myform.onsubmit = function (event) {
    event.preventDefault();
    console.log("Form is submitting...")
    let myInput = document.querySelector('form input');
    let storedValue = myInput.value.trim();
    if (!storedValue) return;
    todos.push(storedValue)
    // console.log(storedValue)
    saveTodos();
    showTodos();
    myInput.value = ""

}

showTodos();