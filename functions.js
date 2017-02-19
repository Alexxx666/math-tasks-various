// наибольший общий делитель
function gcd(a, b) {
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    var c;
    while (b) {
        c = a % b;
        a = b;
        b = c;
    }
    
    return Math.abs(a);
}

// возвращает строку str с замененными на запятые точками \n
// используется в roundToString \n
function texDot(str) {
	str = '' + str;
	
    return str.replace(/\./g, '{,}'); 
}

// форматирование строки str в стиле внутристроковой формулы тех \n
// используется при сборки текстов с математическими символами и/или формулами \n
function texIn(str) {
	str = '' + str;
	
    return '\\({' + str + '}\\)'; 
}

// форматирование строки str в стиле внестроковой формулы тех \n
// используется при сборки текстов с внестроковыми математическими формулами \n
function texOut(str) {
	str = '' + str;
	
    return '\\[{' + str + '}\\]'; 
}

// возвращает округленное число num до sig знаков после запятой \n
// используется, например, для обработки переменной ответа для его передачи далее \n
function roundToFloat(num, sign) {
	return parseFloat(num.toFixed(sign));
}

// возвращает строку округленного числа num до sig знаков после запятой \n
// используется, например, для обработки переменной для её отображения в документе \n
function roundToString(num, sign) {

	return texDot('' + parseFloat(num.toFixed(sign)));
}

// возвращает 1, если n целое число или 0, если число не целое \n
function isInt(num) {

	return num % 1 === 0; 
}

// возвращает обработанное числовое значение с соответствующим окончанием \n
// используется, например, для обработки переменной для её отображения в документе с соответствующим окончанием \n
function getWordEnd(num, ends) {

    var cases = [2, 0, 1, 1, 1, 2];
    var end = '';
    
    if (isInt(num)) {
        end = ends[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]; 
	} else {
        end = ends[1]; 
	}
	
    return texIn(roundToString(num, 6)) + ' ' + end; 
}

// возвращает случайное целое число между min и max с шагом inc \n
// необходимо, чтобы (max - min) / inc было целым, иначе inc = 1 \n
// если max и inc не указаны, то возвращает случайное целое число от 0 до min (не включая значение min) \n
// используется, например, чтобы получить случайный элемент массива содержащего min элементов \n
// если не указан только inc, то возвращает случайное целое число между min и max (включая значения min и max) \n
function randomInt(min, max, inc) {

	var result = 0;
	
	if ((typeof max === 'undefined') && (typeof inc === 'undefined')) {
		min = parseInt(min);
		
		result = Math.floor(Math.random() * min);
	} else {
		inc = (typeof inc === 'undefined') ? 1 : inc;
		max = parseInt(max);
		
		if (min > max) {
			var tmp = min;
			min = max;
			max = min;
		}
		
		inc = (isInt((max - min) / inc)) ? inc : 1;
		inc = parseInt(inc);
		
		if (inc == 1) {
			result = Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			result = Math.floor(Math.random() * ((max - min) / inc + 1)) * inc + min;
		}
	}
	
	return result; 
}

// возвращает true, если значение value есть в массиве array или false, если такого значения в массиве нет \n
function inArray(value, array) {
	
	var tmp = false;
    for (var i = 0; i < array.length; i ++) {
        if (array[i] == value) {
	        tmp = true;
	    }
    }
    
    return tmp;
}

// возвращает случайное число между min и max с шагом inc, исключая значения массива exs \n
// если все возможные случайные значения исключены, то возвращает undefined \n
function randomExs(exs, min, max, inc) {
	
	inc = (typeof inc === 'undefined') ? 1.0 : inc;
	min = parseFloat(min);
	max = parseFloat(max);
	inc = parseFloat(inc);
	
	if (min > max) {
		var tmp = min;
		min = max;
		max = min;
	}
	
	var array = new Array();
	
	for (var i = min; i <= max; i += inc) {
		if (!inArray(i, exs)) {
			array[array.length] = i;
		}
	}
	
	var i = 'undefined';
	var result = 'undefined';
	
	if (array.length > 0) {
		i = randomInt(array.length);
		
		result = array[i];
	}
	
	return result;
}

