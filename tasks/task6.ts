//---------------------------------------------------------------------------------
// Задание 6: Расширение и ограничение Generics
// Цель: Создать универсальные функции с ограничениями типов.

// Создайте базовый интерфейс для сущностей с идентификатором
interface Identifiable {
	id: number;
  }
  
  // Типизируйте функцию, которая принимает массив объектов с ограничением на Generics, где каждый объект должен соответствовать интерфейсу Identifiable. Не забывайте, что find может вернуть undefined
  function findById<T extends Identifiable>(items:T[], id: number): T | undefined {
	return items.find(item => item.id === id);
  }
  
  // Используйте эту функцию для поиска пользователя по id в массиве пользователей
  interface User {
	id: number, 
	name: string, 
	email: string, 
	age: number
  }
  const users: User[] = [
	{ id: 1, name: "Alice", email: "alice@example.com", age: 25 },
	{ id: 2, name: "Bob", email: "bob@example.com", age: 30 }
  ];
  const user = findById(users, 1);
  //---------------------------------------------------------------------------------