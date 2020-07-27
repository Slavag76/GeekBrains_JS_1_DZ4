let number = parseInt(prompt("Введите число от 0 до 999. Потом смотрите в консоль"));

let unitDidgit = {
	edinit: 0,
	desat: 0,
	soten: 0,
	startAnalise: function (number) {  // задаем метод, который принимает число и считает значения
		if (number < 1000) {
			this.soten = Math.floor(number / 100 );
			this.desat = Math.floor((number % 100) / 10);
			this.edinit = number - (this.soten * 100 + this.desat * 10);
		} 
	}
}

unitDidgit.startAnalise(number); // вызываем метод
delete unitDidgit.startAnalise; // удаляем свойство из объекта перед выводом всего объекта, т.к. оно в выводе не нужно

for (let prop in unitDidgit) {
	console.log(prop + ": " + unitDidgit[prop]); // выводим свойства объекта и их значения
}

// ******************************Задание 2 ****************************//

alert("Теперь мы посчитаем и выведем в консоль сумму товаров в корзине интернет-магазина. В корзине такие товары:")
let summ = 0;
let internetBasket = {  // Задаем корзину товаров и их цену
	car: 1000,
	pencil: 5,
	table: 70,
	watch: 130,
	ball: 50,
	telephone: 255

}

for (let count in internetBasket) {
	console.log(count + ": " + internetBasket[count]); // Выводим пользователю корзину для проверки
}

function summBasket(obj) {       // функция подсчета значений свойств объекта. В функцию передаем сам объект
	for (let property in obj) {
		summ = summ + obj[property];
	}
	return summ;
}

summBasket(internetBasket);
console.log("Сумма товаров в корзине равна: " + summ);