// возвращает случайное число между min и max с шагом inc \n
function randomInc(min, max, inc) {

	inc = (typeof inc === 'undefined') ? 1.0 : inc;
	min = parseFloat(min);
	max = parseFloat(max);
	inc = parseFloat(inc);
	
	if (min > max) {
		var tmp = min;
		min = max;
		max = min;
	}
	
	var array = new Array();
	
	for (var i = min; i <= max; i += inc) {
		array[array.length] = i; 
	}
	
	var i = Math.floor(Math.random() * array.length);
	
	return array[i]; 
}

// возвращает массив - точка пересечения двух прямых или отрезков заданных четырмя точками \n
// p1[x, y], p2[x, y] начало и конец первой/первого соответственно, p3[x, y], p4[x, y] начало и конец второй/второго \n
function intersectionLines(p1, p2, p3, p4) {

	// k = 0 - нет точки пересечения \n
	var k = 0.0;
	var a = 0.0;
	//var b = 0.0; \n
	var x = 0.0;
	var y = 0.0;
	// расчет угловых коэффициентов \n
	var k1 = (p2[0]-p1[0])/(p2[1]-p1[1]);
	var k2 = (p4[0]-p3[0])/(p4[1]-p3[1]);
	// проверка на непараллельность \n
    if (!(k1 == k2)) {
		// точка пересечения прямых есть \n
		k = 1; 
		// расчет координат точки пересечения прямых \n
		a = ((p4[0]-p3[0])*(p1[1]-p3[1])-(p4[1]-p3[1])*(p1[0]-p3[0]))/((p4[1]-p3[1])*(p2[0]-p1[0])-(p4[0]-p3[0])*(p2[1]-p1[1])); 
		//b = ((p2[0]-p1[0])*(p1[1]-p3[1])-(p2[1]-p1[1])*(p1[0]-p3[0]))/((p4[1]-p3[1])*(p2[0]-p1[0])-(p4[0]-p3[0])*(p2[1]-p1[1])); \n
		x = p1[0]+a*(p2[0]-p1[0]); 
		y = p1[1]+a*(p2[1]-p1[1]);
		//x = p3[0]+b*(p4[0]-p3[0]); \n
		//y = p3[1]+b*(p4[1]-p3[1]); \n		
	}
	
	var tmp = 0.0;
	// для проверки на пересечение отрезков отсортируем соответствующие координаты по возрастанию \n
	if (p1[0] > p2[0]) {
		tmp = p1[0];
		p1[0] = p2[0];
		p2[0] = tmp;
	}
	if (p1[1] > p2[1]) {
		tmp = p1[1];
		p1[1] = p2[1];
		p2[1] = tmp;
	}
	if (p3[0] > p4[0]) {
		tmp = p3[0];
		p3[0] = p4[0];
		p4[0] = tmp;
	}
	if (p3[1] > p4[1]) {
		tmp = p3[1];
		p3[1] = p4[1];
		p4[1] = tmp;
	}
	
	// проверка на пересечение отрезков \n
	if (((p1[0] <= x) && (x <= p2[0]) && (p3[0] <= x) && (x <= p4[0])) && 
        ((p1[1] <= y) && (y <= p2[1]) && (p3[1] <= y) && (y <= p4[1]))) {
		// точка пересечения прямых является и точкой пересечения отрезков \n
		k = 2;
	}
	
	var array = [k, x, y];
	
	return array;
}

// создание html тэга canvas, id которого равен id \n
function createCanvas(width, height, id) {

	id = (typeof id === 'undefined') ? 'canvas' : id;
	
	var cv = document.createElement('canvas');
	cv.setAttribute('id', id);

	cv.width = width;
	cv.height = height;

	return cv;
}

// создание html тега img с сохранённым в нём изображением передаваемого canvas \n
function saveCanvasIntoImg(canvas) {

	var img = document.createElement('img');

	img.width = canvas.width;
	img.height = canvas.height;
	img.src = canvas.toDataURL();

	return img;
}

// создание ссылки на якорь '#anchor' + ind из строки str \n
function anchorHref(str, ind) {

	return '<a href=\'#anchor' + ind + '\'>' + str + '</a>';
}

