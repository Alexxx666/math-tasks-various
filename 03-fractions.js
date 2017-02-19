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

    return task_text + '✂' + answer;

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

    return task_text + '<br>✂' + answer;

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
       
    return task_text + '✂' + answer;

}