// Разберитесь с типизацией функции и поймите как она работает.
// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
function findInArray(items, key, value) {
    if (key && value) {
        return items.find(function (item) { return item[key] === value; });
    }
    else if (key && value === undefined) {
        throw new Error('не хватает данных');
    }
    else {
        throw new Error('не найдено');
    }
}
// Данные для тестирования функции
var users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];
var products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
];
var books = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
];
// 1. Найдите пользователя по имени "Alice".
var foundUser = findInArray(users, "name", "Alice");
// 2. Найдите продукт с ценой 500.
var foundProduct = findInArray(products, "price", 500);
// 3. Найдите книгу по автору "Another One".
var foundBook = findInArray(books, "author", "Another One");
//---------------------------------------------------------------------------------

