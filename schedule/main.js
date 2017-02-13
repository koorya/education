window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 8*60 + 30, 6*(1*60 + 50), 1*60 + 50);
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
	    krasnopevcev = Teacher.create('Краснопевцев'),
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
	
	mon.add(Course.create(10*60 + 10, 1*60 + 35, LECTURE,  mmp,  IVk(4),       krasnopevcev, 0 ));
	mon.add(Course.create(11*60 + 50, 1*60 + 25, LECTURE,  toe,  IVk(518),     churkin  ));
	mon.add(Course.create(13*60 + 45, 1*60 + 25, SEMINAR,  eng,  Ik('???'),       unknown ));
	mon.add(Course.create(15*60 + 25, 1*60 + 25, PRACTICE,  sport,  sk(), 		unknown	 ));
	
	tue.add(Course.create( 10*60 +  10, 1*60 + 25, LECTURE, toe,  IVk('322а'),     churkin      , 0));
	tue.add(Course.create( 10*60 +  10, 1*60 + 25, PRACTICE, toe,  IVk('322а'),     churkin      , 1));
	tue.add(Course.create( 11*60 +  50, 1*60 + 25, LECTURE, phil,  IVk('519'),     sandakova     ));
	tue.add(Course.create( 13*60 +  45, 1*60 + 25, SEMINAR, phil,  IVk('322а'),     sandakova      , 1));
	
	wed.add(Course.create(8*60 + 30, 1*60 + 25, LECTURE,  foe,  IVk(303),    byalic    ));
	wed.add(Course.create(10*60 + 10, 1*60 + 25, SEMINAR,  specphis,  IVk('330a'),    ostertak,    0));
	wed.add(Course.create(10*60 + 10, 1*60 + 25, SEMINAR,  foe,  IVk(208),    byalic,    1));
	wed.add(Course.create(11*60 + 50, 1*60 + 25, LECTURE,  mmp,  IVk(4),       krasnopevcev));
	wed.add(Course.create(13*60 + 45, 1*60 + 25, PRACTICE,  sport,  sk(),		unknown	 ));
	
	thu.add(Course.create( 8*60 +  30, 1*60 + 25, LECTURE, specmat,  IVk(303),       mirenkova    ));
	thu.add(Course.create( 10*60 +  10, 1*60 + 25, LECTURE, spp,  IVk(519),       reshetnicov    ));

	fri.add(Course.create(8*60 + 30, 1*60 + 25, LECTURE,  specphis,  IVk(424),       krasnopevcev ));
	fri.add(Course.create(10*60 + 10, 1*60 + 25, SEMINAR,  spp,  IVk(318),       geyst ));
	fri.add(Course.create(11*60 + 50, 1*60 + 25, SEMINAR,  specmat,  IVk('330a'),       mirenkova ));
	fri.add(Course.create(13*60 + 45, 1*60 + 25, SEMINAR,  mmp,  IVk(303),       berdinskiy ));
	
//	sat.add(Course.create( 9*60 +  0, 1*60 + 25, LECTURE,  phil, nsu('БА'),      tsyplakov   ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
//	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
