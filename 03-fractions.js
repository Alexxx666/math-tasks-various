function task4_3gen(numberFromBag, widthCanvas, heightCanvas) {
    
    var debugMode = false;
    
    var x, y, a, b, c, d;
    var dx, dy, delta;
    var e_nom, f_nom;
    var task_text, answer;
    
    do {
    
        x = randomInt(-10, 10);
        y = randomInt(-10, 10);
        
    } while ( x === 0 || y === 0);
    
    do {
        
        a = randomInt(-10, 10); 
        b = randomInt(-10, 10);
        c = randomInt(-10, 10);
        d = randomInt(-10, 10);
        
    } while ( a * d - b * c === 0 || 
              a === 0 || b === 0 || c ===0 || d === 0 );
    
    delta = a * d - b * c;
    
    //dx = x * delta;
    //dy = y * delta;
    
    e_nom = a * x + b * y;
    f_nom = c * x + d * y;
    
    task_text = '<p>Решите систему уравнений:' + '<br/><br/>' + 
                   texIn('\\begin{cases}' + 
                        texCoef(a, 'x', true) + texCoef(b, 'y') + '=' + 
                        e_nom + '\\\\' +
                        texCoef(c, 'x', true) + texCoef(d, 'y') + '=' +
                        f_nom + 
                        '\\end{cases}') + '<br/><br/>' +
                    'В качестве ответа запишите разность ' + texIn('x-y') +
                '</p>';
    
    answer = x - y;
    
    //Вывод на экран
    if (debugMode) {
        document.body.innerHTML = '' +
            'x:' + ' ' + x + '<br/>' +
            'y:' + ' ' + y + '<br/>' +
            'a:' + ' ' + a + '<br/>' +
            'b:' + ' ' + b + '<br/>' +
            'c:' + ' ' + c + '<br/>' +
            'd:' + ' ' + d + '<br/>' +
            'delta:' + ' ' + delta + '<br/>' +
            'dx:' + ' ' + dx + '<br/>' +
            'dy:' + ' ' + dy + '<br/>' +            
            'e_nom:' + ' ' + e_nom + '<br/>' +
            'f_nom:' + ' ' + f_nom + '<br/>' +
            '<br>task_text:<br><div style = \'background-color:#f7f7f7;\'>' + task_text + '</div>' +
            'Ответ: ' + answer;
    }

    return task_text/* + '✂' + answer*/;

}
	
