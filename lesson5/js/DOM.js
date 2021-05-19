const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.addEventListener('click',function() {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBnt = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete ❌';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }
    input.focus();
}

