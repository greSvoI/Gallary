import { Injectable } from "@angular/core";

@Injectable()
export class ImageService{

     visibleImages : any  = [];

    getImages(){

        return this.visibleImages = IMAGES.slice(0);
    }
    getImage(id : number)
    {
            return IMAGES.slice(0).find(x=>x.id == id);
    }

}
const IMAGES = [
    {"id": 1,"category":"vanGog","caption":"Крестьянка 1885 год",
     "content":"\nОписание этой работы пока отсутствует.\n\n\ Возможно, оно появится позже. Следите за обновлениями в Артхиве.",
     "url":"assets/img/van_peasant.jpg"},
    {"id": 2,"category":"vanGog","caption": "Звёздная ночь над Роной 1888 год",
    "content": '\nКартина \"Звездная ночь над Роной\", написанная Винсентом Ван Гогом в 1888-ом году в Арле, по праву входит в число самых известных произведений художника и может считаться первым проявлением той \"одержимости\", которую испытывал тогда Винсент в своем непременно желании писать именно темное время суток - ночь.\n\n' 
    +'С тех пор, как Ван Гог прибыл в Арль, он был полностью захвачен идеей передачи «эффектов ночи» на холсте.\n\n'
    +'В апреле 1888 года он написал своему брату Тео: «Мне нужна звездная ночь с кипарисами или, может быть, над полем спелой пшеницы». В июне он признавался художнику Эмилю Бернару: «Когда, когда же я, наконец, отважусь написать звездное небо, мысль о котором не оставляет меня буквально ни на минуту».\n\n'
    +'И Ван Гог, как мы знаем, все-таки сделал это - причем, не единожды. «Звездная ночь над Роной» (сентябрь 1888 г.) была одной из трех картин, написанных в тот месяц, на которых ночное небо и звезды играют главную роль. Помимо "Звездной ночи над Роной", Ван Гог в сентябре 1888-го написал "Ночную террасу кафе"  и портрет своего друга Эжена Боша, ставший, пожалуй, самой символичной работой из трех.\n\n'
    +'Картина «Звездная ночь над Роной» была написана с натуры на берегу реки, всего в минуте или двух ходьбы от "Желтого дома" на площади Ламартин, который Ван Гог в то время арендовал. Ночное небо и эффекты ночного света, очаровавшие художника, послужили источником вдохновения и для самой известной картины, написанной несколько позже: \"Звездная ночь\".\n\n',
    "url":"assets/img/van_night_rhone.jpg"},
    {"id": 3,"category":"vanGog","caption":"Цветущие ветки миндаля",
    "content":'\nОдна из лучших картин Винсента Ван Гога - \"Цветущие ветки миндаля\", была написана художником в начале 1890 года в Сен-Реми де Прованс, непосредственно перед очередным припадком.\n\n'
    +'Повод для написания картины был самый что ни на есть серьезный: накануне в письме брат Винсента Тео сообщил о родении сына, названного в честь художника - Винсентом.\n\n' 
    +'Ван Гог был растроган до глубины души и тут же взялся за работу. Он хотел, чтобы эта картина висела с супружеской спальне Тео и его жены, символизируя вечную весну: миндаль, как известно, начинает цвести очень рано.\n\n'
    +'\"Моя работа продвигалась замечательно, - сообщал он брату в письме, - последний холст с цветущими ветвями - это пожалуй, лучшее из всего, что я успел сделать: очень спокойная вещь, написанная твердой рукой. А на следующий день, я рухнул, как сраженный зверь\". \n\n'
    +'\"Цветущие ветки миндаля" - действительно очень "спокойная", чистая и светлая картина, не несущая в себе и следа тех внутренних страстей ,что постоянно обуревали ее создателя. Ван Гог соткал мастерское кружево из света и цвета, создал настоящий шедевр, который стал возможен благодаря напряженной работе над техникой в два или три предыдущих года, которая, наконец, принесла свои несомненные плоды.\n\n'
    +'В течение своей карьеры Винсент не раз копировал японские картины и был весьма впечатлен японским искусством. Например, в 1888 году Винсент писал Тео: "Что касается пребывания на юге, пусть здесь  и дороже, примите во внимание: все нам, импрессионистам нравится японская живопись, и все мы в той или иной степени ощутили ее влияние. Так почему и не поехать в Японию, то есть, на юг - её какой-никакой, но эквивалент?  \n\n'
    +'На задворках его памяти, возможно, сохранилось и исследование цветов японской гравюры, например, одной из работ Кунисада, приобретенной в какой-то момент  братьями для своей коллекции. \n\n'
    +'В «твердости касания» о какой упоминает Ван Гог применительно к "Цветущим веткам миндаля", несомненно, сказывается влияние японского искусства - и вместе с тем это исключительно "евопейская" и, что немаловажно, весьма оптимистичная вещь. Удивительно, как Ван Гог, находясь в плачевном психическом состоянии, смог так великолепно воплотить задуманное в красках.  \"\n\n',
    "url":"assets/img/van_branches.jpg"},
    {"id": 4,"category":"vanGog","caption":"Дорога с кипарисом и звездой",
    "content":'\nЭта работа написана художником в последний год его жизни, когда приступы душевной болезни чередовались с периодами спокойствия. Находясь на лечении в больнице Сен-Реми, Ван Гог часто рисовал местные пейзажи. «Дорога с кипарисом и звездой» стала одной из последних картин, написанных им в лечебнице. Сам художник очень любил эту работу, напоминавшую ему о юге.\n\n'
    +'Эта картина выполнена в стиле, который окончательно сформировался у Ван Гога в конце жизненного пути. Завивающиеся мазки положены густым пастозным слоем. Их динамичные вихри формируют объекты пейзажа, формы которых балансируют на грани между фантастикой и реальностью.\n\n'
    +'Густое темно-синее небо украшает звезда, размеры которой едва не превышают размеры тонкого месяца с красной каймой. Танец длинных мазков образует вокруг нее сказочный ореол. В центре композиции – огромный прямой кипарис. Он настолько высок, что автору как будто не хватает полотна, чтобы разместить его на картине полностью. Его острые темные листья беспорядочно топорщатся, как будто пытаясь вырваться к ночному небу. Мимо него проходит широкая извилистая дорога, написанная динамичными мазками разных цветов. Уходя вдаль, к маленькой гостинице с освещенными окнами, она выглядит наклонной, зыбкой и неустойчивой, и две непропорционально маленьких фигурки, кажется, соскальзывают с нее, стремясь за грани холста. Все это придает ночному мотиву оттенок нервозности и беспокойства.\"\n\n',
    "url":"assets/img/van_cypress.jpg"},
    {"id": 5,"category":"aivaz","caption":"Корабли в ночной тишине 1888",
    "content":"\nМузей армянской конгрегации мхитаристов. Венеция",
     "url":"assets/img/aivaz_ship_night.jpg"},
    {"id": 6,"category":"aivaz","caption":"Золотой Рог. Босфор 1872",
    "content":"\nНижегородский государственный художественный музей, Нижний Новгород.",
    "url":"assets/img/aivaz_bosfor.jpg"},
    {"id": 7,"category":"aivaz","caption":"Венецианская ночь",
    "content":"\nГосударственный центральный музей музейной культуры им. М. И. Глинки, Москва.",
    "url":"assets/img/aivaz_veneciya.jpg"},
    {"id": 8,"category":"aivaz","caption":"Буря на море 1893",
    "content":"\nГосударственный дворцово-парковый музей-заповедник Петергоф, Петергоф.",
    "url":"assets/img/aivaz_storm.jpg"},
    {"id": 9,"category":"aivaz","caption":"Ночь на Чёрном море 1879", 
    "content":'\nКартина Айвазовского «Ночь на Черном море» считается одной из самых сильных его работ. На полотне изображена луна, проглядывающая сквозь тучи, чтобы осветить морским путникам дорогу. А беспокойная, выплескивающаяся из берегов вода, буквально наполняется ее свечением. Этот свет пролит и на тучи, благодаря чему морской пейзаж получился более насыщенным. Айвазовский, изображая Черное море, любил играть со светом, задавая тон всему полотну, придавая ему определенного настроения. Этот прием позволяет передавать особенную красоту поверхности воды, очерчивать объем волн, что неспешно перекатываются в водных просторах.\n\n'
    +'Несмотря на то, что на картине Айвазовского «Ночь на Черном море» изображен небольшой шторм, она вызывает ощущение спокойствия и умиротворения. Корабль плавно рассекает воду в направлении места своего прибытия. Художник изобразил его вдалеке, чтобы придать морскому пространству эффект бесконечности. Луна же служит главным ориентиром для корабля, направляя его движение и сопровождая на протяжении всего путешествия, словно верный спутник.\"\n\n',
    "url":"assets/img/aivaz_moonlight_black_sea.jpg"},
    {"id": 10,"category":"aivaz","caption":"Судно посреди шторма",
    "content":'\nПроизведение «Судно посреди шторма» одно из них. Картина была написана Иваном Константиновичем в 1858 году и до сих пор считается одной из самых глубоких и осмысленных работ. Полотно «Судно посреди шторма» было написано в начале карьеры автора, в нем проглядывается некий максимализм и стремление к свободе. Однако такая желанная свобода может обернуться экзаменом на стойкость.\n\n'
    +'Сюжет картины разворачивается все глубже и глубже, за одной деталью следует другая, по задуманной очередности, не спеша и, не перебивая друг друга. Композиция раскрывает свой смысл постепенно, словно бутон, открывая сначала одно видение чувств, затем другое.\n\n'
    +'С помощью игры красок и теней автору с лёгкостью удалось передать настроение бушующего моря. Непослушные волны, готовые носить корабль, наклоняя его, то влево, то вправо, грозное собрание облаков, способных тотчас опрокинуть с небес тонну воды и темный маленький корабль, находящийся в самом центре картины – все это мгновенно цепляет зрителя.\"\n\n',
    "url":"assets/img/aivaz_ship.jpg"},
    {"id": 11,"category":"aivaz","caption":"Штиль 1885",
    "content":'\nПеред нами великолепная голубая симфония цвета: легкая, светлая, воздушная. Летний солнечный день. Высоко в небе плывут пушистые белые облака, их отражения бело-розовыми тенями лежат на светло-лазурной воде. Море какого-то невероятного цвета – оно незаметно меняет свои оттенки от аквамаринового и лазурного на переднем плане до нежнейших перламутрово-сиреневых полутонов на горизонте, сливаясь с небом.\n\n'
    +'Неподвижно стоит у берега корабль, его отражение отчетливо видно на спокойной зеркальной глади. Расправленные белые паруса безжизненно повисли, узкими полосками свисают с мачт трехцветные итальянские флаги. Полное безветрие, штиль. Даже крикливые чайки сонно сидят на воде.\n\n'
    +'Прозрачные бирюзовые волны с узкой каемкой пены лениво набегают на пологий берег. Сквозь них хорошо видны камни на морском дне. Время отлива – вода отступила, оставив на мокром песке две шлюпки, да темно-зеленые и бурые водоросли сохнут под палящим солнцем.\"\n\n',
    "url":"assets/img/aivaz_calm.jpg"},
    {"id": 12,"category":"aivaz","caption":"Волна 1889", 
    "content":"Государственный Русский музей, Санкт-Петербург.",
    "url":"assets/img/aivaz_wave.jpg"},
    {"id": 13,"category":"aivaz","caption":"Лунная ночь в Крыму. Гурзуф 1839", 
    "content":'\nВ ранний период своего творчества Айвазовский пишет романтический пейзаж «Лунная ночь в Крыму. Гурзуф». Спокойные зеленовато-синие тона, использованные художником для этого полотна, подчеркивают умиротворенность и поэзию южной ночи, красоту изменчивой крымской природы. \n\n'
    +'Луна, ласкающая своими лучами проплывающие над Гурзуфской бухтой облака, замерла над дремлющим Аю-Дагом, скалой Дженевез-Кая с руинами древней крепости, небольшим мысом у ее основания, белыми скалами-близнецами Адаларами, скатившимися в море с Крымских гор миллионы лет назад. Лунный свет разливается по небу, превращает в золотистое зеркало поверхность воды, отражающую горы и стоящие в бухте корабли.\n\n',
    "url":"assets/img/aivaz_moonlight.jpg"},
    {"id": 14,"category":"popov","caption":"Адам и Ева. Потерянный Рай 2004 год","content": '\nБрошенный человек на брошенной земле В Библии, а именно в ее первой части – Бытие, рассказывается о том, как Бог изгнал первых из рода людей – Адама и Еву – за то, что они ослушались его. Этот фрагмент из священного писания лег в сюжетную основу произведения Попова.\n\n'
    +'Предание гласит, что Бог, создав Адама, а затем из его ребра – Еву, дал им все, что можно пожелать. Первые люди могли беспрепятственно пользоваться всеми этими дарами, однако было одно условие – строго запрещено рвать яблоки с Древа познания добра и зла. Дьявол в лице змея-искусителя подтолкнул первых людей нарушить запрет, сначала Бога ослушалась Ева, а затем она же соблазнила сделать тоже самое Адама. За это они и были навсегда изгнаны из рая.\n\n'
    +'Автор мастерски изобразил именно тот момент, когда вся прежняя жизнь первых людей стремительно обрушилась, грех искупить невозможно и виной всему их безумное любопытство, затмившее разум.\n\n'
    +'Особенно сильно трагичность передает душераздирающий крик Адама, у которого на коленях лежит, понурив голову Ева.\n\n'
    +'Палитра картины наполнена бледными, ненасыщенными оттенками. Такой выбор цветов Попов сделал, чтобы подчеркнуть пустынность, в которую попали Адам и Ева в наказание за содеянное. Подбор палитры также указывает на направление реализма, которого придерживался Попов. Это ярко выражено в старании автора максимально правдоподобно изобразить Адама и Еву, их эмоции и потрескавшуюся, безжизненную землю на которую их изгнал Бог.\n\n'
    +'Голый и брошенный человек на голой и брошенной земле – именно так можно описать изображенную сцену на картине “Адам и Ева. Потерянный рай”.\n\n'
    +'Многие могут решить, что Попов вложил в эту картину некий скрытый смысл, какую-то пищу для размышления. Возможно, автор хотел сказать, что у каждого человека – свой потерянный рай, однако это всего лишь догадки, ничем не подкрепленные. Каждый трактует увиденное на картине так, как его видит. В этом и есть смысл искусства: оно дает человеку возможность самому закладывать смысл в увиденное, услышанное или прочитанное.\n\n', 
    "url":"assets/img/popov_lost_heaven.jpg"},
]