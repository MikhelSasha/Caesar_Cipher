var alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
		function shiftAlphabet(shift) {
		    console.log(shift)
		    var shiftedAlphabet = ''; //новий алфавіт 
		    for (var i = 0; i < alphabet.length; i++) {
 		       currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift		]); //Поточна буква з зсувом, якщо виходимо за рамки довжини алфавіту - берем з початку алфавіту

		        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);  // метод concat створює копію масива, додаючи до нього передані аргументи. На відміну від мет. push, будуть додані елементи цього масиву, а не сам массив єдиним елементом.
		    }
		    return shiftedAlphabet;
		}

		console.log(shiftedAlphabet);

		function encrypt() {
		    var message = document.getElementById('message').value;
		    var shift = parseInt(document.getElementById('shift').value);
		    var shiftedAlphabet = shiftAlphabet(shift);
		    var encryptedMessage = '';
		    for (var i = 0; i < message.length; i++) {
		        var indexOfLetter = alphabet.indexOf(message[i].toUpperCase()); //"Привет, мир".indexOf("мир") - 8
		        encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
		    }
		    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
		}

		function decrypt() {
		    var message = document.getElementById('cipher').value;
		    var shift = parseInt(document.getElementById('shift').value);
		    var shiftedAlphabet = shiftAlphabet(shift);
		    var encryptedMessage = '';
		    for (var i = 0; i < message.length; i++) {
		        if (message[i] == ' ') {
		            encryptedMessage = encryptedMessage.concat(' ');
		            continue};
		        var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
		        encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
		    }
		    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
		}