/* Задача ГИА 14_4 */
function task14_4gen(numberFromBag, widthCanvas, heightCanvas) {
	
    var debugMode = false;
    
    var task_text = '', answer = 0;
    
    //Первое число - номер эстафеты, второе число - номер команды
    var est11, est12, est13, est21, est22, est23;
    var est31, est32, est33;
    
    do {
        
        est11 = randomInt(10, 30)/10;
        est12 = randomInt(10, 30)/10; 
        est13 = randomInt(10, 30)/10;
        est21 = randomInt(30, 45)/10;
        est22 = randomInt(30, 45)/10;
        est23 = randomInt(30, 45)/10;
        est31 = randomInt(45, 60)/10;
        est32 = randomInt(45, 60)/10;
        est33 = randomInt(45, 60)/10;
        
    } while (est11 == est12 || est11 == est13 || est12 == est13 ||
             est21 == est22 || est21 == est23 || est22 == est23 ||
             est31 == est32 || est31 == est33 || est32 == est33 ||
             est11 + est21 + est31 == est12 + est22 + est32 || 
             est11 + est21 + est31 == est13 + est23 + est33 ||
             est12 + est22 + est32 == est13 + est23 + est33);
    
    task_text += '<p>В нескольких эстафетах, которые проводились среди девятых классов, команды показали следующие результаты:<br/><br/>';
    
    task_text += "<table width='100%' cellspacing='1' cellpadding='2' border='1' style='border-collapse: collapse; border:1px solid #DDDCDA; font: .8em Arial,Helvetica,sans-serif; text-align: center;'>" + ""
		+ "    <tbody>" + ""
		+ "        <tr>" + ""
		+ "            <td style='font-weight:bold' width='25%'>Команда</td>" + ""
		+ "            <td width='25%'>I эстафета, мин</td>" + ""
		+ "            <td width='25%'>II эстафета, мин</td>" + ""
		+ "            <td width='25%'>III эстафета, мин</td>" + ""
		+ "        </tr>" + ""
		+ "        <tr>" + ""
		+ "            <td style='font-weight:bold;'>&ldquo;Рыцари&rdquo;</td>" + ""
		+ "            <td>" + texIn(est11) + "</td>" + ""
		+ "            <td>" + texIn(est21) + "</td>" + ""
		+ "            <td>" + texIn(est31) + "</td>" + ""
		+ "        </tr>" + ""
		+ "        <tr>" + ""
		+ "            <td style='font-weight:bold;'>&ldquo;Викинги&rdquo;</td>" + ""
		+ "            <td>" + texIn(est12) + "</td>" + ""
		+ "            <td>" + texIn(est22) + "</td>" + ""
		+ "            <td>" + texIn(est32) + "</td>" + ""
		+ "        </tr>" + ""
		+ "        <tr>" + ""
		+ "            <td style='font-weight:bold;'>&ldquo;Индейцы&rdquo;</td>" + ""
		+ "            <td>" + texIn(est13) + "</td>" + ""
		+ "            <td>" + texIn(est23) + "</td>" + ""
		+ "            <td>" + texIn(est33) + "</td>" + ""
		+ "        </tr>" + ""    
		+ "    </tbody>" + ""
		+ "</table><br/><br/>";
    
    task_text += 'Победителем считается та команда, общее время которой за три эстафеты наименьшее. Какое место заняла команда ';
    
    var team1time = est11 + est21 + est31;
    var team2time = est12 + est22 + est32;
    var team3time = est13 + est23 + est33;
    
    var team1place, team2place, team3place;
    
    if(Math.min(team1time, team2time, team3time) == team1time) {
        team1place = 1;
        
        if(Math.min(team2time, team3time) == team2time) {
            team2place = 2;
            team3place = 3;
        } else {
            team2place = 3;
            team3place = 2;                
        }            
    }
    
    if(Math.min(team1time, team2time, team3time) == team2time) {
        team2place = 1;
        
        if(Math.min(team1time, team3time) == team1time) {
            team1place = 2;
            team3place = 3;
        } else {
            team1place = 3;
            team3place = 2;                
        }            
    }
    
    if(Math.min(team1time, team2time, team3time) == team3time) {
        team3place = 1;
        
        if(Math.min(team1time, team2time) == team1time) {
            team1place = 2;
            team2place = 3;
        } else {
            team1place = 3;
            team2place = 2;                
        }            
    }
    
    switch(randomInt(1, 3)) {
            
        case 1: task_text += '"Рыцари"?';
            answer = team1place;
            break;
            
        case 2: task_text += '"Викинги"?';
            answer = team2place;
            break;
            
        case 3: task_text += '"Индейцы"?';
            answer = team3place;
            break;
            
    }
    
    //Вывод на экран
    if (debugMode) {
        document.body.innerHTML = '' +
            'Team 1 Time: ' + team1time + '<br/>' + 
            'Team 2 Time: ' + team2time + '<br/>' + 
            'Team 3 Time: ' + team3time + '<br/>' + 
            'Team 1 Place: ' + team1place + '<br/>' +  
            'Team 2 Place: ' + team2place + '<br/>' +
            'Team 3 Place: ' + team3place + '<br/>' +
            '<br>task_text:<br><br><div style = \'background-color:#f7f7f7;\'>' + task_text + '</div>' +
            'Ответ: ' + answer;
    }    

    return task_text/* + '<br>✂' + answer*/;

}
	
