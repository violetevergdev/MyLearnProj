/** @format */

(function () {
  let todoArray;
  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавь дело";
    button.disabled = true;

    input.addEventListener("keyup", function () {
      if (input.value.length > 0) {
        button.disabled = false;
      } else if (input.value.length == 0) {
        button.disabled = true;
      }
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  // создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  // создаем функцию, которая создаем элемент для списка дел и вернет необходимое для взаимодействия с этим элементом
  function createTodoItem(name) {
    let item = document.createElement("li");
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    const randomId = Math.random() * 15.75;
    item.id = randomId.toFixed(2);

    // добавляем классы для элемента списка, а также размещения кнопок в его правой части с помощью flex
    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    item.textContent = name;

    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";

    // вкладываем кнопки в отдельный елемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывались события нажатия
    return {
      item,
      doneButton,
      deleteButton,
      buttonGroup,
    };
  }

  //======================
  const changeItemDone = (arr, item) => {
    arr.map((obj) => {
      if ((obj.id === item.id) & (obj.done === false)) {
        obj.done = true;
      } else if ((obj.id === item.id) & (obj.done === true)) {
        obj.done = false;
      }
    });
  };
  //=======================
  const completeTodoItem = (item, btn) => {
    btn.addEventListener("click", () => {
      todoArray = JSON.parse(localStorage.getItem(key));
      item.classList.toggle("list-group-item-success");
      changeItemDone(todoArray, item);

      localStorage.setItem(key, JSON.stringify(todoArray));
    });
  };

  //=====================
  const deleteTodoItem = (item, btn) => {
    btn.addEventListener("click", () => {
      if (confirm("Вы уверены?")) {
        todoArray = JSON.parse(localStorage.getItem(key));

        const neaList = todoArray.filter((obj) => obj.id !== item.id);

        localStorage.setItem(key, JSON.stringify(neaList));
        item.remove();
      }
    });
  };
  //=====================

  //
  function createTodoApp(container, title, key) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // ===================
    if (localStorage.getItem(key)) {
      todoArray = JSON.parse(localStorage.getItem(key));

      for (const obj of todoArray) {
        const todoItem = createTodoItem(todoItemForm.input.value);

        todoItem.item.textContent = obj.name;
        todoItem.item.id = obj.id;

        if (obj.done == true) {
          todoItem.item.classList.add("list-group-item-success");
        } else {
          todoItem.item.classList.remove("list-group-item-success");
        }

        completeTodoItem(todoItem.item, todoItem.doneButton);
        deleteTodoItem(todoItem.item, todoItem.deleteButton);

        todoList.append(todoItem.item);
        todoItem.item.append(todoItem.buttonGroup);
      }
    }
    // ===================

    // браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener("submit", function (e) {
      // эта строчка необходима, чтобы предотвратить стандартное действие браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value);

      completeTodoItem(todoItem.item, todoItem.doneButton);
      deleteTodoItem(todoItem.item, todoItem.deleteButton);

      // ================================================================
      let localStorageData = localStorage.getItem(key);

      if (localStorageData == null) {
        todoArray = [];
      } else {
        todoArray = JSON.parse(localStorageData);
      }

      const createItemObj = (arr) => {
        const itemObj = {};
        itemObj.name = todoItemForm.input.value;
        itemObj.id = todoItem.item.id;
        itemObj.done = false;

        arr.push(itemObj);
      };
      createItemObj(todoArray);
      localStorage.setItem(key, JSON.stringify(todoArray));
      // =======================================================================

      // создаем и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItem.item);

      // обнуляем значение в полне, чтобы не стирать его вручную
      todoItemForm.input.value = "";
    });
  }

  window.createTodoApp = createTodoApp;
})();
