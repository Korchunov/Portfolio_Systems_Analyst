
    // Задание №1.1. Оповещение о добавлении в корзину

    // создайте переменную message
    // присвойте переменной message значение переменной productName
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message текст 'за'
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message значение переменной productPrice
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message текст 'теперь в корзине!'
    // выведите переменную message в консоль

    // Конец решения задания №1.1.

    function addInCartMessage(title, price) {
        let productName = title;
        let productPrice = price;
        let message = title 
            message = title + ' за' + ' ' + price + ' теперь в корзине!';
            console.log(message); // вывод консоли

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    // создайте переменную newValue
    // присвойте ей значение oldValue
    // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    let oldValue = value;
    let newValue = oldValue;
        newValue = oldValue + 1;

    return newValue;
}
    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    function addInCartSumChange(sum, delta) {
        let oldSum = sum;
        let difference = delta;
        let newSum;
            newSum = oldSum + difference;
        let newSumText;
            newSumText = `${newSum} ₽`;

    return newSumText;
}