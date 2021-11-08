const addItemBtn = $('.to-do__btn');
const toDoInput = $('#add-item');
const toDoList = $('.to-do__list');

toDoList.append('<li>learn jquery</li>');

addItemBtn.on('click', addItemHandler);


function addItemHandler(e) {
    e.preventDefault();
    const newItem = toDoInput.val();
    const listItem = `<li>${newItem}</li>`;
    toDoList.append(listItem).on('click', strike);
    toDoInput.val('');
}

function strike() {
   $('li').addClass('strike').fadeOut(1000)
   
}