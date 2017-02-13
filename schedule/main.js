window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 6*(1*60 + 50), 1*60 + 50);
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
	    mon = Day.create( 1, 'Понедельник' ),
	    tue = Day.create( 2, 'Вторник'     ),
	    wed = Day.create( 3, 'Среда'       ),
	    thu = Day.create( 4, 'Четверг'     ),
	    fri = Day.create( 5, 'Пятница'     );
	    sat = Day.create( 6, 'Суббота'     );
	
	var 
	    toe  = Subject.create( 'ТОЭ',       '../courses/sbp.html',  Subject.COMMON  ),
	    mmp  = Subject.create( 'ММФ',       '../courses/mmp.html',  Subject.COMMON  ),
	    eng  = Subject.create( 'ИнЯз',      '../courses/eng.html',  Subject.LIBERAL ),
	    sport  = Subject.create( 'Физ-ра','../courses/ast.html',  Subject.COMMON  ),
	    phil = Subject.create( 'Философия',      '../courses/unix.html', Subject.SPECIAL ),
	    foe = Subject.create( 'ФОЭ',     '../courses/unix.html', Subject.SPECIAL ),
	    specmat  = Subject.create( 'Спец.гл. Мат.',      '../courses/sapr.html', Subject.SPECIAL ),
	    spp  = Subject.create( 'СПП', '../courses/scdb.html', Subject.SPECIAL ),
	    specphis = Subject.create( 'Спец.гл.Физики', '../courses/phil.html', Subject.LIBERAL );
	    
	var 
	    krsnopevcev = Teacher.create('Краснопевцев'),
	    churkin = Teacher.create('Чуркин'),
	    sandakova = Teacher.create('Сандакова'),
	    byalic = Teacher.create('Бялик'),
	    ostertak = Teacher.create('Остертак'),
	    mirenkova = Teacher.create('Миренкова'),
	    reshetnicov = Teacher.create('Решетников'),
	    geyst = Teacher.create('Гейст'),
	    berdinskiy = Teacher.create('Бердинский'),
	    unknown = Teacher.create('непонятно');
	    
	var 
	    Ik = function (aud) { return Location.create("I",aud); },
	    IIk = function (aud) { return Location.create("II",aud); };
	    IIIk = function (aud) { return Location.create("III",aud); };
	    IVk = function (aud) { return Location.create("IV",aud); };
	    sk = function (aud) { return Location.create("СК"); };
		
	var 
	    LECTURE  = Type.create('Лекция'),
	    SEMINAR  = Type.create('Семинар'),
	    PRACTICE = Type.create('Практикум');
	    ASSIGN   = Type.create('Сдача');
	
	mon.add(Course.create(10*60 + 10, 1*60 + 25, LECTURE,  mmp,  IVk(4),       krasnopevcev, 1 ));
	mon.add(Course.create(11*60 + 50, 1*60 + 25, LECTURE,  toe,  IVk(518),     churkin  ));
	mon.add(Course.create(13*60 + 45, 1*60 + 25, SEMINAR,  eng,  Ik('???'),       unknown ));
	mon.add(Course.create(15*60 + 25, 1*60 + 25, PRACTICE,  sport,  sk()			 ));
	
	tue.add(Course.create( 12*60 +  40, 1*60 + 25, LECTURE, ast,  nsu('БА'),     surdin      ));
	tue.add(Course.create(14*60 + 30, 1*60 + 25, PRACTICE, sbp,  nsu('т.4213'),  tkachenko   , 1));
	tue.add(Course.create(14*60 + 30, 1*60 + 25, LECTURE,  sbp,  nsu(324),       kozhevnikov , 0 ));
	// tue.add(Course.create(14*60 + 30, 1*60 + 35, PRACTICE, sbp,  inp(324),       kozhevnikov ));
	tue.add(Course.create(16*60 + 20, 1*60 + 25, SEMINAR,  mmp,  nsu(328),       belheeva    ));
	tue.add(Course.create(18*60 + 10, 1*60 + 25, SEMINAR,  eng,  nsu(5218),      tihomirova  ));
	
	wed.add(Course.create(10*60 + 45, 1*60 + 25, LECTURE,  det,  inp('КЗал'),    zhulanov    ));
	wed.add(Course.create(12*60 + 30, 1*60 + 25, PRACTICE, unix, inp(508),       rutman      ));
	wed.add(Course.create(14*60 + 15, 1*60 + 25, LECTURE,  unix, inp(508),       irtegov     ));
	wed.add(Course.create(16*60 + 00, 1*60 + 25, SEMINAR,  shel, inp(508),       irtegov     ));
	
	thu.add(Course.create( 9*60 +  0, 1*60 + 25, PRACTICE, net,  inp(508),       sosedkin    ));
	thu.add(Course.create(10*60 + 50, 1*60 + 25, LECTURE,  net,  inp(508),       cheblakov   ));
	thu.add(Course.create(12*60 + 40, 1*60 + 25, SEMINAR,  eng,  nsu(5263),      tihomirova  ));
	thu.add(Course.create(15*60 + 30, 1*60 + 25, PRACTICE, det, inp(508),        kurilin     ));

	fri.add(Course.create(10*60 + 50, 1*60 + 25, SEMINAR,  sbp,  nsu(326),       kozhevnikov ));
	fri.add(Course.create(12*60 + 40, 1*60 + 25, LECTURE, ast,  nsu('БА'),       surdin      ));
	fri.add(Course.create(14*60 + 30, 1*60 + 25, SEMINAR,  phil, nsu(316),       borisov     ));
	
	sat.add(Course.create( 9*60 +  0, 1*60 + 25, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	sat.add(Course.create(10*60 + 50, 1*60 + 25, LECTURE,  mmp,  nsu('315'),     abasheeva   ));
	sat.add(Course.create(14*60 + 30, 1*60 + 25, SEMINAR,  mmp,  nsu('321а'),     belheeva    ));
	sat.add(Course.create(16*60 + 20, 1*60 + 25, ASSIGN,  mmp,  nsu('247'),     belheeva    ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
