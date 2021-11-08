const addItemBtn = $('#button');
const toDoInput = $('#input');
const toDoList = $('#list');

toDoList.append('<li>learn jquery</li>');

addItemBtn.on('click', addItemHandler);


function addItemHandler(e) {
    e.preventDefault();
    const newItem = toDoInput.val();
    const listItem = `<li>${newItem}</li>`;
    toDoList.append(listItem);
    $('li').last().on('click', strike);
    toDoInput.val('');
}

function strike() {
    this.classList.toggle('strike')   
}