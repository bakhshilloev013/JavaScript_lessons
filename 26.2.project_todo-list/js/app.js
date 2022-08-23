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

  /* 12. Темы для проекта */
  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = 'default';

  /* 3. Создать оболочко для элементов списка */
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  
  /* 9. Вызов формы и элементов формы */
  const form = document.forms['addTask'],
        inputTitle = form.elements['title'],
        inputBody = form.elements['body'];

  /* 12. Вызов селекта с HTML */      
  const themeSelect = document.querySelector('#themeSelect');
  /* 12.1. Устанавливаем обработчик события и функция на селект */
  themeSelect.addEventListener('change', onThemeSelectHandler);

  /* 10. Устанавливаем обработчик удаления */
  listContainer.addEventListener('click', onDeleteHandler);
  
  /* 9.1. Вызов функции при событии отправки формы */
  form.addEventListener('submit', onFormSubmitHandler);

  /* Other tasks */
  
  /* Other tasks end */

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

    

  };

  /* 11. Функция удаления элемента из вёрстки */
  function deleteTaskFromHtml(res, element) {
    // По разрешению пользователя удаляем элемент
    if (res) {
      element.remove();
    }
  }
  
  /* 12.2. Функционал селекта   */
  function onThemeSelectHandler(e) {
    /* 12.3. Устанавливаем значение селекта в переменную */
    const selectedTheme = themeSelect.value;
    /* 12.4. Спрашиваем у пользователя разрешение на изменение темы */
    const isConfirmed = confirm(`Do you sure change theme to: ${selectedTheme}`);
    /* 12.5. Ветвление если пользовател даст согласие вызовим функционал изменения темы */
    if (isConfirmed) {
      setTheme(selectedTheme);
      /* 12.6. Устанавливаем в последнюю выбранную тему новую выбранное значение */
      lastSelectedTheme = selectedTheme;
    } else {
      /* 12.7. Иначе устанавливаем последнее выбранное */
      themeSelect.value = lastSelectedTheme;
    };
  }

  /* 12.8. Функционал изменения темы */
  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    })
  }

})(tasks);
