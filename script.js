// 1.Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'.
// Если посетитель вводит '2015', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2015!'.

// var years = prompt('Какой сейчас год?', '');
// var message = '';

// if (years == '2015') {
//     message = 'Вы правы!';
// } else {
//     message = 'С луны свалися? 2015!';
// }

// alert(message);



// 2. Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'
// Затем выведите alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

// var number = prompt('Введите любое целое число?', '');
// var message = '';

// if (number > 0 ) {
//     message = '1';
// } else {
//     if (number < 0 ) {
//         message = '-1';
//     } else {
//         message = '0';
//     }
// }

// alert(message);




// 3. Напишите код, который будет запрашивать логин пользователя (prompt).
// Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.

// Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.

// var login = prompt('Login:', '');
// var message = 'Welcome home!';
// var messageCanceled = 'Canceled';
// var messageLoginWrong = 'Access denied';
// var messagePasswordWrong = 'Wrong password';

// if (login == 'admin') {
//     var password = prompt('Password:', '');
//     if (password == 'passw0rd') {
//         alert(message);
//     } else if (password == null) {
//         alert(messageCanceled);
//     } else {
//         alert(messagePasswordWrong);
//     }

// } else if (login == null) {
//     alert(messageCanceled);
// } else {
//     alert(messageLoginWrong);
// }




// 4. Перепишите if с использованием оператора '?':
// if (a + b >= 3) {
//     result = 'Yep!';
// } else {
//     result = 'Noup!';
// }

// var a = 1, b = 2;

// (a + b >= 3) ? result = 'Yep!' : result = 'Noup!';

// alert(result);




// 5. +Перепишите if..else с использованием нескольких операторов '?':
// if (name == 'admin') {
//   text = 'Hi';
// } else if (name == 'manager') {
//   text = 'Hello';
// } else if (name == '') {
//   text = 'No login';
// } else {
//   text = '';
// }

var name = 'admin', text;

(name == 'admin')?text = 'Hi':
    (name == 'manager')?text = 'Hello':
        (name == '')?text = 'No login':text = '';

alert(text);