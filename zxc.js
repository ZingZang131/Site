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





