const form = document.querySelector('form');
const todoUl = document.querySelector('#items')
const comUl = document.querySelector('.comlist-ul')
const inputElement = document.querySelector('input[type=text]')

//create and add task here

function addTask(event) {
    event.preventDefault();
    let inputvalue = inputElement.value;

    if(!inputvalue === ""){

    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    
    checkbox.type = "checkbox";
    label.innerText = inputvalue

    listItem.appendChild(checkbox);
    listItem.appendChild(label)


    todoUl.appendChild(listItem)
    inputElement.value = "";
    }else{
        alert("You must have to enter task name!")
    }

    saveData()
} 


form.addEventListener('submit',
addTask)

todoUl.addEventListener('click', function(event) {
    if(event.target.tagName === "INPUT") {
        let li = event.target.parentNode;
        let deletebtn = document.createElement('button');
        deletebtn.innerText = "Delete";
        deletebtn.className = 'delete';
    
        let checkbox = li.querySelector('input[type="checkbox"]')
        li.removeChild(checkbox)

        li.appendChild(deletebtn)

        comUl.appendChild(li)
    }

    saveData()
} )

comUl.addEventListener('click', function(event) {
    if(event.target.tagName === "BUTTON"){
        let li = event.target.parentNode;

        comUl.removeChild(li)
    }

    saveData()
})


function saveData() {
    localStorage.setItem('data1', todoUl.innerHTML)
    localStorage.setItem('data2', comUl.innerHTML)
    
}


function showData() {
    todoUl.innerHTML = localStorage.getItem('data1')
    comUl.innerHTML = localStorage.getItem('data2')
}

showData()
