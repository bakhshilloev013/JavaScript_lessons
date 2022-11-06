"use strict";
/* AJAX - asinchronius javascript and xml */
// событие "change" это когда пропадает фокус с выбранного элемента. P.S: когда сначала выбрали элемент что-то сделали в ней(не принципиально), потом кликнули вне его или перешли на другой элемент например с помощью клавиши "Tab"

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest(); // присвоили переменной request объект запросов XMLHttpRequest.

  // request.open(method, url, async, login, pass); // собрали все методы и действия. P.S: открыли доступ к способностям конструктора
  // method(первый аргумент он может называться "GET" или "POST") - метод который применяется
  // "GET" - метод запроса к серверу Пример: поиск чего либо
  // "POST" - метод чтобы постить/добавить
  // url(второй аргумент) - путь к серверу указываемый относительно от index.html
  // async - включаем асинхронность
  // login, pass - некоторые действия можно совершать лишь имея логин и пароль

  request.open("GET", "js/current.json"); // используем метод GET и указываем путь к серверу
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  // request.addEventListener("readystatechange", () => { // событие readystatechange объекта request - Отслеживает статус готовности нашего запроса на сервере
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUsd.value = +inputRub.value / data.current.usd;
  //   } else {
  //     alert(`Что-то пошло не так. Код ошибки: ${request.status}`);
  //   }
  // });

  request.addEventListener("load", () => { // событие load объекта request - работает когда запрос полностью загрузился и мы получили какой-то результат
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = +inputRub.value / data.current.usd;
    } else {
      alert(`Что-то пошло не так. Код ошибки: ${request.status}`);
    }
  });

  /* Свойства ответа от сервера */
  // status - показывает статус нашего запроса. Пример: 404 - Not found(не найден), 403 - forbidden(запрещено), 200 - ok(хорошо), 400 - bad request(плохой запрос). P.S: все коды от 200 до 300 положительные ответы, все коды от 400 до 500 клиентская ошибка, все коды от 500 до 600 ошибка сервера
  // statusText - текстовое описание ответа от сервера Пример: OK, forbidden, not found
  // response - ответ от бекэнд разработчика, то что мы должны использовать на клиенте
  // readyState - показывает текущее состояние нашего запроса 0 - UNSENT, 1 - OPENED, 2 - HEADERS_RECEIVED, 3 - LOADING, 4 - DONE.
  /**
   * UNSENT - объект был создан. метод open() не применялся
   * OPENED - метод open() был вызван
   * HEADERS_RECEIVED - метод send() был вызван, доступны заголовки и статус
   * LOADING - загрузка: responsetext содержит различные данные
   * DONE - операция полностьтю завершена
   */
});
