//---------------------------------------------------------------------------------
// Задание 3: Расширенное использование Generics
// Цель: Разработать несколько функций для обработки и различения типов данных.
// Создайте Type Guard для проверки, является ли объект автомобилем
function isCar(vehicle) {
    return vehicle.year !== undefined;
}
// Используйте Type Guard в функции, которая печатает информацию о транспорте. Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.
function printVehicleInfo(vehicle) {
    if (isCar(vehicle)) {
        console.log("Car: ".concat(vehicle.company, " ").concat(vehicle.model, " ").concat(vehicle.year));
    }
    else {
        console.log("Bike: ".concat(vehicle.company, " ").concat(vehicle.type));
    }
}
//---------------------------------------------------------------------------------
