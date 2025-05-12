// capture user input
// work with form submission
// prevent reloading page when submitting
// create a paragraph item
// add user input value to recently created paragraph item as innerText
// create an li
// append p element in li

let myform = document.querySelector('form');

myform.onsubmit = function (event) {
    event.preventDefault();
    console.log("Form is submitting...")

    let myInput = document.querySelector('form input');
    let storedValue = myInput.value;

    console.log(storedValue)

    let createdP = document.createElement('p')
    createdP.innerText = storedValue;

    let createdLi = document.createElement('li');
    createdLi.appendChild(createdP);

    let myList = document.querySelector('.list');
    myList.appendChild(createdLi)

    myInput.value = ""


    // work with buttons
    let wrapper = document.createElement('div');
    wrapper.classList.add('actions')
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"

    deleteBtn.onclick = function () {
        myList.removeChild(createdLi);
    }

    let editBtn = document.createElement('button')
    editBtn.innerText = "Edit"

    editBtn.onclick = function () {
        let newValue = prompt("Edit your item:", createdP.innerText);
        if (newValue !== null) {
            createdP.innerText = newValue;
        }

    }


    wrapper.appendChild(deleteBtn)
    wrapper.appendChild(editBtn)

    createdLi.appendChild(wrapper)


}