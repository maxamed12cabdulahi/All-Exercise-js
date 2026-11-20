

const list = document.querySelector('#list');

function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
}

function removeItem() {
    const lastItem = list.lastChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }else {
        alert('No items to remove!');   
    }
}