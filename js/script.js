const addItemBtn = $('#button');
const toDoInput = $('#input');
const toDoList = $('#list');
toDoList.sortable();


addItemBtn.on('click', addItemHandler);


function addItemHandler(e) {
    e.preventDefault();
    const newItem = toDoInput.val();
    if (!newItem) {
        return alert('Please enter an item');
    }
    const listItem = $(`<li>${newItem}</li>`);
    toDoList.append(listItem);
    // add event listener
    listItem.on('dblclick', strike.bind(null,listItem));
    // add delete button
    const deleteBtn = $('<button class="crossOutButton">X</button>');
    listItem.append(deleteBtn);
    deleteBtn.on('click', deleteItem.bind(null, listItem))
    toDoInput.val('');
}

function strike(item) {
    item.toggleClass('strike');
}

function deleteItem(item) {
    item.remove();
}