/* Задача ГИА 18_2 */
function task18_2gen(numberFromBag, widthCanvas, heightCanvas) {
	
    var debugMode = false;
    
    var task_text, answer;
    
    var year2009, year2010, year2011, year2012, year2013, year2014;
    
    year2009 = randomInt(1, 24);
    year2010 = randomInt(1, 24);
    year2011 = randomInt(1, 24);
    year2012 = randomInt(1, 24);
    year2013 = randomInt(1, 24);
    year2014 = randomInt(1, 24);
    
    var years = '';
    
    switch(randomInt(1, 5)) {
            
        case 1: years = '2009 г. и 2010 г.?';
            answer = year2009*4 + year2010*4;
            break;
            
        case 2: years = '2010 г. и 2011 г.?';
            answer = year2010*4 + year2011*4;
            break;
            
        case 3: years = '2011 г. и 2012 г.?';
            answer = year2011*4 + year2012*4;
            break;
            
        case 4: years = '2012 г. и 2013 г.?';
            answer = year2012*4 + year2013*4;
            break;
            
        case 5: years = '2013 г. и 2014 г.?';
            answer = year2013*4 + year2014*4;
            break;
            
    }
    
    task_text = '<p>На диаграмме показано количество автомобилей, проданных в автосалоне "Кенгуру-авто" за каждый год в течение последних 6 лет. Сколько всего автомобилей было продано за ' + years +  '<br/><br/>';
    
    //Рисуем рисунок
    
    var cv1 = createCanvas(widthCanvas, heightCanvas);
    var c1 = cv1.getContext('2d');
    
    // ось Х
    c1.strokeStyle = '#3c79f9';
    c1.lineWidth = 2.0;
    
    c1.beginPath();
    c1.moveTo(20, cv1.height - 25);
    c1.lineTo(cv1.width - 5, cv1.height - 25);
    c1.closePath();
    c1.stroke();
    
    // стрелка
    c1.fillStyle = '#3c79f9';
    
    c1.beginPath();
    c1.moveTo(cv1.width, cv1.height - 25);
    c1.lineTo(cv1.width - 8.0, cv1.height - 25 - 4.0);
    c1.lineTo(cv1.width - 6.0, cv1.height - 25);
    c1.lineTo(cv1.width - 8.0, cv1.height - 25 + 4.0);
    c1.lineTo(cv1.width, cv1.height - 25); 
    c1.closePath();
    c1.fill();
    
    // ось y
    c1.strokeStyle = '#3c79f9';
    c1.lineWidth = 2.0;
    
    c1.beginPath();
    c1.moveTo(25, cv1.height - 20);
    c1.lineTo(25, 5);
    c1.closePath();
    c1.stroke();
    
    // стрелка
    c1.fillStyle = '#3c79f9';
    
    c1.beginPath();
    c1.moveTo(25, 0);
    c1.lineTo(25 - 4.0, 0 + 8.0);
    c1.lineTo(25, 0 + 6.0);
    c1.lineTo(25 + 4.0, 0 + 8.0);
    c1.lineTo(25, 0); 
    c1.closePath();
    c1.fill();
    
    //Рисуем сетку
    
    // цвет линий
    c1.strokeStyle = '#3c79f9';  
    c1.lineWidth = 1.0;
    c1.beginPath();   
    
    var x_step = 10;
    var y_step = 10;
    var i;
    
    // вертикальные линии
    
    for(i = 25; i < cv1.width - 10; i += x_step) {
        
        c1.moveTo(i, cv1.height - 20);
        c1.lineTo(i, 35);
        
    }
    
    // горизонтальные линии
    
    for(i = 35; i < cv1.height - 20; i += y_step) {
        
        c1.moveTo(20, i);
        c1.lineTo(cv1.width - 15, i);
        
    }
    
    c1.stroke();
    c1.closePath();
    
    c1.lineWidth = 2.0;
    c1.beginPath();
    
    //Толстые горизонтальные и вертикальные линии
    
    for(i = 35; i < cv1.height - 20; i += y_step*2) {
        
        c1.moveTo(20, i);
        c1.lineTo(cv1.width - 15, i);
        
    }

    for(i = 25; i < cv1.width - 10; i += x_step*2) {
        
        c1.moveTo(i, cv1.height - 20);
        c1.lineTo(i, 35);
        
    }
    
    c1.stroke();
    c1.closePath();    
    
    // подписываем ось Y
    
    c1.fillStyle = 'black';
    c1.font = 'bold 1.6em times new roman';            
    
    for(i = 0; i <= 24; i += 2) {
        
        c1.fillText(i*4, 0, cv1.height - 20 - i*10);
        
    }
    
    c1.fill();
    c1.closePath();  
    
    //Подпись "Кол-во, чел"
    
    c1.font = '14pt times new roman';
    c1.fillText('Количество', 40, 15);
    
    //Подписи годов
    c1.font = '12pt times new roman';
    c1.fillText('2009', 44, cv1.height - 5);
    c1.fillText('2010', 84, cv1.height - 5);
    c1.fillText('2011', 124, cv1.height - 5);
    c1.fillText('2012', 164, cv1.height - 5);
    c1.fillText('2013', 204, cv1.height - 5);
    c1.fillText('2014', 244, cv1.height - 5);
    
    //Рисуем столбики
    
    c1.fillStyle = '#eb6b66';
    c1.beginPath(); 
    
    c1.moveTo(44, cv1.height - 26);
    c1.lineTo(44, cv1.height - 25 - year2009*10);
    c1.lineTo(66, cv1.height - 25 - year2009*10);
    c1.lineTo(66, cv1.height - 26);
    
    c1.moveTo(84, cv1.height - 26);
    c1.lineTo(84, cv1.height - 25 - year2010*10);
    c1.lineTo(106, cv1.height - 25 - year2010*10);
    c1.lineTo(106, cv1.height - 26);
    
    c1.moveTo(124, cv1.height - 26);
    c1.lineTo(124, cv1.height - 25 - year2011*10);
    c1.lineTo(146, cv1.height - 25 - year2011*10);
    c1.lineTo(146, cv1.height - 26);
    
    c1.moveTo(164, cv1.height - 26);
    c1.lineTo(164, cv1.height - 25 - year2012*10);
    c1.lineTo(186, cv1.height - 25 - year2012*10);
    c1.lineTo(186, cv1.height - 26);
    
    c1.moveTo(204, cv1.height - 26);
    c1.lineTo(204, cv1.height - 25 - year2013*10);
    c1.lineTo(226, cv1.height - 25 - year2013*10);
    c1.lineTo(226, cv1.height - 26);
    
    c1.moveTo(244, cv1.height - 26);
    c1.lineTo(244, cv1.height - 25 - year2014*10);
    c1.lineTo(266, cv1.height - 25 - year2014*10);
    c1.lineTo(266, cv1.height - 26);
    
    c1.closePath();
    c1.fill();
    
    var img1 = saveCanvasIntoImg(cv1);
    
    task_text += img1.outerHTML;
    
    task_text += '</p>';
    
    //Вывод на экран
    if (debugMode) {
        document.body.innerHTML = '' +
            '2009: ' + year2009*4 + '<br/>' +
            '2010: ' + year2010*4 + '<br/>' +
            '2011: ' + year2011*4 + '<br/>' +
            '2012: ' + year2012*4 + '<br/>' +
            '2013: ' + year2013*4 + '<br/>' +
            '2014: ' + year2014*4 + '<br/>' +
            '<br>task_text:<br><br><div style = \'background-color:#f7f7f7;\'>' + task_text + '</div>' +
            'Ответ: ' + answer;
    }        
       
    return task_text/* + '✂' + answer*/;

}

