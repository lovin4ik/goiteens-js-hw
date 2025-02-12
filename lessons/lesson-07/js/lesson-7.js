const beginBtn = document.querySelector('.btn-begin')
function lesson3() {
	// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
	const arr = [1, 2, 3]
	console.log(arr)
	arr[1] = 10
	console.log(arr)

	console.log('-----------------------------------------------------')
	// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
	const arr2 = ['a', 'b', 'c']
	console.log(arr2)
	arr2.push('d')
	console.log(arr2)

	console.log('-----------------------------------------------------')
	// Створити скрипт який поверне суму всіх чисел в масиві.
	const arr3 = [1, 2, 3]
	console.log(arr3)
	let sum = 0
	for (let i = 0; i < arr3.length; i++) {
		sum += arr3[i]
	}
	console.log(sum)

	console.log('-----------------------------------------------------')
	// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
	const arr4 = [1, 2, 3, 4, 5]
	console.log(arr4)
	for (let i = 0; i < arr4.length; i++) {
		console.log(arr4[i])
	}

	console.log('-----------------------------------------------------')
	// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
	const arr5 = ['a', 'valera', 'teacher', 'javascript', 'array']
	console.log(arr5)

	for (let i = 0; i < arr5.length; i++) {
		if (arr5[i].length > 5) {
			console.log(arr5[i])
		}
	}
	console.log('-----------------------------------------------------')
	// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
	const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	console.log(arr6)

	let max = 0
	for (let i = 0; i < arr6.length; i++) {
		if (arr6[i] > max) {
			max = arr6[i]
		}
	}

	console.log(max)

	console.log('-----------------------------------------------------')
	// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
	const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	console.log(arr7)

	const arr8 = []

	for (let i = 0; i < arr7.length; i++) {
		if (arr7[i] % 2 === 0) {
			arr8.push(arr7[i])
		}
	}

	console.log(arr8)
}

beginBtn.addEventListener('click', lesson3)
