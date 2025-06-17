// Скрипт для навигации по внутренним якорям страницы
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
// Массив объектов с информацией о филиалах
const branches = [
    { city: 'moscow', address: 'г. Москва, ул. Автозаводская, д. 17', phone: '+7 (495) 123-45-67', email: 'info@autoservice.ru' },
    { city: 'spb', address: 'г. Санкт-Петербург, Невский проспект, д. 50', phone: '+7 (812) 987-65-43', email: 'spb@autoservice.ru' }
];

// Функция обновления информации
function updateContactInfo(cityCode) {
    // Найдем объект нужного филиала
    const branch = branches.find(branch => branch.city === cityCode);
    
    if (!branch) return;

    // Получим DOM-элемент для контакта
    const contactElement = document.getElementById("contact-info");

    // Установим новую информацию
    contactElement.innerHTML = `
        Адрес: ${branch.address}<br>
        Телефон: ${branch.phone}<br>
        Email: ${branch.email}
    `;
}

// При изменении селекта обновляем контактные данные
document.getElementById("city-select").addEventListener("change", function() {
    const selectedCity = this.value;
});
document.addEventListener("DOMContentLoaded", function() {
  console.log("страница загрузилась");

  // 1. Кнопка с onclick и addEventListener
  const myButton = document.createElement("button");
  myButton.textContent = "Кнопка";
  document.body.appendChild(myButton);

  myButton.onclick = function() {
    console.log("событие onclick");
  };

  myButton.addEventListener("click", function() {
    console.log("событие addEventListener");
  });

  // 2. Кнопки 1, 2, 3
  for (let i = 1; i <= 3; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function() {
      console.log(this);
    });
    document.body.appendChild(button);
  }

  // 3. Кнопка 4 (счетчик кликов)
  let clickCount = 0;
  const button4 = document.createElement("button");
  button4.textContent = "4";
  button4.addEventListener("click", function() {
    clickCount++;
    console.log("Количество нажатий на кнопку 4: " + clickCount);
  });
  document.body.appendChild(button4);

  // 4. Кнопка 5 (изменение текста)
  const button5 = document.createElement("button");
  button5.textContent = "5";
  button5.addEventListener("click", function() {
    this.textContent = "Вы нажали на эту кнопку";
  });
  document.body.appendChild(button5);

  // 5. Кнопка добавления заголовка
  const addButton = document.createElement("button");
  addButton.textContent = "Добавить заголовок";
  document.body.appendChild(addButton);

  // 6. Кнопка удаления заголовка
  const removeButton = document.createElement("button");
  removeButton.textContent = "Удалить заголовок";
  document.body.appendChild(removeButton);

  let heading;

  addButton.addEventListener("click", function() {
    heading = document.createElement("h1");
    heading.textContent = "Новый заголовок";
    addButton.parentNode.insertBefore(heading, addButton.nextSibling);
  });

  removeButton.addEventListener("click", function() {
    if (heading) {
      heading.remove();
      heading = null;
    }
  });

  // 7. Кнопка hover
  const hoverButton = document.createElement("button");
  hoverButton.textContent = "Наведи на меня";
  document.body.appendChild(hoverButton);

  hoverButton.addEventListener("mouseover", function() {
    console.log("вы навели на данную кнопку");
  });

  hoverButton.addEventListener("mouseout", function() {
    console.log("Наведения на кнопку больше нет");
  });

  // 8. Список
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Элемент " + i;
    ul.appendChild(li);
  }

  // 9. Кнопка добавления элемента списка
  const addListItemButton = document.createElement("button");
  addListItemButton.textContent = "Добавить элемент списка";
  document.body.appendChild(addListItemButton);

  // 10. Кнопка удаления элемента списка
  const removeListItemButton = document.createElement("button");
  removeListItemButton.textContent = "Удалить первый элемент списка";
  document.body.appendChild(removeListItemButton);

  addListItemButton.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "новый элемент списка";
    ul.appendChild(li);
  });

  removeListItemButton.addEventListener("click", function() {
    if (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

  // 11. Кнопка добавления класса
  const addClassButton = document.createElement("button");
  addClassButton.textContent = "Добавить класс кнопке";
  document.body.appendChild(addClassButton);

  addClassButton.addEventListener("click", function() {
    this.classList.add("click");
  });

  // 12. Кнопка "Отправить" в content div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  document.body.appendChild(contentDiv);

  const sendButton = document.createElement("button");
  sendButton.textContent = "Отправить";
  contentDiv.appendChild(sendButton);

  sendButton.addEventListener("click", function() {
    this.textContent = "Текст отправлен";
  });
});

/* prac 8 */
/* 1 */
window.onload = function() {
    console.log("страница загрузилась");
};

document.getElementById('myButton').onclick = function() {
    console.log("событие onclick");
};

document.getElementById('myButton').addEventListener('click', function() {
    console.log("событие addEventListener");
});
/* 2 */
document.querySelectorAll('.numbered-buttons').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        console.log(`Номер нажатой кнопки: ${number}`);
    });
});

let clickCount = 0;

document.getElementById('counting-button').addEventListener('click', () => {
    clickCount++;
    console.log(`Количество нажатий на кнопку №4: ${clickCount}`);
});

