const ip = document.querySelector('#ip');
const add = document.querySelector('#add');
const taskList = document.querySelector('#tasklist');
const work = document.querySelector('#work');

add.addEventListener('click', () => {
    taskList.classList.remove('d-none');
    if (ip.value.trim() !== '') { // Check if input is not empty
        const taskText = ip.value;
        const listItem = document.createElement('li');

        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('taskWrapper')
        listItem.appendChild(taskWrapper);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskWrapper.appendChild(checkbox);
        checkbox.classList.add('checkbox');

        const taskLabel = document.createElement('p');
        taskLabel.textContent = taskText;
        taskWrapper.appendChild(taskLabel);
        taskLabel.classList.add('taskLabel');

        taskList.appendChild(listItem);

        const close = document.createElement('span');
        close.innerHTML = '<i class="fa-solid fa-square-xmark 2x"></i>';
        listItem.appendChild(close);
        close.classList.add('close');

        close.addEventListener('click', closeBtnCall);

        ip.value = ''; // Clear input after adding task
        work.classList.remove('d-none');
    }
});

function closeBtnCall() {
    this.parentNode.remove(); // Remove the clicked task item
}



