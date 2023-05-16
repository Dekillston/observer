// Йоууу, друг. Функцию можно пропустить, и не изучать, использование ниже.
function Observer(block, BOOL, DATA, FUN) {
		var bool = !BOOL;
		let observer = new IntersectionObserver(function (entries) {
    		entries.forEach(function (entry) {
    			if(bool == !BOOL) {
    				if(entry.isIntersecting !== BOOL) {return}
    				bool = BOOL;
    				FUN(DATA);
    			}
    		});
		});
		observer.observe(block);	
	}

// Смотри
	// Присваем значение которое надо отследить
	var BLOCK = document.getElementById('programm_panel');

	// Присваем булевое значение (true когда видишь) (false когда не видешь)
	var BOOL = true;

	// Присваем любые данные которые будут входить, а потом выходить из функции
	var DATA = {name: 'MY'}; 
// Запуск функции
Observer(BLOCK, BOOL, DATA, (data) => {
	// А здесь пишем код. КОГДА БЛОК БУДЕТ ВИДЕН ИЛИ НЕ ВИДЕН(ЗАВИСИТ ОТ BOOL), ТО ТОГДА ВЫПОЛНЯЕТСЯ КОД 
	console.log(data);
	console.log('hello');
});