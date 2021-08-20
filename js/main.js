$(document).ready(function () {
  var currentFloor = '02' //переменная текущего этажа
  var floorPath = $(".home-image path")//каждый отдельный этаж в SVG
  var counterUp = $(".counter-up")/*Кнопка увелечения этажа*/
  var counterDown = $(".counter-down")/*Кнопка уменьшения этажа*/
  var modal = $(".modal")//вызов модального окна
  var modalCloseButton = $(".modal-close-button")//закрытие модального окна
  var viewFlatsButton = $(".view-flats")

  //Функция при наведении на этаж
  floorPath.on("mouseover", function () {//наведение на этаж мышью
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");//получаем значение текущего этажа
    $(".counter").text(currentFloor);//запись значиния этажа в счетчик
  });

  floorPath.on("click", toggleModal);//при клике на этаж, откроет окно
  modalCloseButton.on("click", toggleModal);//при клике на крестик, закроет окно
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function(){//отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {//проверяем значение этажа, оно не должно быть больше 18
      currentFloor++;//прибавляем один этаж
    usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
    useGroupping: false });//форматируем переменную с этажом(01, а не 1)
    $(".counter").text(usCurrentFloor);//записываем номер этажа в счетчик справа
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подветка текущего этажа
    }
  });
  counterDown.on("click", function() {//отслеживаем клик по кнопке вниз
    if (currentFloor > 2) {//проверяем значение этажа, оно не должно быть меньше 2
      currentFloor--;//уменьшаем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGroupping: false });//форматируем переменную с этажом(01, а не 1)
      $(".counter").text(usCurrentFloor);//записываем номер этажа в счетчик справа
      floorPath.removeClass("current-floor");//удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подветка текущего этажа
    }
  });
    function toggleModal() {//функция открытия/закрытия модального окна
    modal.toggleClass("is-open");
    }
});