//---------------------------------------------------------------------------------  
// Задание 4: Использование Utility Types для работы с интерфейсами
// Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.

// Определите интерфейс Employee
interface Employee {
	id: number;
	name: string;
	department: string;
	email: string;
  }
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
  type PartialEmployee = Partial<Employee>// Заполните тип
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
  type ReadonlyEmployee = Readonly<Employee>// Заполните тип
  
  // Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
  function printEmployeeInfo(employee: PartialEmployee) {
	// Реализуйте логику функции, обрабатывая случай отсутствующих свойств
	console.log(`Employee: ${employee.name?employee.name:'нет данных'}, Department: ${employee.department?employee.department:'нет данных'}, email: ${employee.email?employee.email:'нет данных'}`
			)
  }
  //---------------------------------------------------------------------------------