task1_3gen();
	
/* Задача ГИА 1.3 */
function task1_3gen(numberFromBag, widthCanvas, heightCanvas) {
	
var debugMode = false;	

do {
	var aList = [2, 4, 5, 8, 10, 20, 25];
	var a = aList[randomInt(0, aList.length-1)];
	
	//b ∈ [-10; -1] U [1; 10]
	var b = (randomInt(0, 1) === 0 ? randomInt(-10, -1) : randomInt(1, 10));

} while (a == b);

var c = randomInt(-10, 10),
	d = randomInt(-10, 10),
	e = randomInt(-10, 10);
	
var k = randomInt(1, 2);

//Итоговый ответ на задачу
var answer = roundToFloat(Math.pow(a, k) * Math.pow(b/a, k+1) + (c/a)*d + e, 6);

//Текст условия задачи
var task_text = '' + 
'Найдите значение выражения ' + 

tex(

//1 слагаемое
texCoef(texPow(a, k) + '\\cdot ', texPow((b < 0 ? '-' : '') + texFrac(Math.abs(b), a), k+1), true) + 

//2 слагаемое
(c !== 0 && d !== 0 ? (c < 0 ? '-' : '+') + texFrac(Math.abs(c), a) + '\\cdot ' + (d < 0 ? '(' : '') + d + (d < 0 ? ')' : '') : '') + 

//3 слагаемое
texCoef(e, '')

) + '<br><br>';

//Вывод на экран
if (debugMode) {
	document.body.innerHTML = '' +
	'a: ' + a + '<br>' + 
	'b: ' + b + '<br>' + 
	'c: ' + c + '<br>' + 
	'd: ' + d + '<br>' + 
	'k: ' + k + '<br>' + 
	'e: ' + e + '<br>' + 
	'task_text:<br><br><div style = \'background-color:#f7f7f7;\'>' + task_text + '<div>' +
	'Ответ: ' + answer;
}

return task_text/* + '✂' + answer*/;

}

