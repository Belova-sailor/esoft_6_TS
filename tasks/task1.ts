//Разминка
// Определите интерфейс для пользователя
interface User {
	id: number;
	name: string;
  email: string
	// Добавьте свойство email типа string
  };
  
  // Определите интерфейс для активности пользователя
  interface Activity {
	userId: number;
	activity: string;
  timestamp: Date;
	// Добавьте свойство timestamp типа Date
  }
  
  // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
  async function fetchData(url: string) {
    fetch(url).then((response) => response.json())

	// Реализуйте получение данных с использованием fetch и возвращение их в формате json
  }
  
  // Используйте Utility Types для создания Partial и Readonly версий User и Activity
  type PartialUser = Partial<User>// Заполните тип
  type ReadonlyActivity = Readonly<Activity>;// Заполните тип
  
  //Типизируйте функцию. userId - число
  function getUserActivities(userId: number) {
	return fetchData(`/api/activities/${userId}`);
  }
  // Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
  type ActivitiesReturnType = ReturnType<typeof getUserActivities>// Заполните тип
  
  // Используйте extends в условных типах для создания типа Permissions
  type AdminPermissions = { canBanUser: boolean };
  type BasicPermissions = { canEditProfile: boolean };
  // Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
  type MyPermissions<T> = T extends "admin" ? AdminPermissions : BasicPermissions;
  

  ///ЧАСТЬ 2.

// Определите Type Alias для Union типа String или Number
type StringOrNumber = string | number; // Заполните тип

// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message: StringOrNumber): void {
  // Реализуйте вывод сообщения в консоль
  console.log(message)
}

// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg: string): never {
  // Бросьте исключение с errorMsg
  throw new Error(errorMsg);
}

// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value: StringOrNumber): value is string {
  // Верните результат проверки типа
  return typeof value === 'string';
}

// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value: any): asserts value is number {
  if (typeof value !== 'number') {
    throwError('Value is not a number');
    }
  // Бросьте исключение, если значение не является числом
}

// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value: StringOrNumber) {
  return (typeof value === "string")? isString: assertIsNumber;
  // Реализуйте логику проверки и обработки значения
}

//---------------------------------------------------------------------------------
