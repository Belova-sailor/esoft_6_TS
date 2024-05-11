//---------------------------------------------------------------------------------
// Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
// Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, функцию для их преобразования и функцию для фильтрации результатов. Функция должна использовать два параметра Generic: один для типа элементов входного массива, а другой для типа элементов выходного массива.
// Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
function mapAndFilter(items, transform, filter) {
    // Ваш код здесь
    return items.map(transform).filter(filter);
}
// Пример данных
var people = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];
// Пример использования функции mapAndFilter
var adults = mapAndFilter(people, function (person) { return ({ fullName: person.name, age: person.age }); }, function (adult) { return adult.age >= 18; });
// Выведите результаты для проверки
console.log(adults);
//Вопросы после реализации:
// Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