// создание якоря 'anchor' + ind из строки str \n
function anchorName(str, ind) {

	return '<a name=\'anchor' + ind + '\'>' + str + '</a>';
}

// форматирование строки str в стиле html тега <b>str</b> \n
function bold(str) {

	return '<b>' + str + '</b>';  
}

// форматирование строки str в стиле html тега <i>str</i> \n
function italic(str) {

	return '<i>' + str + '</i>';  
}

// форматирование строки str в стиле html тега <q>str</q> \n
function quote(str) {

	return '<q>' + str + '</q>';  
}

// выравнивание строки str при помощи html тега <div align='align'>str</div> \n
// используется, например, для выравнивание img по центру документа \n
function align(str, align) {
	
	align = (typeof align === 'undefined') ? 'center' : align;
	
	return '<div align=\'' + align + '\'>' + str + '</div>';  
}

// форматирование строки str в стиле html тега <span class='style'>str</span> в стиле класса style \n
function span(str, style) {

	return '<span class=\'' + style + '\'>' + str + '</span>';  
}

// создание разделителя str в стиле html тега <h1>str</h1>, если ind1 и ind2 неопределены \n
// создание разделителя с якорем 'anchor' + ind1 из строки str, если неопределён только ind2 \n
// создание разделителя с якорем 'anchor' + ind1 из строки str и ссылки на якорь '#anchor' + ind2 \n
function separator(str, ind1, ind2) {

	var result = '';
	if ((typeof ind1 === 'undefined') && (typeof ind2 === 'undefined')) {
		result = '<h1>' + str + '</h1>';
	} else if (typeof ind2 === 'undefined') {
		result = anchorName('<h1>' + str + '</h1>', ind1);
	} else {
		result = anchorHref('<h2>вернуться к содержанию</h2>', ind2) + anchorName('<h1>' + str + '</h1>', ind1);
	}
	
	return result;
}

// создание раздела str в содержании с ссылкой на якорь '#anchor' + ind \n
function part(str, ind) {

	return anchorHref(bold('☞ ' + str), ind);  
}

