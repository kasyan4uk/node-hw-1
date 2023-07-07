# node-hw-1
## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table).
node index.js --action="list" https://monosnap.com/file/W1oZdtsNlrvXAiNmPmB1HpT44wecbx

## Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6 https://monosnap.com/file/0eYx54KQNtTld5UMi1EmxXan95TDjy

## Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту.
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22 https://monosnap.com/file/zcHeGJs2AVF8PmIE1lUnpV9xTZ2iwe

## Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH https://monosnap.com/file/7VF6iUe9cNwibgFl7LvbOnOAJbE4Gl