document.getElementById('change-text-button').addEventListener('click', () => {
    this.textContent = 'Вы нажали на эту кнопку';
});
/* 3 */
document.getElementById('add-header-btn').addEventListener('click', () => {
    const newHeader = '<h1>Новый заголовок</h1>';
    document.getElementById('add-header-btn').insertAdjacentHTML('afterend', newHeader);
});

document.getElementById('remove-header-btn').addEventListener('click', () => {
    const headerToRemove = document.querySelector('h1');
    if (headerToRemove) {
        headerToRemove.remove();
    }
});

const hoverCounterButton = document.getElementById('hoverCounter');
const counterDisplay = document.getElementById('counterDisplay');
// Переменная для хранения количества наведений
let count = 0;
// Обработчик события mouseover (наведение)
hoverCounterButton.addEventListener('mouseover', () => {
    count++; // Увеличим счётчик на единицу
    counterDisplay.textContent = `Кол-во наведений: ${count}`; // Обновим текст
});
/* 4 */
// Список
const list = document.getElementById('list');
// Создаем начальные пункты списка
['Первый пункт', 'Второй пункт', 'Третий пункт'].forEach(itemText => {
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
});

// Кнопка добавления нового элемента
document.getElementById('add-item-btn').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    list.appendChild(newItem);  
});

// Кнопка удаления первого элемента
document.getElementById('delete-first-btn').addEventListener('click', () => {
    if (list.firstElementChild) { // Проверяем наличие хотя бы одного элемента
        list.removeChild(list.firstElementChild);
    }
});

// Кнопка добавления класса (не работает:( )
document.getElementById('class-click-btn').addEventListener('click', () => {
    this.classList.toggle ('click'); // Переключаем класс 'click'
});
/* 5 */
// Контейнер div.content
const contentDiv = document.querySelector(".content");

// Создаем новую кнопку
const newButton = document.createElement("button");
newButton.textContent = "Отправить";

// Добавляем кнопку в контейнер
contentDiv.appendChild(newButton);

// Назначаем обработчик события клика
newButton.addEventListener("click", () => {
    newButton.textContent = "Текст отправлен";
});

/* samrab 8 prac */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("Все теги прогрузились"); 
});

window.addEventListener("load", () => {
    console.log("Страница загрузилась"); 
});

document.addEventListener("click", event => {
    const element = event.target; const tagName = element.tagName.toLowerCase();
    const hasSuperElement = element.classList.contains("super_element");
    if (hasSuperElement) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else { console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`); }
});

document.querySelector("textarea").addEventListener("mouseover", () => {
    console.log("Вы навели на textarea."); 
}); 
document.querySelector("ul").addEventListener("click", event => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON") {
        console.log(clickedElement.textContent.trim())
    }
});

document.querySelectorAll("li:nth-child(even)").forEach(li => { });

/* prac 9 */
/* 1 */
const checkbox = document.getElementById('agreementCheckbox');
const submitButton = document.getElementById('submitButton');
const warningMessage = document.getElementById('warningMessage');
submitButton.addEventListener('click', function (event) {
    if (!checkbox.checked) {
        warningMessage.style.display = 'block';
        event.preventDefault();
    } else {
warningMessage.style.display = 'none';
}
}); 
/* 2 */
const sendButton = document.getElementById('sendButton');
const messageOutput = document.getElementById('messageOutput');
sendButton.addEventListener('click', function () { 
const selectedDrink = document.querySelector('input[name="drink"]:checked');
if (selectedDrink) {
if (selectedDrink.value === 'tea') {
messageOutput.textContent = 'Чай закончился';
} else if (selectedDrink.value === 'coffee') {
messageOutput.textContent = 'Кофе закончился';
} } else { messageOutput.textContent = 'Нужно выбрать напиток!'; }
});
/* 3 */
// Проверка пароля
document.getElementById('check-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input');
    const messageElement = document.getElementById('password-message');
    
    // Удаляем предыдущие классы
    passwordInput.classList.remove('correct', 'incorrect');
    messageElement.textContent = '';
    
    if (passwordInput.value.toLowerCase() === 'пароль') {
        passwordInput.classList.add('correct');
    } else {
        passwordInput.classList.add('incorrect');
        messageElement.textContent = 'Пароль неверный';
    }
});
document.getElementById('password-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('check-password').click();
    }
});

// Динамическое изменение заголовка
document.getElementById('title-input').addEventListener('input', function() {
    const heading = document.getElementById('dynamic-heading');
    heading.textContent = this.value || 'Заголовок'; // Если поле пустое, вернется "Заголовок"
});
// Часть 1: Отображение значения input в span
document.getElementById('from').addEventListener('input', function() {
    document.getElementById('output').textContent = this.value;
});

// Часть 2: Анимация по клику
// Получаем элементы
const button = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');

// Обработчик события click
button.addEventListener('click', () => {
    // Добавляем классы для анимации
    messageElement.classList.add('animate_animated', 'animate_fadeInLeftBig');

    // Изменяем видимость элемента
    messageElement.style.visibility = 'visible';
});

// Часть 3: Валидация формы
const form = document.getElementById('validationForm');
const inputs = form.querySelectorAll('input');

// Проверка при отправке формы
form.addEventListener('submit', function(e) {
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});

// Проверка при вводе
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    });
});





