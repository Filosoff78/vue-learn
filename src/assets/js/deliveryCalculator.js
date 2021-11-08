import { numberAnimation } from '../../animejs';
export function showMapJS() {
    // Стоимость за километр.
    let DELIVERY_TARIFF = 20,
    // Минимальная стоимость.
        MINIMUM_COST = 700,
        myMap = new ymaps.Map('map', {
            center: [60.906882, 30.067233],
            zoom: 9,
            controls: []
        }),
    // Создадим панель маршрутизации.
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                maxWidth: 300,
                showHeader: true,
                title: 'Расчёт доставки'
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true},
        allowSwitch: false,
    });

		routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Набережная улица, 1/27'
     });


    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                // Вычислим стоимость доставки.
                price = calculate(Math.round(length.value / 1000));
                window.deliverycost = price;
                numberAnimation(document.getElementById("deliverycost"), price, 1000)
                window.deliveryto = routePanelControl.routePanel.state.get('to')
            }
        });

    });
    // Функция, вычисляющая стоимость доставки.
    function calculate(routeLength) {
        return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    }
}
export function showMapContact() {
    window.ymapcontact = true
    var myMap = new ymaps.Map("map2", {
            center: [59.855733, 30.966446],
            zoom: 13,
            controls: []
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([59.855733, 30.966446], {
            // balloonContent: 'цвет <strong>красный</strong>'
        }, {
            preset: 'islands#greenFactoryIcon'
        }));
}