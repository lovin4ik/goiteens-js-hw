//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log('%c [1] ', 'color: yellow; background-color: #2274A5')
//? 1-1.Створити змінну <array> значення якої
//? є масив із п'яти елементів,
//? де упереміш присутні числа та рядки.
//? Вивести в консоль значення змінної <array>.
//? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
console.log('%c [1-1] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

const myArray = [1488, 'Hello', 3.14, 'World', 'JavaScript']

console.log('myArray:', myArray)

for (let i = 0; i < myArray.length; i++) {
	console.log(`myArray[${i}]: ${myArray[i]}`)
}

console.log('-------------------------------------------')

//? 1-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 і вивести їх значення в консоль.
//? Вивести в консоль значення змінної(масиву) <array>.
console.log('%c [1-2] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

myArray[1] += 1
myArray[2] += 1

console.log('myArray[1]:', myArray[1])

console.log('myArray[2]:', myArray[2])

console.log('myArray:', myArray)

console.log('-------------------------------------------')

//? 1-3.Виміряти довжину масиву [array]
//? та вивести це значення в консоль.
console.log('%c [1-3] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання
const myArrayLength = myArray.length

console.log('myArrayLength:', myArrayLength)

console.log('-------------------------------------------')

//? 1-4.Отримати индекс та значення
//? останнього елемента масиву <array>.
//? Вивести ці значення в консоль.
console.log('%c [1-4] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

const lastElementIndex = myArray.length - 1

console.log('lastElementIndex:', lastElementIndex)
console.log('lastElementValue:', myArray[lastElementIndex])

console.log('-------------------------------------------')

//? 2-1.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for.
console.log('%c [2-1] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (let i = 0; i < myArray.length; i++) {
	console.log(`myArray[${i}]: ${myArray[i]}`)
}

console.log('-------------------------------------------')

//? 2-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 за допомогою цикла for
//? і вивести їх значення в консоль.
//? Вивести в консоль значення масиву [array].
console.log('%c [2-2] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (let i = 0; i < myArray.length; i++) {
	if (i === (1 || 2)) {
		myArray[i] += 1
		console.log(`myArray[${i}]: ${myArray[i]}`)
	}
}

console.log('myArray:', myArray)

console.log('-------------------------------------------')

//? 2-3.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for...of.
console.log('%c [2-3] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (const element of myArray) {
	console.log(element)
}

const time = new Date()

console.log('-------------------------------------------')

//? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log('%c [2-4] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (const element of myArray) {
	if (typeof element === 'number') {
		console.log(element)
		break
	}
}

console.log('-------------------------------------------')

//? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log('%c [2-5] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (const element of myArray) {
	if (typeof element === 'string') {
		console.log(element)
		break
	}
}

console.log('-------------------------------------------')

//? 2-6.Знайти ВСІ ЧИСЛОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log('%c [2-6] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (const element of myArray) {
	if (typeof element === 'number') {
		console.log(element)
		continue
	}
}

console.log('-------------------------------------------')

//? 2-7.Знайти ВСІ РЯДКОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log('%c [2-7] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (const element of myArray) {
	if (typeof element === 'string') {
		console.log('foundet element:', element)
		continue
	}
}

console.log('-------------------------------------------')

//? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for...of,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log('%c [2-8] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (let element of myArray) {
	if (typeof element === 'number') {
		element += 1
		console.log('foundet element after change:', element)
		continue
	}
}

console.log('myArray:', myArray)
console.log('-------------------------------------------')

//? 2-9.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log('%c [2-9] ', 'color: #2274A5; background-color: yellow')
//! Код виконаного завдання

for (let i = 0; i < myArray.length; i++) {
	if (typeof myArray[i] === 'number') {
		myArray[i] += 1
		console.log(`myArray[${i}]`, myArray[i])
		continue
	}
}

console.log('myArray:', myArray)

console.log('-----------------------------------------------------')
