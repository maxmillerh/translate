var shifr = document.getElementById('shifr');
var result = document.getElementById('result');

function ShowShifr() {
	var x = shifr.value;
	var arr = x.split('');
	for (var i = 0; i != arr.length; i++) {
		switch (arr[i]) {
			case "q":
				arr[i] = "й";
				break;
			case "w":
				arr[i] = "ц";
				break;
			case "e":
				arr[i] = "у";
				break;
			case "r":
				arr[i] = "к";
				break;
			case "t":
				arr[i] = "е";
				break;
			case "y":
				arr[i] = "н";
				break;
			case "u":
				arr[i] = "г";
				break;
			case "i":
				arr[i] = "ш";
				break;
			case "o":
				arr[i] = "щ";
				break;
			case "p":
				arr[i] = "з";
				break;
			case "[":
				arr[i] = "х";
				break;
			case "]":
				arr[i] = "ъ";
				break;
			case "a":
				arr[i] = "ф";
				break;
			case "s":
				arr[i] = "ы";
				break;
			case "d":
				arr[i] = "в";
				break;
			case "f":
				arr[i] = "а";
				break;
			case "g":
				arr[i] = "п";
				break;
			case "h":
				arr[i] = "р";
				break;
			case "j":
				arr[i] = "о";
				break;
			case "k":
				arr[i] = "л";
				break;
			case "l":
				arr[i] = "д";
				break;
			case ";":
				arr[i] = "ж";
				break;
			case "'":
				arr[i] = "э";
				break;
			case "z":
				arr[i] = "я";
				break;
			case "x":
				arr[i] = "ч";
				break;
			case "c":
				arr[i] = "с";
				break;
			case "v":
				arr[i] = "м";
				break;
			case "b":
				arr[i] = "и";
				break;
			case "n":
				arr[i] = "т";
				break;
			case "m":
				arr[i] = "ь";
				break;
			case ",":
				arr[i] = "б";
				break;
			case ".":
				arr[i] = "ю";
				break;
			case "/":
				arr[i] = ".";
				break;
			case "?":
				arr[i] = ",";
				break;
		}
	}
	result.innerHTML = arr.join('');
}