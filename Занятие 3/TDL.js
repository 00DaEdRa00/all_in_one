const add_btn = document.getElementById('add_btn');

/* начальная надпись*/
const empty = document.getElementById('empty_state');

/*Изначально скрытый контейнер задач*/
const tasks_container = document.getElementById("tasksContainer");

const tasksList = document.getElementById('tasksList');

let taskIdCounter = 1;
let currentTaskId = null;

// Эл мод окна
const modalOverlay = document.getElementById('modalOverlay');
const taskInput = document.getElementById('taskInput');
const modalTitle = document.getElementById('modalTitle');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');

add_btn.addEventListener('click', () => openModal('add'));
cancelBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', saveTask);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Открытие модального окна
function openModal(mode, taskId = null, currentText = '') {
  if (mode === 'add') {
    modalTitle.textContent = 'Новая задача';
    taskInput.value = '';
    currentTaskId = null;
  } else if (mode === 'edit') {
    modalTitle.textContent = 'Редактировать задачу';
    taskInput.value = currentText;
    currentTaskId = taskId;
  }
  
  modalOverlay.classList.remove('hidden');
  taskInput.focus();
}

// Закрытие модального окна
function closeModal() {
  modalOverlay.classList.add('hidden');
  taskInput.value = '';
  currentTaskId = null;
}

// Сохранение задачи (добавление или редактирование)
function saveTask() {
  const text = taskInput.value.trim();
  
  if (text === '') {
    alert('Введите текст задачи!');
    return;
  }
  
  if (currentTaskId === null) {
    // Добавление новой задачи
    addNewTask(text);
  } else {
    // Редактирование существующей
    editExistingTask(currentTaskId, text);
  }
  
  closeModal();
}

// Добавление новой задачи
function addNewTask(text) {
  empty.classList.add('hidden');
  tasks_container.classList.remove('hidden');
  
  const li = document.createElement('li');
  li.className = 'task-item';
  li.dataset.id = taskIdCounter++;
  
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="task-actions">
      <button class="edit-btn" title="Редактировать">✎</button>
      <button class="delete-btn" title="Удалить">×</button>
    </div>
  `;
  
  tasksList.appendChild(li);
  
  // Анимка появления
  setTimeout(() => {
    li.style.opacity = '1';
    li.style.transform = 'translateY(0)';
  }, 10);
}

// Редактирование существующей задачи
function editExistingTask(taskId, newText) {
  const taskItem = document.querySelector(`.task-item[data-id="${taskId}"]`);
  if (taskItem) {
    const taskText = taskItem.querySelector('.task-text');
    taskText.textContent = newText;
    
    // Анимка обновления
    taskItem.style.background = 'linear-gradient(145deg, #2a2a2c, #323234)';
    setTimeout(() => {
      taskItem.style.background = 'linear-gradient(145deg, #1a1a1c, #222224)';
    }, 300);
  }
}

// делегирование событий
tasksList.addEventListener('click', function(event) {
  const target = event.target;
  const taskItem = target.closest('.task-item');
  
  if (!taskItem) return;
  
  const taskId = taskItem.dataset.id;
  const taskText = taskItem.querySelector('.task-text').textContent;
  
  // удаление
  if (target.classList.contains('delete-btn')) {
    event.stopPropagation();
    deleteTask(taskItem);
  }
  
  // редактирование
  else if (target.classList.contains('edit-btn')) {
    event.stopPropagation();
    openModal('edit', taskId, taskText);
  }
  
  // Клик по тексту или карточке
  else if (target.classList.contains('task-text') || target === taskItem) {
    toggleTaskDone(taskItem);
  }
});

// Функция удаления задачи
function deleteTask(taskElement) {
  taskElement.style.opacity = "0";
  taskElement.style.transform = "translateX(100px)";
  
  setTimeout(() => {
    taskElement.remove();
    
    if (tasksList.children.length === 0) {
      tasks_container.classList.add("hidden");
      empty.classList.remove('hidden');
    }
  }, 300);
}

// отметки задачи как выполненной
function toggleTaskDone(taskElement) {
  taskElement.classList.toggle('done');
}

// Закрытие модального окна Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});