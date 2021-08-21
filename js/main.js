$(document).ready(function () {
  var currentFloor = '02' //переменная текущего этажа
  var floorPath = $(".home-image path")//каждый отдельный этаж в SVG
  var counterUp = $(".counter-up")/*Кнопка увелечения этажа*/
  var counterDown = $(".counter-down")/*Кнопка уменьшения этажа*/
  var modal = $(".modal")//вызов модального окна
  var modalCloseButton = $(".modal-close-button")//закрытие модального окна
  var viewFlatsButton = $(".view-flats")

  function changeFloor(predicate, change) {
    if (predicate(currentFloor)) {//проверяем значение этажа
    change();//изменяем значение этажа
    usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
    useGroupping: false });//форматируем переменную с этажом(01, а не 1)
    $(".counter").text(usCurrentFloor);//записываем номер этажа в счетчик справа
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подветка текущего этажа
    }
  }

  //Функция при наведении на этаж
  floorPath.on("mouseover", function () {//наведение на этаж мышью
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");//получаем значение текущего этажа
    $(".counter").text(currentFloor);//запись значиния этажа в счетчик
  });

  floorPath.on("click", toggleModal);//при клике на этаж, откроет окно
  modalCloseButton.on("click", toggleModal);//при клике на крестик, закроет окно
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", () => changeFloor((floor) => { return floor < 18; }, 
                                    () => { currentFloor++; }));
  counterDown.on("click", () => changeFloor((floor) => { return floor > 2; }, 
                                      () => { currentFloor--; }));
    function toggleModal() {//функция открытия/закрытия модального окна
    modal.toggleClass("is-open");
    }
});