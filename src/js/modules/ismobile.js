// готовая переменная, которая  определяет 
//что сайт открыт на мобильном устройстве


// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android|android|ipad|playbook|silk/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (
//                 isMobile.Android()
//                 || isMobile.BlackBerry()
//                 || isMobile.iOS()
//                 || isMobile.Opera()
//                 || isMobile.Windows()
//                 );
//     }
// };
//сама проверка
//если isMobile.any(true), тогда добавляется класс 'touch'
//если нет, тогда добавляется класс 'pc'

//так как появление стрелочки на некоторых устройствах не гарантированно на 100%,
//просто убираем фильтр по устройсвам и квлючаем работу стрелочки на всех устройсвах





//  if(isMobile.any()){//всё для версии с точ скрином
//     document.body.classList.add('touch');
    //собираем в переменную все стрелки
    let menuArrows= document.querySelectorAll('.arrow');
    //условие, где проверяем есть ли они в массиве переменных
    //и запускаем цикл
    //чтобы по всем им пробежаться
    if(menuArrows.length >0){
        for (let index = 0; index < menuArrows.length; index++){
        const menuArrow = menuArrows[index];
        //каждой найденной будем навешивать событие клик
        menuArrow.addEventListener("click", function(e){
            //навешиваем клас родителю какой либо стрелки
            menuArrow.parentElement.classList.toggle('active')
        });
    }
    }
    
// }else{//все для пк версии
//     document.body.classList.add('pc');
//  };
    
