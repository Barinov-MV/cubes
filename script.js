// Получаем контейнеры и кнопки
const controls = document.querySelector('#controls') 
const buttons = document.querySelector('#buttons') 
const flexContainer = document.querySelector('#flexContainer') 

// Обрабатываем нажатие кнопки
buttons.addEventListener('click', (e) => { 
 // Нас интересует только нажатие кнопки
 if (e.target.tagName !== 'BUTTON') return
 
 // Получаем название кнопки
 const { btn } = e.target.dataset 
 
 switch (btn) { 
 // Если нажата кнопка для добавления элемента во флекс-контейнер
 case 'addBtn': 
 // Максимальное количество элементов составляет 6 единиц
 // При большем количестве произойдет переполнение флекс-контейнера
 // Определяем порядковый номер элемента
 const num = document.querySelectorAll('.flex-item').length + 1
 // Проверяем, что в контейнере находится меньше 7 элементов
 // Если это так
 if (num < 7) { 
 // Создаем новый элемент "div"
 const newItem = document.createElement('div') 
 // Добавляем ему соответствующий класс
 newItem.className = 'flex-item'
 // Нумеруем его
 newItem.textContent = num 
 // И помещаем во флекс-контейнер
 flexContainer.append(newItem) 
 } 
 break
 // Если нажата кнопка для удаления флекс-элемента
 case 'removeBtn': 
 // Определяем индекс последнего элемента
 const index = document.querySelectorAll('.flex-item').length - 1
 // Проверяем, что индекс последнего элемента больше 0
 // Мы не хотим удалять единственный флекс-элемент
 if (index > 0) { 
 // Определяем элемент, подлежащий удалению
 const itemToRemove = document.querySelectorAll('.flex-item')[index] 
 // И удаляем его
 itemToRemove.remove() 
 } 
 break
 } 
}) 
controls.addEventListener('change', (e) => { 
 // Получаем название измененного свойства
 const prop = e.target.id 
 // Получаем значение измененного свойства
 const value = e.target.value 
 // Проверяем, какое свойство изменилось
 // Свойство флекс-контейнера или свойство выбранного флекс-элемента
 // И добавляем соответствующие свойства и значения
 if (e.target.parentElement.id === 'flexContainerProps') { 
 flexContainer.style[prop] = value 
 } else { 
 const selectedItem = document.querySelector('.selected') 
 selectedItem.style[prop] = value 
 } 
}) 
// Обрабатываем выбор флекс-элемента
flexContainer.addEventListener('click', (e) => { 
 // Нас интересует только клик по не выбранному флекс-элементу
 if ( 
 e.target.className !== 'flex-item' || 
 e.target.classList.contains('selected') 
 ) 
 return
 // Нам нужно удалить класс "selected" у текущего выбранного элемента
 if (document.querySelector('.selected') !== null) 
 document.querySelector('.selected').classList.remove('selected') 
 // И добавить его новому выбранному элементу
 e.target.classList.add('selected') 
 // При выборе флекс-элемента нам необходимо получить значения его "флекс-свойств"
 // И присвоить их соответствующим инпутам и селекту
 // Это позволяет изменять свойства выбранного флекс-элемента
 // Переключаться на другой элемент
 // Возвращаться к первому, и редактировать ранее измененные свойства
 // Вспомогательная функция для получения значения определенного свойства указанного 
элемента
 // Значением по умолчанию второго параметра функции является выбранный флексэлемент
 const getStyle = (property, element = e.target) => 
 getComputedStyle(element).getPropertyValue(property) 
 // Воспользуемся тем, что мы можем обращаться к DOM-элементам, имеющим атрибут 
"id", напрямую
 // Обратите внимание, что делать так не рекомендуется
 order.value = getStyle('order') 
 flexGrow.value = getStyle('flex-grow') 
 flexShrink.value = getStyle('flex-shrink') 
 alignSelf.value = getStyle('align-self') 
}) 