task4_7gen(0, 300, 300);

function task4_7gen(numberFromBag, widthCanvas, heightCanvas) {
    
    var debugMode = false;
    
    var task_text, answer;
    
    var a, b, c2, x, x1, x2, y1, y2, k, d;
    
    //Генерируем значения 
    
    a = randomInt(1, 2)*pm();
    
    //x1 и x2 - абсциссы пересечения прямой и параболы
    
    do {
    
        do {
            
            x1 = randomInt(1, 4)*pm();
            x2 = randomInt(1, 4)*pm();
            
        } while (x1 == x2);
                
        b = randomInt(1, 4)*pm();
        c2 = randomInt(1, 5)*pm();
        
        k = b + a*(x1 + x2);
        d = c2 - a*x1*x2;
        
    } while (k === 0);
    
    //Рисунок
    
    var cv = createCanvas(widthCanvas, heightCanvas);
    var c = cv.getContext("2d"); 
    
    var x_step = 15;    //Шаг по оси х - 15 пикселей - единица
    var y_step = 4;    //Шаг по оси y - 4 пикселя - единица
    
    var pCenterX = -b/(2*a), 
        pCenterY = -(b*b-4*a*c2)/(4*a);

    //Ставим центр координат для рисунка по центру оси х и вверху оси Y
    //если а < 0, внизу оси Y, если а > 0
    
    //Координата, куда переносим центр по оси Y
    //Нужна, чтобы оси правильно отрисовать
    var y_center; 
    
    if(a > 0) {
        c.translate(widthCanvas*0.5, heightCanvas*0.75); 
        y_center = heightCanvas*0.75;
    } else if (a < 0) {
        c.translate(widthCanvas*0.5, heightCanvas*0.25);  
        y_center = heightCanvas*0.25;
    } 
    
/*    //Рисуем сетку
    
    // серые цвет линий
    c.strokeStyle = '#f1f1f1';
    
    c.beginPath();
    
    //вертикальные линии - правая половина
    for(i = 0; i < widthCanvas*0.5; i+=x_step) {
     
        c.moveTo(i-pCenterX*x_step, pCenterY*y_step);
        c.lineTo(i-pCenterX*x_step, heightCanvas + pCenterY*y_step);
        c.moveTo(i-pCenterX*x_step, pCenterY*y_step);
        c.lineTo(i-pCenterX*x_step, -heightCanvas + pCenterY*y_step); 
        
    }
    
    //Вертикальные линии - левая половина
    for(i = 0; i > -widthCanvas*0.5; i-=x_step) {
     
        c.moveTo(i-pCenterX*x_step, pCenterY*y_step);
        c.lineTo(i-pCenterX*x_step, heightCanvas + pCenterY*y_step);
        c.moveTo(i-pCenterX*x_step, pCenterY*y_step);
        c.lineTo(i-pCenterX*x_step, -heightCanvas + pCenterY*y_step); 
        
    }
    
   //Горизонтальные линии - нижняя половина
    for(i = 0; i < heightCanvas+y_center; i+=y_step) {
     
        c.moveTo(-pCenterX*x_step, i + pCenterY*y_step);
        c.lineTo(widthCanvas*0.5,  i + pCenterY*y_step);
        c.moveTo(-pCenterX*x_step, i + pCenterY*y_step);
        c.lineTo(-widthCanvas*0.5, i + pCenterY*y_step);
        
    }    
    
    for(i = 0; i > -heightCanvas-y_center; i-=y_step) {
     
        c.moveTo(-pCenterX*x_step, i + pCenterY*y_step);
        c.lineTo(widthCanvas*0.5,  i + pCenterY*y_step);
        c.moveTo(-pCenterX*x_step, i + pCenterY*y_step);
        c.lineTo(-widthCanvas*0.5, i + pCenterY*y_step);
        
    }  
   
    c.stroke();
    c.closePath();  */
    
    //Цвет параболы
    c.fillStyle = '#0086cd';
    c.strokeStyle = '#0086cd';
    
    c.beginPath();
    
    for(var i = -widthCanvas*0.5; i < widthCanvas*0.5; i++) {
    
        x = i*0.1;
        
        //Установка в нужную точку при первом цикле
        if (i == -widthCanvas*0.5) {
            c.moveTo(x_step*(i*0.1 - pCenterX), -(a*x*x + b*x + c2 - pCenterY)*y_step);
        }
        
        c.lineTo(x_step*(i*0.1 - pCenterX), -(a*x*x + b*x + c2 - pCenterY)*y_step);
                
    }
    
    c.stroke();
    c.closePath();
    
    //Рисуем прямую, которая пересекает параболу в точках с абсциссами x1 и x2
    
    c.fillStyle = '#0086cd';
    c.strokeStyle = '#0086cd';
    
    c.beginPath();
    
    for(i = -widthCanvas*0.5; i < widthCanvas*0.5; i++) {
    
        x = i*0.1;
        
        //Установка в нужную точку при первом цикле
        if (i == -widthCanvas*0.5) {
            c.moveTo(x_step*(i*0.1 - pCenterX), -(k*x + d - pCenterY)*y_step);
        }
        
        c.lineTo(x_step*(i*0.1 - pCenterX), -(k*x + d - pCenterY)*y_step);
                
    }
    
    c.stroke();
    c.closePath();
       
    //Рисуем оси
    
    c.strokeStyle = 'black';
    c.beginPath();
    
    //Ось X
    c.moveTo(-pCenterX*x_step, pCenterY*y_step);
    c.lineTo(widthCanvas*0.5 - 10, pCenterY*y_step);
    c.moveTo(-pCenterX*x_step, pCenterY*y_step);
    c.lineTo(-widthCanvas*0.5 + 10, pCenterY*y_step);
    
    //Ось Y
    c.moveTo(-pCenterX*x_step, pCenterY*y_step);
    c.lineTo(-pCenterX*x_step, heightCanvas-y_center - 10);
    c.moveTo(-pCenterX*x_step, pCenterY*y_step);
    c.lineTo(-pCenterX*x_step, -y_center + 10); 
     
    c.stroke();
    c.closePath();   
    
    //Отмечаем и подписываем точки пересечения графиков
    
    c.strokeStyle = 'black';
    c.fillStyle = 'black';
    c.beginPath();
    
    y1 = a*x1*x1 + b*x1 + c2;
    y2 = a*x2*x2 + b*x2 + c2;
    
    c.arc((x1 - pCenterX)*x_step, -(y1 - pCenterY)*y_step, 3.0, 0.0, 2.0 * Math.PI, true);
    c.arc((x2 - pCenterX)*x_step, -(y2 - pCenterY)*y_step, 3.0, 0.0, 2.0 * Math.PI, true);
    
    c.font = 'bold 14pt times new roman';            
    c.fillText('A', (x1 - pCenterX)*x_step + 5, -(y1 - pCenterY)*y_step + 5);
    c.fillText('B', (x2 - pCenterX)*x_step + 5, -(y2 - pCenterY)*y_step + 5);
    
    c.fill();
    c.closePath();   
    
    //Рисуем стрелочки на осях и подписываем оси
    
    c.beginPath();
    c.moveTo(widthCanvas*0.5 - 10, -5 + pCenterY*y_step);
    c.lineTo(widthCanvas*0.5, pCenterY*y_step);
    c.lineTo(widthCanvas*0.5 - 10, 5 + pCenterY*y_step);
    c.lineTo(widthCanvas*0.5 - 10, -5 + pCenterY*y_step);
    c.fill();
    c.closePath();
    
    /* стрелочка на оси Y */
    c.beginPath();
    c.moveTo(-5 - pCenterX*x_step, -y_center + 20);
    c.lineTo(-pCenterX*x_step, -y_center + 10);
    c.lineTo(5 -pCenterX*x_step, -y_center + 20);
    c.lineTo(-5 -pCenterX*x_step, -y_center + 20);
    c.fill();
    c.closePath();
    
    c.textAlign = 'center';
    c.font = 'italic 12pt Arial';
    
    //Подпись на оси Y
    c.fillText('y', -pCenterX*x_step - 10, -y_center+10 + 10);
    
    //Подпись на оси X
    c.fillText('x', 140, -10 + pCenterY*y_step);
        
    var imgCanvas = saveCanvasIntoImg(cv);
    
    task_text = '<p>На рисунке изображены графики функций' + '<br>' +
                texIn('y=' + texCoef(a, 'x^2', true) + texCoef(b, 'x') + texCoef(c2, '')) + ' и ' + 
                texIn('y=' + texCoef(k, 'x', true) + texCoef(d, '')) + 
                '. Они пересекаются в точках ' + texIn('A') + ' и ' + texIn('B') + '.' + '<br/>';
    
    var task_type = randomInt(1, 4);
    
    switch(task_type) {
    
        case 1:
            task_text += 'Найдите абсциссу точки ' + texIn('A') + '.<br/><br/>';
            answer = x1;            
        break;
            
        case 2:
            task_text += 'Найдите абсциссу точки ' + texIn('B') + '.<br/><br/>';
            answer = x2;  
        break;   
            
        case 3:
            task_text += 'Найдите ординату точки ' + texIn('A') + '.<br/><br/>';
            answer = y1;  
            
        break;
            
        case 4:
            task_text += 'Найдите ординату точки ' + texIn('B') + '.<br/><br/>';
            answer = y2;
        break;
                        
    }
        
    task_text += imgCanvas.outerHTML;
    
     if (debugMode) {
        document.body.innerHTML = '' + 
            'x1:' + ' ' + x1 + '<br/>' +
            'y1:' + ' ' + y1 + '<br/>' +
            'x2:' + ' ' + x2 + '<br/>' +             
            'y2:' + ' ' + y2 + '<br/>' + 
            'a:' + ' ' + a + '<br/>' +
            'b:' + ' ' + b + '<br/>' +
            'c2:' + ' ' + c2 + '<br/>' +
            'k:' + ' ' + k + '<br/>' +
            'd:' + ' ' + d + '<br/>' +
            'pCenterX:' + ' ' + pCenterX + '<br/>' +
            'pCenterY:' + ' ' + pCenterY + '<br/>' +            
            'task_text:<br><div style = \'background-color:#f7f7f7;\'>' + task_text + '</div>' + 'Ответ: ' + answer;
     }

     return task_text/* + '✂' + answer*/;   
    
}