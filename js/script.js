const addItemBtn = $('.to-do__btn');
const toDoInput = $('#add-item');
const toDoList = $('.to-do__list');

toDoList.append('<li>learn jquery</li>');

addItemBtn.on('click', addItemHandler);

function addItemHandler() {
    const newItem = toDoInput.val();
    toDoList.append(`<li>${newItem}</li`);
    toDoInput.val('');
}