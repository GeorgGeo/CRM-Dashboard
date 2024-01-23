//replace name user
function updateGreetingName() {
    let greetingName = document.querySelector('.greeting-name');
    let footerName = document.getElementById('name-footer');

    let footerNameText = footerName.textContent;

    // Обновляем текст в h6
    let greetingText = ` ${footerNameText} `;

    // Очищаем содержимое .greeting-name
    while (greetingName.firstChild) {
        greetingName.removeChild(greetingName.firstChild);
    };

    // Добавляем новый текст
    greetingName.appendChild(document.createTextNode(greetingText));
};

updateGreetingName();
//======
(function ($) {
    // Находим родителя
    let parentContainer = document.getElementById('pagination-data-container');

    // Добавляем обработчик событий к родителю
    parentContainer.addEventListener('click', function (event) {
        // Проверяем, что клик был именно по кнопке с классом 'color-change-button'
        if (event.target.classList.contains('color-change-button')) {
            console.log('Button clicked'); // добавьте эту строку

            // Генерация случайного цвета
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

            // Применение нового цвета к фону кнопки
            event.target.style.backgroundColor = randomColor;

            // Добавление класса для измененного цвета (опционально)
            event.target.classList.add('color-changed');
        }
    });
})(jQuery);

//add and remove class active
// $(document).ready(function () {
//   $("ul li").click(function () {
//     $("li").removeClass("ui-state-active");
//     $(this).addClass("ui-state-active");
//   });
// });

(function ($) {
    $(function () {
    const users = [
        {
            name: "Jane Cooper",
            company: "Microsoft",
            phone: "(225) 555-0118",
            email: "jane@microsoft.com",
            country: "United States",
            status: "Active",
        },
        {
            name: "Floyd Miles",
            company: "Yahoo",
            phone: "(205) 555-0100",
            email: "floyd@yahoo.com",
            country: "Kiribati",
            status: "Inactive",
        },
        {
            name: "Ronald Richards",
            company: "Adobe",
            phone: "(302) 555-0107",
            email: "ronald@adobe.com",
            country: "Israel",
            status: "Inactive",
        },
        {
            name: "Marvin McKinney",
            company: "Tesla",
            phone: "(252) 555-0126",
            email: "marvin@tesla.com",
            country: "Iran",
            status: "Active",
        },
        {
            name: "Jerome Bell",
            company: "Google",
            phone: "(629) 555-0129",
            email: "jerome@google.com",
            country: "Réunion",
            status: "Active",
        },
        {
            name: "Kathryn Murphy",
            company: "Microsoft",
            phone: "(406) 555-0120",
            email: "kathryn@microsoft.com",
            country: "Curaçao",
            status: "Active",
        },
        {
            name: "Jacob Jones",
            company: "Yahoo",
            phone: "(208) 555-0112",
            email: "jacob@yahoo.com",
            country: "Brazil",
            status: "Active",
        },
        {
            name: "Kristin Watson",
            company: "Facebook",
            phone: "(704) 555-0127",
            email: "kristin@facebook.com",
            country: "Åland Islands",
            status: "Inactive",
        },
        //9
        {
            name: "Kris Wat",
            company: "Facebook",
            phone: "(804) 115-0120",
            email: "kris@facebook.com",
            country: "Irish Islands",
            status: "Inactive",
        },
        {
            name: "Kras Wato",
            company: "Facebook",
            phone: "(804) 115-0120",
            email: "kras@facebook.com",
            country: "Irish Islands",
            status: "Active",
        }
    ];
    // Отображение данных в одном grid-container
    function renderData(data) {
        var html = '<div class="grid-container">';
        html += '<div class="grid-container__item grid-container__item--header">Customer Name</div>';
        html += '<div class="grid-container__item grid-container__item--header">Company</div>';
        html += '<div class="grid-container__item grid-container__item--header">Phone Number</div>';
        html += '<div class="grid-container__item grid-container__item--header">Email</div>';
        html += '<div class="grid-container__item grid-container__item--header">Country</div>';
        html += '<div class="grid-container__item grid-container__item--header">Status</div>';

        $.each(data, function (index, item) {
            html += '<div class="grid-container__item grid-container__item--name">' + item.name + '</div>';
            html += '<div class="grid-container__item grid-container__item--company">' + item.company + '</div>';
            html += '<div class="grid-container__item grid-container__item--phone">' + item.phone + '</div>';
            html += '<div class="grid-container__item grid-container__item--email">' + item.email + '</div>';
            html += '<div class="grid-container__item grid-container__item--country">' + item.country + '</div>';
            html += '<div class="grid-container__item grid-container__item--status"><button class="btn ' + (item.status === 'Active' ? 'btn-active' : 'btn-inactive') + ' color-change-button">' + item.status + '</button></div>';
        });

        html += '</div>';
        $('#pagination-data-container').html(html);
    }

    // Инициализация пагинации
    function initializePagination(totalPages) {
        $('#pagination-bar').twbsPagination({
            totalPages: totalPages,
            visiblePages: 4,
            //option pagination
            first: "",
            prev: "<",
            next: totalPages.toString(),
            // next: ">",
            // last: "40",
            // last: totalPages.toString(),
            last: ">",
            //end
            onPageClick: function (event, page) {
                // Вставляем многоточие после создания пагинации
                var ellipsis = '<li class="page-item"><span class="page-link">...</span></li>';
                $('#pagination-bar li.page-item:nth-child(5)').after(ellipsis);

                // Загружаем и отображаем данные для текущей страницы
                var startIndex = (page - 1) * pageSize;
                var data = users.slice(startIndex, startIndex + pageSize);
                renderData(data);
            }
        });
    };

    // Количество элементов на странице
    var pageSize = 8;

    // Инициализация первой страницы
    var initialData = users.slice(0, pageSize);
    renderData(initialData);

    // Инициализация пагинации с общим количеством страниц
    // initializePagination(Math.ceil(users.length / pageSize));
    // Инициализация пагинации с общим количеством страниц
    initializePagination(40);
});
})(jQuery);
//=================