// создание раздела str в содержании с ссылкой на якорь '#anchor' + ind \n
function subpart(str, ind) {

	return anchorHref(bold('&nbsp&nbsp&nbsp&nbsp☞ ' + str), ind);
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function tex(formula) {
    return '\\({' + formula + '}\\)';
}

//plusMinus
function pm() {
    return randomInt(0, 1) === 0 ? -1 : 1;
}

//plusMinusString
function pmStr() {
    return randomInt(0, 1) === 0 ? '-' : '';
}

//Запись текстом корня
function root(index, number, calcRoot) {
	
	if (index == 1)
		return number;
		
	if (number == 1)
		return number;
	
	//Вычисляем корень, если получается целое число
    if (calcRoot && isInt(roundToFloat(Math.pow(number, 1/index), 6))) 
        return roundToFloat(Math.pow(number, 1/index));

	return '' +
	(
		index > 1
		?
		'\\sqrt' + (index > 2 ? '[' + index + ']' : '')
		:
		''
	)
	+ 
	'{' + number + '}'
}

//Запись текстом выражения a*x, где a может быть как 0, так и <0 или >0 или ==1
function texCoef(a, x, hideLeadPlus, showOuterBrackets, hide1) {
	
	//Если оба сомножителя - числа, просто перемножаем их
	if (typeof a != 'string' && typeof x != 'string') {
		a = a * x;
		x = '';
	}
	
    var res = '' +

    ((a>0 && !hideLeadPlus) ? '+' : '') +

    ((x!=='' && a!=1 && a!=-1 && a!==0 && !(hide1 && (a==1 || x==1 || a==-1))) ? a : '') +

    ((x==='' && a!==0 && !(hide1 && (a==1 || a==-1))) ? a : '') +

    ((a==-1 && x) ? '-' : '') +

    (a!==0 && !(hide1 && (a==1 || x==1 || a==-1)) ? (showOuterBrackets && a!=1 ? '(' : '') + x + (showOuterBrackets && a!=1 ? ')' : '') : '');

    //Вырезаем "1•", если он стоит в начале строки
    if (res.indexOf('1\\cdot') === 0)
        res = res.substr('1\\cdot'.length);

    if (res.indexOf('1 \\cdot') === 0)
        res = res.substr('1 \\cdot'.length);

	//Вырезаем "•1", если он стоит в конце строки
	if (res.substr(res.length - '\\cdot1'.length) == '\\cdot1')
        res = res.substr(0, res.length - '\\cdot1'.length);

	if (res.substr(res.length - '\\cdot 1'.length) == '\\cdot 1')
        res = res.substr(0, res.length - '\\cdot 1'.length);

    return res;
}

//Запись текстом степени со скрытием скобок и самой степени, если она == 1
function texPow(number, pow, minusAsFrac, showMinusBeforeFrac, calcPow, setMinusOverNegative) {

	//Флаг того, что возводим в степень 1
	var pow1 = (pow == 1);

	//Флаг того, что нужные дополнительные внешние скобки
	var setOuterBrackets =  (
								((number + '').indexOf('^') != -1 && !pow1) 
								||
								((number + '').indexOf('dfrac') != -1 && !pow1) 
								||
								((number + '').indexOf('sqrt') != -1 && !pow1) 
								||
								(number < 0 && (!pow1 || setMinusOverNegative))
							&&
							!calcPow);
							
	//Выносим минус из знаменателя вперед дроби только когда степень == -1
	var startFracWithMinus = (showMinusBeforeFrac && minusAsFrac && number < 0 && pow < 0 && !isEven(pow));
	
	var res = '';
	
	if (pow === 0 || number == 1)
		res = '1';
		
	else {
		res = '' +
		
		//Если степень отрицательная - превращаем число в дробь
		(
            minusAsFrac && pow < 0 
            ? 

            //Если число отрицательное - выносим минус из знаменателя вперед дроби
            (
                startFracWithMinus 
                ? 
                '-' 
                : 
                ''
            ) + '\\dfrac{1}{' 

            : 
            ''
        ) +
		
		//Внешние скобки
		(setOuterBrackets ? '\\left(' : '') +
		
		//Непосредственно само число
        (
            //Возводим число в степень
            calcPow && typeof number != 'string'
            ? 
            roundToFloat(Math.pow(

                //Минус из знаменателя уже вынесли
                (startFracWithMinus ? Math.abs(number) : number), 
                (
                    minusAsFrac 
                    ? 
                    Math.abs(pow) 
                    : 
                    pow
                )
            ), 6) 
            : 
            //Минус из знаменателя уже вынесли
            (startFracWithMinus ? Math.abs(number) : number)
        )
		+
		
		//Внешние скобки
		(setOuterBrackets ? '\\right)' : '') +
		
		//Показатель степени
		(
			!pow1 && !calcPow
			? 
			'^{' + (minusAsFrac ? Math.abs(pow) : pow) + '}'
			: 
			''
		) 
		
		+
		
		//Конец дроби
		(minusAsFrac && pow < 0 ? '}' : '');
	}
	return res;
}

//Запись текстом дроби со скрытием знаменателя, если он == 1
function texFrac(numerator, denominator) {
	return '' +
	
	(
		denominator != 1 ? 
		'\\dfrac{'
		: 
		''
	) +
	
	numerator +
	
	(
		denominator != 1 ? 
		'}{' + denominator + '}'
		: 
		''
	);
}

//Получение массива из n случайных целых уникальных цифр в диапозоне [min; max]
function randomIntArr(min, max, n) {
	var arr = [];

	while(arr.length < n) {
        var tmp = randomInt(min, max);
        var found = false;
	
        for(var i=0; i<arr.length; i++) {
            if (arr[i] == tmp) {
                found = true;
                break;
            }
        }
        
        if (!found)
        arr[arr.length] = tmp;
	}
	return arr;
}

//Перемешивание массива
function shuffleArr(arr) {
    var counter = arr.length, t, i;

    // While there are elements in the arr
    while (counter > 0) {
    
        // Pick a random i
        i = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        t = arr[counter];
        arr[counter] = arr[i];
        arr[i] = t;
    }
    return arr;
}

function isEven(number) {
    return number % 2 === 0;
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////