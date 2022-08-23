'use strict';
const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

/* 1. Создать самовызывающуюся функцию и передать ей список задач(объекты) */
(function (arrOfTasks) {
  /* 2. Создать объект объектов */
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  /* 3. Создать оболочко для элементов списка */
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  /* 10. Устанавливаем обработчик удаления */
  listContainer.addEventListener('click', onDeleteHandler);

  /* 9. Вызов формы и элементов формы */
  const form = document.forms['addTask'],
        inputTitle = form.elements['title'],
        inputBody = form.elements['body'];

  /* 9.1. Вызов функции при событии отправки формы */
  form.addEventListener('submit', onFormSubmitHandler);


  /* 4. Создать функцию которая перебирает и создаёт эелемент списка */
  renderAllTasks(objOfTasks);

  function renderAllTasks(tasksList) {
    /* Проверка на наличие списка задач */
    if (!tasksList) {
      console.log("Передайте список задач!");
      return;
    }

    /* 5. Создать фрагмент который будет содержать все добавляемы элементы */
    const fragment = document.createDocumentFragment();

    /* 6. Перебираем каждый элемент списка и передаём другой функции */
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      /* 7. Добавляем готовую ли в фрагмент */
      fragment.append(li);
    });

    /* 8. Добавляем фрагмент в оболочко для эелементов списка => 3. */
    listContainer.append(fragment);
    
  }

  /* 6.1. Функция создания элемента списка */
  function listItemTemplate(obj) {
    /* 6.2. Деструктуризация переданного объекта */
    const { _id, title, body } = obj;

    /* 6.3. Создание элемента li */
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    /* Установка кастомного атрибута */
    li.setAttribute('data-task-id', _id);
    /* 6.4. Создание элемента span */
    const span = document.createElement("span");
    span.textContent = title;
    span.style.cssText = "font-weight: 700";

    /* 6.5. Создание элемента игеещт */
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    btn.textContent = "Delete";

    /* 6.6. Создание элемента p */
    const paragraph = document.createElement("p");
    paragraph.classList.add("mt-2", "w-100");
    paragraph.textContent = body;
    
    /* 6.7. Добавляем все созданные элементы в элемент li */
    li.append(span);
    li.append(btn);
    li.append(paragraph);
    /* 6.8. Возвращаем готовый элемент списка */ 
    return li;
  }

  /* 9.2. Функция события при отправки формы */
  function onFormSubmitHandler(e) {
    e.preventDefault(); // Отмена стандартного поведения страницы
    /* 9.3. Объявление переменных и привязывание к ним значений формы */
    const titleValue = inputTitle.value,
          bodyValue = inputBody.value;
    
    /* 9.4. Проверка на наличие значений */      
    if (!titleValue || !bodyValue) {
      alert('Please fill the form!');
      return;
    }

    /* 9.6. Получение новой задачи(объекта) с новыми значениями от функции  */
    const task = createTask(titleValue, bodyValue);
    /* 9.7. Передача новой задачи в функцию создания элемента списка */
    const listItem = listItemTemplate(task);
    /* 9.8. Добавление нового элемента списка в DOM */
    listContainer.insertAdjacentElement('afterbegin', listItem);
    /* 9.9. Сброс значений формы */
    form.reset();
  }

  /* 9.5. Создание функции создания новой задачи(объекта) */
  function createTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    }

    return { ...newTask};
  }

  /* 10. Функция удаления элемента списка */  // Перед удалением установите кастомный атрибут с id элемента P.S: 6 функция
  function onDeleteHandler(e) {
    /* 10.1. Деструктурируем обработчик события на нужный на нужную нам событие */
    const { target } = e; 
    /* 10.2. Проверка нажимаемого элемента на наличие необходимого класса  */
    if (target.classList.contains('delete-btn')) {
      /* 10.3. Находим ближайшего родителя с указанным аттрибутом и его id */
      const parent = target.closest('[data-task-id]'),
            id = parent.dataset.taskId; // taskId - это task-id, потому что в объекте data она будет содержаться в виде camelCase
      
      /* 10.4. Вызов функции удаления и установка предаваемого значения на переменную */
      const result = deleteTask(id);

      /* 10.9. Вызов функции удаления элемента из вёрстки */
      deleteTaskFromHtml(result, parent); // Передаём результат ответа пользователя и сам элемент
      
    } 
  }

  /* 10.5. Функция удаления элемента */
  function deleteTask(id) {
    /* 10.6. Деструктурируем определёный объект с помощью полученной id  */
    const { title } = objOfTasks[id];
    /* 10.7. Спрашиваем у пользователя разрешение на удаление и результат прописываем в переменную */
    const isConfirm = confirm(`Do you sure to delete this task: ${title}`);
    
    /* 10.8. По разрешению пользователя удаляем указанный элемент из объекта объектов objOfTasks */
    if (isConfirm) {
      delete objOfTasks[id];
      return isConfirm;
    } else {
      return isConfirm;
    }


  }

  /* 11. Функция удаления элемента из вёрстки */
  function deleteTaskFromHtml(res, element) {
    // По разрешению пользователя удаляем элемент
    if (res) {
      element.remove();
    }
  }
  
})(tasks);