//===============
// TABS
//!==========
document.addEventListener('DOMContentLoaded', function() {
  $(function() {
    $("#tabs").tabs({
      activate: function(event, ui) {
        $("#tabs ul li").removeClass("active");
        $(ui.newTab).addClass("active");
      }
    });
  });

   // Добавляем класс active только к третьему li
   $("#tabs ul li:eq(2)").addClass("active");
 });
//!

$(document).ready(function() {
    // Активируем вкладки с использованием jQuery UI Tabs
    $("#tabs").tabs();

    // Делаем третий пункт меню активным
    $(".menu-list__item:nth-child(3)").addClass("active");

    // Активируем вкладку "tabs-3"
    $("#tabs").tabs("option", "active", 2);

    // Вызываем функцию создания динамического контейнера после активации вкладок
    createDynamicContainer();

    // Функция для создания динамического контейнера во вкладке "tabs-3"
    function createDynamicContainer() {
        // Создаем контейнер
        var dynamicContainer = $('<div class="grid-container"></div>');

        // Добавляем данные в контейнер с использованием метода append
        //Row 1 
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Customer Name</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Company</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Phone Number</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Email</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Country</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--header">Status</div>');
        //Row 2
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Jane Cooper</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Microsoft</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(225) 555-0118</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">jane@microsoft.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">United States</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class=" btn btn-active color-change-button">Active</button></div>');
        //Row 3
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Floyd Miles</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Yahoo</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(205) 555-0100</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">floyd@yahoo.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Kiribati</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class="btn btn-inactive color-change-button">Inactive</button></div>');
        //Row 4
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Ronald Richards</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Adobe</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(302) 555-0107</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">ronald@adobe.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Israel</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class="btn btn-inactive color-change-button">Inactive</button></div>');
        //Row 5
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Marvin McKinney</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Tesla</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(252) 555-0126</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">marvin@tesla.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Iran</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class=" btn btn-active color-change-button">Active</button></div>');
        //Row 6
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Jerome Bell</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Google</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(629) 555-0129</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">jerome@google.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Réunion</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class=" btn btn-active color-change-button">Active</button></div>');
        //Row 7
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Kathryn Murphy</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Microsoft</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(406) 555-0120</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">kathryn@microsoft.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Curaçao</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class=" btn btn-active color-change-button">Active</button></div>');
        //Row 8
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Jacob Jones</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Yahoo</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(208) 555-0112</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">jacob@yahoo.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Brazil</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class=" btn btn-active color-change-button">Active</button></div>');
        //Row 9
        dynamicContainer.append('<div class="grid-container__item grid-container__item--name">Kristin Watson</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--company">Facebook</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--phone">(704) 555-0127</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--email">kristin@facebook.com</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--country">Åland Islands</div>');
        dynamicContainer.append('<div class="grid-container__item grid-container__item--status"><button class="btn btn-inactive color-change-button">Inactive</button></div>');        

        // Добавляем контейнер во вкладку с id="tabs-3"
        $("#tabs-3 .product__table").html(dynamicContainer);
    }
});

