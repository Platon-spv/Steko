function initMap() {
  var markers;
  var markerCluster;
  var map = new google.maps.Map(document.getElementById('google_map'), {
    zoom: 6,
    maxZoom: 16,
    minZoom: 6,
    center: {lat: 49.132585, lng: 31.2130707}
  });

  var infowindow = new google.maps.InfoWindow;
  var image = 'images/steko-marker.png';

  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP,
      icon: image
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      window.location = location.urls;
    });
    google.maps.event.addListener(marker, 'mouseover', function(evt) {
      infowindow.setContent(location.info);
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function(evt)
      {infowindow.close();
    });
    return marker;
  });

  markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    maxZoom: 13,
    gridSize: 28,
    styles: null,
    zoomOnClick: true
  });




  }
  var locations = [
    {lat: 48.5099136, lng: 35.0799884, info: "Официальный салон Steko г. Днепр, ул. Калиновая, 9А", urls: 'http://www.steko.com.ua/buy/salons-steko/dnepr-trading/kalinovaya.html'}, //г. Днепр, ул. Калиновая, 9А
    {lat: 48.433479, lng: 35.011122, info: "Фирменный салон Steko Днепр пр. А. Поля 104А, (ТЦ СЛАВУТИЧ)", urls: 'http://www.steko.com.ua/buy/salons-steko/dnepr-trading/slavutich'}, //г.Днепр пр. А. Поля 104А, (ТЦ СЛАВУТИЧ)
    {lat: 48.4887562, lng: 35.0724678, info: "Официальный салон Steko г. Днепр, ул. Артельная, 2 ", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/dnepr-trading/artelnaja-traide.html'}, //г. Днепр, ул. Артельная, 2
    {lat: 48.529716, lng: 35.030394, info: "Официальный салон Steko г. Днепр ул. Нижнеднепровская, 17", urls: 'http://www.steko.com.ua/buy/salons-steko/dnepr-trading/nizhnedneprovskaya'}, //г. Днепр ул. Нижнеднепровская, 17"
    {lat: 50.4439983, lng: 30.4895648, info: "Официальный салон Steko г. Киев, ул. Старовокзальная 24", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/киев.html'}, //г. Киев, ул. Старовокзальная 24"
    {lat: 49.7939823, lng: 24.0649447, info: "Официальный салон Steko г. Львов, ул.Кавалеридзе, 1", urls: 'http://www.steko.com.ua/buy/salons-steko/lvov-salon/kavaleridze.html'}, //г. Львов, ул.Кавалеридзе, 1
    {lat: 48.522018, lng: 35.0810349, info: "Официальный салон Steko г. Днепр, пр. Слобожанский, 121", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/dnepr-trading/sloboshanski.html'}, //г. Днепр, пр. Слобожанский, 121
    {lat: 49.9770386, lng: 24.0922711, info: "Официальный салон Steko пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.", urls: 'http://www.steko.com.ua/buy/salons-steko/lvov-salon/nadichi.html'}, //пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.
    {lat: 46.832784, lng: 35.3642249, info: "Официальный салон Steko г. Мелитополь, проспект Хмельницкого 54", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/мелитополь.html'}, //г. Мелитополь, проспект Хмельницкого 54
    {lat: 50.6113202, lng: 26.2740851, info: "Официальный салон Steko г. Ровно, ул.Степана Бандеры, 60", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/rovno-trade.html'}, //г. Ровно, ул.Степана Бандеры, 60
    {lat: 48.427168, lng: 35.0343, info: "Официальный салон Steko г. Днепр, пр. Гагарина, 131", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/dnepr-trading/gagarina.html'}, //г. Днепр, пр. Гагарина, 131
    {lat: 46.650255, lng: 32.6068366, info: "Официальный салон Steko г. Херсон, ул. Тираспольская, 1", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/херсон.html'}, // г. Херсон, пер. Козацкий, 21а
    {lat: 46.9652163, lng: 31.9795882, info: "Официальный салон Steko г. Николаев, ул.Пушкинская, 53", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/nikolaev.html'}, //г. Николаев, ул.Пушкинская, 53
    {lat: 48.4799936, lng: 35.0796439, info: "Официальный салон Steko г. Днепр, ул. Любарского, 98", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/dnepr-trading/lubarskogo.html'}, //г. Днепр, ул. Любарского, 98
    {lat: 48.475847, lng: 35.020757, info: "Официальный салон Steko г. Днепр, ул. Пастера, 6", urls: 'http://www.steko.com.ua/buy/salons-steko/dnepr-trading/днепр-пастера'}, //г. Днепр, ул. Пастера, 6
    {lat: 49.238893, lng: 28.4945598, info: "Официальный салон Steko г. Винница пр. Коцюбинского, 27", urls: 'http://www.steko.com.ua/buy/salons-steko/vinica-trade'}, //г. Винница пр. Коцюбинского, 27
    {lat: 49.451501, lng: 27.012728, info: "Официальный салон Steko г. Хмельницкий, ТЦ 'АГОРА'", urls: 'http://www.steko.com.ua/buy/salons-steko/khmelnitskiy'}, //г. Хмельницкий, ТЦ 'АГОРА'
    {lat: 49.0615055, lng: 33.4077613, info: "Официальный салон Steko г. Кременчуг ул. Первомайская, 23", urls: 'http://www.steko.com.ua/buy/salons-steko/kremenchug'}, //г. Кременчуг ул. Первомайская 23
    {lat: 49.593066, lng: 34.544648, info: "Официальный салон Steko г. Полтава, ул. Соборности, 46", urls: 'http://www.steko.com.ua/buy/salons-steko/oltava-trading'}, //г. Полтава, ул. Соборности, 46
    {lat: 49.812142, lng: 23.975195, info: "Официальный салон Steko г. Львов yл. Щирецька,36", urls: 'http://www.steko.com.ua/buy/salons-steko/lvov-salon/shirecka'},
    {lat: 49.859520, lng: 24.019075, info: "Официальный салон Steko г. Львов просп. Вячеслава Черновола, 67", urls: 'http://www.steko.com.ua/buy/salons-steko/lvov-salon/lviv-inter'}, //г. Львов просп. Вячеслава Черновола, 67
    {lat: 47.835935, lng: 35.122594, info: "Официальный салон Steko г. Запорожье(Амстор) ул.Победы, 64", urls: 'http://www.steko.com.ua/buy/2016-07-02-08-33-18/zap-trade.html'}, //г. Запорожье(Амстор) ул.Победы, 64
    {lat: 50.028746, lng: 36.327633, info: "Официальный салон Steko г. Харьков ул. Валентиновская, 35/81", urls: 'http://www.steko.com.ua/buy/salons-steko/харьков'}, //г. Харьков ул. Валентиновская, 35/81
    {lat: 50.058884, lng: 36.199585, info: "Официальный салон Steko г. Харьков ул. просп. Победы, 59,", urls: 'http://www.steko.com.ua/buy/salons-steko/firmenniy-salon-steko-kharkov-3'}, //г. Харьков ул. просп. Победы, 59
      {lat: 49.990275, lng: 36.208013, info: "Официальный салон Steko г. Харьков, ул. Евгения Котляра, 12,", urls: 'http://www.steko.com.ua/buy/salons-steko/firmenniy-salon-steko-kharkov-3/firmenniy-salon-steko-kharkov-4'}, //г. Харьков, ул. Евгения Котляра, 12.
    {lat: 50.443863, lng: 30.628332, info: "Официальный салон Steko г. Киев пр. Юрия Гагарина 2/35", urls: 'http://www.steko.com.ua/buy/salons-steko/kiev-salon/gagarina'}, //г. Киев(левый берег) пр. Юрия Гагарина 2/35
    {lat: 46.472225, lng: 30.742641, info: "Официальный салон Steko г. Одесса ул. Большая Арнаутская 45/501", urls: 'http://www.steko.com.ua/buy/salons-steko/odessa'}, //г. Одесса ул. Большая Арнаутская 45/501
    {lat: 50.912892, lng: 34.799712, info: "Официальный салон Steko г. Сумы ул. Кооперативная 23", urls: 'http://www.steko.com.ua/buy/salons-steko/symi'}, //г. Сумы ул. Кооперативная 23
    {lat: 48.532015, lng: 35.868434, info: "Официальный салон Steko г. Павлоград ул. Соборная 97А", urls: 'http://www.steko.com.ua/buy/salons-steko/pavlogr'}, //г. Павлоград ул. Соборная 97А
    {lat: 51.495578, lng: 31.305050, info: "Официальный салон Steko г. Чернигов ул. Гетьмана Полуботка, 26", urls: 'http://www.steko.com.ua/buy/salons-steko/chernigov-1'}, //г. Чернигов ул. Гетьмана Полуботка 26
    {lat: 48.629507, lng: 35.260554, info: "Официальный салон Steko г. Новомосковск ул. 195-й Стрелковой дивизии, 6", urls: 'http://www.steko.com.ua/buy/salons-steko/novomoskovsk-salon'}, //г. Новомосковск ул. 195-й Стрелковой дивизии, 6
    {lat: 48.600942, lng: 34.574758, info: "Официальный салон Steko г. Каменское, б-р Строителей 27 а, ТЦ Терра", urls: 'http://www.steko.com.ua/buy/salons-steko/kamenskoe-terra'}, //г. Каменское, б-р Строителей 27 а, ТЦ Терра
    {lat: 48.929156, lng: 24.720807, info: "Официальный салон Steko г. Ивано-Франковск ул. Генерала Тарнавского, 36", urls: 'http://www.steko.com.ua/buy/salons-steko/ivano-frankivsk-36'}, //г.Ивано-Франковск ул. Генерала Тарнавского, 36
    {lat: 47.903737, lng: 33.341072, info: "Официальный салон Steko г. Кривой Рог, пл. Александра Поля, 1", urls: 'http://www.steko.com.ua/buy/salons-steko/k-rog'}, //г. Кривой Рог, пл. Александра Поля, 1
    {lat: 48.510718, lng: 32.271771, info: "Официальный салон Steko г. Кропивницкий(Кировоград) ул. Шевченко 25", urls: 'http://www.steko.com.ua/buy/salons-steko/kropivnetskiy-shevcenko'}, //г. Кропивницкий(Кировоград) ул. Шевченко 25
    {lat: 49.547431, lng: 25.595599, info: "Официальный салон Steko г. Тернополь, ул. Липовая 27/12А", urls: 'http://www.steko.com.ua/buy/salons-steko/ternopol'}, //г. Тернополь, ул. Липовая 27/12А
    {lat: 48.029810, lng: 33.473625, info: "Официальный салон Steko г. Кривой Рог, ул. Щепкина 6/3 ", urls: 'http://www.steko.com.ua/buy/salons-steko/k-rog/ул-щепкина,-6-3'}, //г. Кривой Рог, пл. Александра Поля, 1
    {lat: 48.618595, lng: 22.299645, info: "Официальный салон Steko г. Ужгород, ул. Митрака 9/2", urls: 'http://www.steko.com.ua/buy/salons-steko/ujgorod'},  // г. Ужгород, ул. Митрака 9/2
    {lat: 50.253817, lng: 28.664739, info: "Официальный салон Steko г. Житомир, ул. Большая Бердичевская 15", urls: 'http://www.steko.com.ua/buy/salons-steko/jitomir'},  // г. Житомир, ул. Большая Бердичевская 15{lat: 49.257838, lng: 23.856253, info: "Официальный салон Steko г. Стрий, ул. Богдана Хмельницкого, 12а", urls: '/buy/salons-steko/striy'},// г. Стрий, ул. Богдана Хмельницкого, 12а
      {lat: 50.398829, lng: 24.236283, info: "Официальный салон Steko г. Червоноград, ул. Стуса, 34", urls: 'http://www.steko.com.ua/buy/salons-steko/chervonograd'},// г. Червоноград, ул. Стуса, 34
      {lat: 50.754335, lng: 25.344504, info: "Официальный салон Steko   г. Луцк, пр-т Перемоги, 11", urls: 'http://www.steko.com.ua/buy/salons-steko/lutsk'}, // г. Луцк, пр-т Перемоги, 11
      {lat: 46.582467, lng: 30.783906, info: "Официальный салон Steko   г. Одесса, п. Котовского, ул. Заболотного, 1", urls: 'http://www.steko.com.ua/buy/salons-steko/kotovskogo'}, // г. Одесса, п. Котовского, ул. Заболотного, 1
      {lat: 47.8061116, lng: 35.1833741, info: "Официальный салон Steko   Запорожье, просп. Соборный, 24", urls: 'http://www.steko.com.ua/buy/salons-steko/kotovskogo'}, // Запорожье, просп. Соборный, 24,
      {lat: 46.4134042, lng: 30.7120752, info: "Официальный салон г. Одесса, п. Таирова, пр-т Небесной сотни, 15", urls: 'http://www.steko.com.ua/buy/salons-steko/odessa-trade/nebesnoy-sotni'},
      {lat: 47.0998654, lng: 37.5211567, info: "г. Мариуполь, проспект Строителей 98", urls: 'http://www.steko.com.ua/buy/salons-steko/firmenniy-salon-steko-mariupol'},
      {lat: 48.618595, lng: 22.299645, info: "Официальный салон Steko г. Ужгород, ул. Митрака 9/2", urls: 'http://www.steko.com.ua/buy/salons-steko/ujgorod'},  // г. Ужгород, ул. Митрака 9/2
      {lat:50.4382630, lng: 30.4754990, info: "Официальный салон Steko г. Киев (правый берег), пр-т Воздухофлотский, 18", urls: 'http://www.steko.com.ua/buy/salons-steko/kiev-salon/kiev-vozduhoflotskiy'}, // г. Киев (правый берег), пр-т Воздухофлотский, 18
      {lat:50.5131233, lng: 30.4945674, info: "Официальный салон Steko г. Киев (правый берег), ул . Маршала Тимошенка, 21 корпус 8", urls: 'http://www.steko.com.ua/buy/salons-steko/kiev-salon/kiev-tymoshenko'}, //г. Киев (правый берег), ул . Маршала Тимошенка, 21 корпус 8
      {lat:50.5131233, lng: 30.4945674, info: "Официальный салон Steko г. Киев, ул. Киото, 3.", urls: 'http://www.steko.com.ua/buy/salons-steko/kiev-salon/kiev-kioto'}, //г. Киев, ул. Киото, 3.
      {lat:48.270617, lng: 25.947652, info: "Официальный салон г. Черновцы, ул.Главная, 185", urls: 'http://www.steko.com.ua/buy/salons-steko/chernovtsy'}, //г. Черновцы, ул.Главная, 185
      {lat:47.569413, lng: 34.381655, info: "Официальный салон г. Никополь, пр-т Трубников, 13", urls: 'http://www.steko.com.ua/buy/salons-steko/nokopol'}, //г. Никополь, пр-т Трубников, 13
      {lat:48.729011, lng: 37.592705, info: "Официальный салон г. Краматорск, ул. Парковая, 61", urls: 'http://www.steko.com.ua/buy/salons-steko/kramatorsk'}, // г. Краматорск, ул. Парковая, 61
      {lat:48.680072, lng: 26.591331, info: "Официальный салон Steko г. Каменец - Подольский, пр-т Грушевского, 40/1", urls: 'http://www.steko.com.ua/buy/salons-steko/kramatorsk-2'}, //г. Каменец - Подольский, пр-т Грушевского, 40/1
      {lat:49.2578359, lng:  23.856227, info: "Официальный салон Steko г. Стрий, ул. Богдана Хмельницкого, 12а", urls: 'http://www.steko.com.ua/buy/salons-steko/striy'},// г. Стрий, ул. Богдана Хмельницкого, 12а
      {lat:49.889980, lng: 28.611012, info: "Официальный салон Steko г. Бердичев, ул. Европейская, 99", urls: 'http://www.steko.com.ua/buy/salons-steko/berdychev'},// г. Бердичев, ул. Европейская, 99
      {lat:48.848210, lng: 37.600894, info: "Официальный г. Славянск, ул. Шовковичная, 23", urls: 'http://www.steko.com.ua/buy/salons-steko/slavyansk'},// г. Славянск, ул. Шовковичная, 23
      {lat:49.853548, lng: 24.039089, info: "Официальный г. Львов, ул. Б. Хмельницкого, 129.", urls: 'http://www.steko.com.ua/buy/salons-steko/lvov-salon/b-hmelnizkogo'},// г. Львов, ул. Б. Хмельницкого, 129
      {lat:49.7724325, lng: 30.1255038, info: "Официальный салон Steko г. Белая Церковь, ул. Вернадского, 2Г.", urls: 'http://www.steko.com.ua/buy/salons-steko/kiev-salon/belaya-tserkov'}, //г. Белая Церковь, ул. Вернадского, 2Г.
      {lat:48.591562, lng: 37.967316, info: "Официальный салон Steko г. Бахмут, ул. Леваневского, 154/31.", urls: 'http://www.steko.com.ua/buy/salons-steko/bahmut'}, //г. Бахмут, ул. Леваневского, 154/31.
  ];

  function initMap2() {
      var myLatLng1 = {lat: 48.4887562, lng: 35.0724678, info: "Официальный дилер Steko г. Днепр, ул. Артельная, 2 ", urls: '/buy/2016-07-02-08-33-18/dnepr-trading/artelnaja-traide.html'};
      var myLatLng2 = {lat: 48.522018, lng: 35.0810349, info: "Официальный дилер Steko г. Днепр, пр. Слобожанский, 121", urls: '/buy/2016-07-02-08-33-18/dnepr-trading/sloboshanski.html'};
      var myLatLng3 = {lat: 48.427168, lng: 35.0343, info: "Официальный дилер Steko г. Днепр, пр. Гагарина, 131", urls: '/buy/2016-07-02-08-33-18/dnepr-trading/gagarina.html'};
      var myLatLng4 = {lat: 48.4799936, lng: 35.0796439, info: "Официальный дилер Steko г. Днепр, ул. Любарского, 98", urls: '/buy/2016-07-02-08-33-18/dnepr-trading/lubarskogo.html'};
      var myLatLng5 = {lat: 48.433382, lng: 35.011028, info: "Официальный дилер Steko г. Днепр, пр. А. Поля 104А", urls: '/buy/salons-steko/dnepr-trading/slavutich'};
      var myLatLng6 = {lat: 48.5099136, lng: 35.0799884, info: "Официальный дилер Steko г. Днепр, ул. Калиновая, 9А", urls: '/buy/salons-steko/dnepr-trading/kalinovaya.html'};
       var myLatLng7 = {lat: 48.529716, lng: 35.030394, info: "Официальный дилер Steko г. Днепр ул. Нижнеднепровская, 17", urls: '/buy/salons-steko/dnepr-trading/nizhnedneprovskaya'};
       var myLatLng8 = {lat: 48.475847, lng: 35.020757, info: "Официальный дилер Steko г. Днепр, ул. Пастера, 6", urls: '/buy/salons-steko/dnepr-trading/днепр-пастера'};
  var image = 'images/steko-marker.png';

  var map2 = new google.maps.Map(document.getElementById('google_map_cyti'), {
    zoom: 12,
    maxZoom: 13,
    minZoom: 12,
    animation: google.maps.Animation.DROP,
    center: {lat: 48.4774646, lng: 35.0487592}
  });

  var infowindow = new google.maps.InfoWindow;

  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map2,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker1, 'click', function(evt) {
      window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng1.info);
      infowindow.open(map2, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function(evt)
      {infowindow.close();
    });




    var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map2,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker2, 'click', function(evt) {
      window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng2.info);
      infowindow.open(map2, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function(evt)
      {infowindow.close();
    });



      var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map2,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker3, 'click', function(evt) {
      window.location = myLatLng3.urls;
    });
    google.maps.event.addListener(marker3, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng3.info);
      infowindow.open(map2, marker3);
    });
    google.maps.event.addListener(marker3, 'mouseout', function(evt)
      {infowindow.close();
    });


  var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: map2,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker4, 'click', function(evt) {
      window.location = myLatLng4.urls;
    });
    google.maps.event.addListener(marker4, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng4.info);
      infowindow.open(map2, marker4);
    });
    google.maps.event.addListener(marker4, 'mouseout', function(evt)
      {infowindow.close();
    });

    var marker5 = new google.maps.Marker({
        position: myLatLng5,
        map: map2,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    google.maps.event.addListener(marker5, 'click', function(evt) {
        window.location = myLatLng5.urls;
    });
    google.maps.event.addListener(marker5, 'mouseover', function(evt) {
        infowindow.setContent(myLatLng5.info);
        infowindow.open(map2, marker5);
    });
    google.maps.event.addListener(marker5, 'mouseout', function(evt)
    {infowindow.close();
    });
      var marker6 = new google.maps.Marker({
          position: myLatLng6,
          map: map2,
          animation: google.maps.Animation.DROP,
          icon: image
      });
      google.maps.event.addListener(marker6, 'click', function(evt) {
          window.location = myLatLng6.urls;
      });
      google.maps.event.addListener(marker6, 'mouseover', function(evt) {
          infowindow.setContent(myLatLng6.info);
          infowindow.open(map2, marker6);
      });
      google.maps.event.addListener(marker6, 'mouseout', function(evt)
      {infowindow.close();
      });
      var marker7 = new google.maps.Marker({
          position: myLatLng7,
          map: map2,
          animation: google.maps.Animation.DROP,
          icon: image
      });
      google.maps.event.addListener(marker7, 'click', function(evt) {
          window.location = myLatLng7.urls;
      });
      google.maps.event.addListener(marker7, 'mouseover', function(evt) {
          infowindow.setContent(myLatLng7.info);
          infowindow.open(map2, marker7);
      });
      google.maps.event.addListener(marker7, 'mouseout', function(evt)
      {infowindow.close();
      });
}


 function initMap3() {
      var myLatLng1 = {lat: 49.7939823, lng: 24.0649447, info: "Официальный салон Steko г. Львов, ул.Кавалеридзе, 1", urls: '/buy/2016-07-02-08-33-18/lvov-salon/kavaleridze'};
      var myLatLng2 = {lat: 49.9770386, lng: 24.0922711, info: "Официальный салон Steko пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.", urls: '/buy/2016-07-02-08-33-18/lvov-salon/nadichi'}; //пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.
      var myLatLng3 = {lat: 49.812142, lng: 23.975195, info: "Официальный салон Steko г. Львов. Ул. Щирецька,36", urls: '/buy/salons-steko/lvov-salon/shirecka'};
      var myLatLng4 = {lat: 49.9770386, lng: 24.0922711, info: "Официальный салон Steko пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.", urls: '/buy/salons-steko/lvov-salon/nadichi.html'}; //пгт. Надычи, ул. Грушевского, 3 Б, Львовская обл.


     var image = 'images/steko-marker.png';
  var map3 = new google.maps.Map(document.getElementById('google_map_cyti-1'), {
    zoom: 11,
    maxZoom: 13,
    minZoom: 11,
    animation: google.maps.Animation.DROP,
    center: {lat: 49.8707425, lng: 24.0180706}
  });

  var infowindow = new google.maps.InfoWindow;

  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map3,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker1, 'click', function(evt) {
      window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng1.info);
      infowindow.open(map3, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function(evt)
      {infowindow.close();
    });




    var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map3,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    google.maps.event.addListener(marker2, 'click', function(evt) {
      window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function(evt) {
      infowindow.setContent(myLatLng2.info);
      infowindow.open(map3, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function(evt)
      {infowindow.close();
    });



      var marker3 = new google.maps.Marker({
         position: myLatLng3,
         map: map3,
         animation: google.maps.Animation.DROP,
         icon: image
     });
     google.maps.event.addListener(marker3, 'click', function(evt) {
         window.location = myLatLng3.urls;
     });
     google.maps.event.addListener(marker3, 'mouseover', function(evt) {
         infowindow.setContent(myLatLng3.info);
         infowindow.open(map3, marker3);
     });
     google.maps.event.addListener(marker3, 'mouseout', function(evt)
     {infowindow.close();
     });

     var marker4 = new google.maps.Marker({
         position: myLatLng3,
         map: map3,
         animation: google.maps.Animation.DROP,
         icon: image
     });
     google.maps.event.addListener(marker4, 'click', function(evt) {
         window.location = myLatLng4.urls;
     });
     google.maps.event.addListener(marker4, 'mouseover', function(evt) {
         infowindow.setContent(myLatLng3.info);
         infowindow.open(map3, marker4);
     });
     google.maps.event.addListener(marker4, 'mouseout', function(evt)
     {infowindow.close();
     });
}


function initMap4() {
    var myLatLng1= {lat: 50.443863, lng: 30.628332, info: "Официальный салон Steko г. Киев пр. Юрия Гагарина 2/35", urls: '/buy/salons-steko/kiev-salon/gagarina'}; //г. Киев(левый берег) пр. Юрия Гагарина 2/35
    var myLatLng2 = {lat: 50.4439983, lng: 30.4895648, info: "Официальный салон Steko г. Киев, ул. Старовокзальная 24", urls: '/buy/2016-07-02-08-33-18/киев.html'};
    var image = 'images/steko-marker.png';
    var map4 = new google.maps.Map(document.getElementById('google_map_cyti_kiev'), {
        zoom: 12,
        maxZoom: 13,
        minZoom: 12,
        animation: google.maps.Animation.DROP,
        center: {lat: 50.455509, lng: 30.563870}
    });

    var infowindow = new google.maps.InfoWindow;

    var marker1 = new google.maps.Marker({
        position: myLatLng1,
        map: map4,
        animation: google.maps.Animation.DROP,
        icon: image
    });

    google.maps.event.addListener(marker1, 'click', function (evt) {
        window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng1.info);
        infowindow.open(map4, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function (evt) {
        infowindow.close();
    });

    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map4,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    google.maps.event.addListener(marker2, 'click', function (evt) {
        window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng2.info);
        infowindow.open(map4, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function (evt) {
        infowindow.close();
    });
}

function initMap7() {
    var myLatLng1 = {lat: 47.8061116, lng: 35.1833741, info: "Официальный салон Steko   Запорожье, просп. Соборный, 24", urls: '/buy/salons-steko/kotovskogo'};
    var myLatLng2 = {lat: 47.835935, lng: 35.122594, info: "Официальный салон Steko г. Запорожье(Амстор) ул.Победы, 64", urls: '/buy/2016-07-02-08-33-18/zap-trade.html'};

    var image = 'images/steko-marker.png';

    var map5 = new google.maps.Map(document.getElementById('google_map_cyti_zapor'), {
        zoom: 12,
        maxZoom: 13,
        minZoom: 12,
        animation: google.maps.Animation.DROP,
        center: {lat: 47.8249834, lng: 35.1429081}
    });

    var infowindow = new google.maps.InfoWindow;

    var marker1 = new google.maps.Marker({
        position: myLatLng1,
        map: map5,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map5,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    google.maps.event.addListener(marker2, 'click', function (evt) {
        window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng2.info);
        infowindow.open(map5, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function (evt) {
        infowindow.close();
    });

    google.maps.event.addListener(marker1, 'click', function (evt) {
        window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng1.info);
        infowindow.open(map5, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function (evt) {
        infowindow.close();
    });
}

        // Одесса
function initMap6() {
    var myLatLng1 = {lat: 46.582467, lng: 30.783906, info: "Официальный салон Steko   г. Одесса, п. Котовского, ул. Заболотного, 1", urls: '/buy/salons-steko/kotovskogo'};
    var myLatLng2 = {lat: 46.472225, lng: 30.742641, info: "Официальный салон Steko г. Одесса ул. Большая Арнаутская 45/501", urls: '/buy/salons-steko/odessa'};
    var myLatLng3 = {lat: 46.4134042, lng: 30.7120752, info: "Официальный салон г. Одесса, п. Таирова, пр-т Небесной сотни, 15", urls: '/buy/salons-steko/odessa-trade/nebesnoy-sotni'};

    var image = 'images/steko-marker.png';

    var map6 = new google.maps.Map(document.getElementById('google_map_cyti_odessa'), {
        zoom: 12,
        maxZoom: 13,
        minZoom: 12,
        animation: google.maps.Animation.DROP,
        center: {lat: 46.4756116, lng:30.7433657}
    });

    var infowindow = new google.maps.InfoWindow;

    var marker1 = new google.maps.Marker({
        position: myLatLng1,
        map: map6,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map6,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    var marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map6,
        animation: google.maps.Animation.DROP,
        icon: image
    });

    google.maps.event.addListener(marker1, 'click', function (evt) {
        window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng1.info);
        infowindow.open(map6, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function (evt) {
        infowindow.close();
    });

    google.maps.event.addListener(marker2, 'click', function (evt) {
        window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng2.info);
        infowindow.open(map6, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function (evt) {
        infowindow.close();
    });

    google.maps.event.addListener(marker3, 'click', function (evt) {
        window.location = myLatLng3.urls;
    });
    google.maps.event.addListener(marker3, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng3.info);
        infowindow.open(map6, marker3);
    });
    google.maps.event.addListener(marker3, 'mouseout', function (evt) {
        infowindow.close();
    });



}
function initMap5() {
    var myLatLng1 = {lat: 47.903737, lng: 33.341072, info: "Официальный салон Steko г. Кривой Рог, пл. Александра Поля, 1", urls: '/buy/salons-steko/k-rog'};
    var myLatLng2 =  {lat: 48.029810, lng: 33.473625, info: "Официальный салон Steko г. Кривой Рог, ул. Щепкина 6/3 ", urls: '/buy/salons-steko/k-rog/ул-щепкина,-6-3'};

    var image = 'images/steko-marker.png';

    var map6 = new google.maps.Map(document.getElementById('google_map_cyti_k-rog'), {
        zoom: 12,
        maxZoom: 13,
        minZoom: 12,
        animation: google.maps.Animation.DROP,
        center: {lat: 47.9741338, lng:33.4268662}
    });

    var infowindow = new google.maps.InfoWindow;

    var marker1 = new google.maps.Marker({
        position: myLatLng1,
        map: map6,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map6,
        animation: google.maps.Animation.DROP,
        icon: image
    });
    google.maps.event.addListener(marker2, 'click', function (evt) {
        window.location = myLatLng2.urls;
    });
    google.maps.event.addListener(marker2, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng2.info);
        infowindow.open(map6, marker2);
    });
    google.maps.event.addListener(marker2, 'mouseout', function (evt) {
        infowindow.close();
    });

    google.maps.event.addListener(marker1, 'click', function (evt) {
        window.location = myLatLng1.urls;
    });
    google.maps.event.addListener(marker1, 'mouseover', function (evt) {
        infowindow.setContent(myLatLng1.info);
        infowindow.open(map6, marker1);
    });
    google.maps.event.addListener(marker1, 'mouseout', function (evt) {
        infowindow.close();
    });
}


//========= Карта дилеров steko в регионах

function initMapDealer() {

    var markers;
    var markerCluster;
    var map = new google.maps.Map(document.getElementById('google_map_dealer'), {
        zoom: 6,
        maxZoom: 18,
        minZoom: 6,
        center: {lat: 49.132585, lng: 31.2130707}
    });

    var infowindow = new google.maps.InfoWindow;
    var image = 'http://steko.com.ua/images/steko_marker.png';

    jQuery('#close_form').click(function() {
        jQuery('.form_back').animate({
            opacity: 0
        }, 500, function() {
            jQuery('.form_back').css('display', 'none')
        });
    });

    var markers = locationsDealer.map(function(location, i) {

        var marker = new google.maps.Marker({
            position: location,
            animation: google.maps.Animation.DROP,
            icon: image
        });
        google.maps.event.addListener(marker, 'click', function(evt) {
            jQuery('.form_back').attr('data-mail', location.email);
            jQuery('.form_back').css('display', 'block').animate({
                opacity: 1
            }, 500);
        });
        google.maps.event.addListener(marker, 'mouseover', function(evt) {
            infowindow.setContent(location.info);
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function(evt)
        {infowindow.close();
        });
        return marker;
    });

    markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        maxZoom: 13,
        gridSize: 28,
        styles: null,
        zoomOnClick: true
    });
}

var locationsDealer = [
    //Днепр
    {lat: 48.047390, lng: 33.867704, info: "Официальный дилер Steko ЧП Середа С. Г.", email: 'novi_vikna@mail.ua'}, //пгт. Софиевка, ул. Карпенка, 1
    {lat: 48.404057, lng: 35.278535, info: "Официальный дилер Steko Григоренко А.А.", email: 'grigorenko.okna@ukr.net'}, //пос. Илларионово , ул. Рабочая, 13
    {lat: 48.317491, lng: 35.521802, info: "Официальный дилер Steko Тычинский А.Л", email: 'plast_master@ukr.net'}, //г. Синельниково, ул. Садовая д.27
    {lat: 48.510967, lng: 34.612257, info: "Официальный дилер Steko Бондарь Т.Ю.", email: 'supersuperokna@gmail.com'}, //г. Днепродзержинск , просп. Ленина, 59
    {lat: 48.459936, lng: 35.026880, info: "Официальный дилер Steko ЧП Беленький В.А.", email: 'an.antonova@gmail.com'}, //г. Днепропетровск, пр. Кирова, 33в
    {lat: 48.216276, lng: 36.006544, info: "Официальный дилер Steko ЧП Коваленко О. П.", email: 'oleg-1818@meta.ua'}, //пгт.Васильковка, ул.Первомайска, 152
    {lat: 47.908977, lng: 33.399056, info: "Официальный дилер Steko ООО УКР ОТК", email: '4019033@ukr.net'}, //г. Кривой Рог, просп. Гагарина, 20
    {lat: 48.607653, lng: 34.562964, info: "Официальный дилер Steko ФОП Кулешов Ю. И.", email: 'kuleshovj65@mail.ru'}, //г. Днепродзержинск ул. Интернационалистов, 1а
    {lat: 48.493390, lng: 35.932429, info: "Официальный дилер Steko ФЛП Булдакова С.И.", email: 'buldakovda77@gmail.com'}, //г.Павлоград, ул.Гагарина 4;
    {lat: 48.529762, lng: 35.866174, info: "Официальный дилер Steko ФЛП Носач В. И.", email: 'nosachvitaliy7@gmail.com'}, //г.Павлоград, ул. Шевченко 134
    {lat: 47.900662, lng: 33.408148, info: "Официальный дилер Steko ФОП Аракелян Г. А.", email: 'okna.galina@ukr.net'}, // г. Кривой Рог, ул. Соборности 42
    {lat: 48.327556, lng: 35.531073, info: "Официальный дилер Steko ФЛП Морозов В. С.", email: 'morozov1983@ukr.net'}, //г. Синельниково, ул. Исполкомовская, 22
    {lat: 47.941087, lng: 33.415283, info: "Официальный дилер Steko ФОП Иванов О.В.", email: 'triolua2000@gmail.com'}, //г. Кривой рог, ул. Владимира Великого, 30
    {lat: 47.907442, lng: 33.344792, info: "Официальный дилер Steko ЧП Повстен И.А.", email: 'Povsten.ivan@gmail.com'}, //г. Кривой рог, ул. Лермонтова, 2
    {lat: 47.936135, lng: 33.399500, info: "Официальный дилер Steko ФОП Фербей", email: 'okna.sv2@gmail.com'}, //г. Кривой Рог, ул. Харцизская 16
    {lat: 47.908239, lng: 33.420627, info: "Официальный дилер Steko ФОП Лапина О.Н.", email: 'lapina1511@gmail.com'}, //г. Кривой Рог, пр Гагарина 75
    {lat: 47.997723, lng: 33.441919, info: "Официальный дилер Steko ФОП Лапина О.Н.", email: 'lapina1511@gmail.com'}, //г. Кривой Рог ул. Сичеславская, 24

    //Волынская
    {lat: 50.742789, lng: 25.317735, info: "Официальный дилер Steko ФОП Гірський Ігор Ростиславович", email: 'hirskyyihor@gmail.com'}, //м. Луцьк, ул. Богдана Хмельницкого, 48
    {lat: 50.760694, lng: 25.354696, info: "Официальный дилер Steko ФОП Дмитрук Руслан Георгійович", email: '05002266926ds@gmail.com'}, //м. Луцьк вул. Конякіна, 39
    {lat: 51.433497, lng: 24.437519, info: "Официальный дилер Steko ФОП Деркач Андрій Степанович", email: 'derkach05@ukr.net'}, //смт. Стара Вижівка, вул. Незалежності, 9
    {lat: 50.835071, lng: 25.469304, info: "Официальный дилер Steko ФОП Смаль Валерій Созонович", email: 'donkarleone3d@gmail.com'}, //м.Ківерці, вул. Шевченка, ринок
    {lat: 51.766021, lng: 25.505584, info: "Официальный дилер Steko ФОП Смаль Валерій Созонович", email: 'donkarleone3d@gmail.com'}, //м Любешів, вул. Соняшна, ринок
    {lat: 50.852375, lng: 24.321027, info: "Официальный дилер Steko ТОВ Деметра-Буд", email: 'demetra-bud@ukr.net'}, //м.Володимир-Волинський, вул. Ковельська 73

    // Житомирская
    {lat: 51.325340, lng: 28.794059, info: "Официальный дилер Steko Левковский Виктор Николаевич", email: 'vitktor1970@gmail.com'}, //г. Овруч ул. Киевская , 17
    {lat: 50.259991, lng: 28.673448, info: "Официальный дилер Steko ФОП Возниченко В. В.", email: 'stekozhitomir@gmail.com'}, //г. Житомир ул. Киевская, 66
    {lat: 50.316461, lng: 29.059372, info: "Официальный дилер Steko ФОП Ходаковський В. М.", email: 'territoria21steko@i.ua'}, //г. Коростишев ул. Карла Маркса 54
    {lat: 50.312380, lng: 29.057984, info: "Официальный дилер Steko ФОП Деркач О. Б.", email: 'decorplus2010@gmail.com'}, //г. Коростышев ул. Горького ,1а (ТЦ "ДЕНКО")
    {lat: 50.267926, lng: 28.692362, info: "Официальный дилер Steko ФОП Петрановский П. В.", email: 'stekozhitomir@gmail.com'}, //г. Житомир ул. Киевская 120
    {lat: 50.257814, lng: 28.673595, info: "Официальный дилер Steko ФОП Петрановский П. В.", email: 'stekozhitomir@gmail.com'}, //г. Житомир ул. Хлебная 21
    {lat: 50.588196, lng: 27.616884, info: "Официальный дилер Steko ФОП Воят Ю. Л.", email: 'mayakplastnv@gmail.com'}, //г. Новоград-Волынский, ул. Ивана Мамайчука, 10а
    {lat: 50.588611, lng: 27.601401, info: "Официальный дилер Steko ФОП Воят Ю. Л.", email: 'mirokonnv54@gmail.com'}, //г. Новоград-Волынский, ул. Шевченка, 54
    {lat: 50.951877, lng: 28.629611, info: "Официальный дилер Steko ФОП Климчук Сергей Юревич", email: 'officekorteplo@gmail.com'}, //г. Коростень, ул. Базарная площадь 4А
    {lat: 50.951856, lng: 28.629550, info: "Официальный дилер Steko Прогожук А.А.", email: 'alanda07@bigmir.net'}, //г. Коростень, ул. Базарная площадь 4

    //Запорожская
    {lat: 46.844223, lng: 35.380345, info: "Официальный дилер Steko ФЛП Аксёнова Ю.В.", email: 's.t.k@ukr.net'}, //г. Мелитополь, ул. Университетская (Свердлова), 11
    {lat: 47.823506, lng: 35.040634, info: "Официальный дилер Steko ООО Оконный центр", email: 'kirichenkoalex@meta.ua'}, //г. Запорожье  ул. Заднепровская, 66
    {lat: 46.775391, lng: 36.771131, info: "Официальный дилер Steko ФОП Красозов Андрей Николаевич", email: 'andrii.krasozov@gmail.com'}, //Запорожская область, г. Бердянск, Мелитопольское шоссе, 70-А
    {lat: 46.733890, lng: 36.348964, info: "Официальный дилер Steko ФОП Гончаров Едуард Миколайович", email: 'ed-kvadrat@ukr.net'}, //Запорізька обл. м.Приморськ вул.Соборна (Кирова)75т
    {lat: 47.439302, lng: 35.291147, info: "Официальный дилер Steko ФОП Коба Іван Олександрович", email: 'koba.io@mail.ru'}, // Запорізька обл, м. Василівка, бул Центральний 14 (ринок Південний)
    {lat: 47.445710, lng: 35.284687, info: "Официальный дилер Steko ФОП Коба Іван Олександрович", email: 'koba.io@mail.ru'}, // Запорізька обл, м. Василівка, Соборна, 13А (ринок Центральний)
    {lat: 47.889649, lng: 35.164839, info: "Официальный дилер Steko Онищенко В.В., ФЛП", email: 'dom.zp061@gmail.com'}, // Запорожье, ул. Павлокичкасская 28

    //Донецкая
    {lat: 48.980433, lng: 37.815170, info: "Официальный дилер Steko ФЛП Мищенко В. В.", email: 'mister_@i.ua'}, //г. Лиман, ул Сердюка, 2а
    {lat: 48.274636, lng: 37.176590, info: "Официальный дилер Steko ФЛП Соболь В. А.", email: 'carmonomax@gmail.com'}, //г. Покровск, ул. Европейская, 52
    {lat: 48.852365, lng: 37.600879, info: "Официальный дилер Steko ФОП Синчуров А. Н.", email: 'evromaterial@gmail.com'}, //г.Славянск, ул. Университетская, 58
    {lat: 48.513013, lng: 37.729979, info: "Официальный дилер Steko ФЛП Галушко С. А.", email: 'okna.dveri2006@gmail.com'}, //г.Константиновка, ул. Краснодарская, 3р
    {lat: 48.515382, lng: 37.680032, info: "Официальный дилер Steko ФЛП Галушко С. А.", email: 'okna.dveri2006@gmail.com'}, //г.Константиновка, ул. Леваневского, 40
    {lat: 47.104045, lng: 37.650621, info: "Официальный дилер Steko ФЛП Кошевая В.С.", email: 'master_okna@ukr.net'}, //г.Мариуполь, ул.Московская 58/42

    //Ивано-Франковская
    {lat: 48.915480, lng: 24.722544, info: "Официальный дилер Steko ФОП Курчук Я. П.", email: 'doskonaliy.dim@gmail.com'}, //м. Івано-Франківськ, вул.Фотія Володимирського, 2
    {lat: 48.914882, lng: 24.714487, info: "Официальный дилер Steko ФОП Козятинска Мирослава Мирославівна", email: 'mr.kozyatinskiyif@gmail.com'}, //м. Івано Франківськ вул.С.Бандери 6
    {lat: 48.935197, lng: 24.746694, info: "Официальный дилер Steko ФОП Кузів Наталія Василівна", email: 'svit_vikon2016@ukr.net'}, //м.Івано-Франківськ вул.Микалайчука 1а офіс.201
    {lat: 48.81683613415633, lng: 24.200708270072937, info: "Официальный дилер Steko ФОП Волошин Руслан Богданович", email: 'volruslan@gmail.com'}, //смт. Перегінське, вулиця Січович Стрільців 82 Івано-Франківська область
    {lat: 49.033453, lng: 24.358996, info: "Официальный дилер Steko ПП \"ВІКНОЛІДЕР\"", email: 'kalush-manager@viknolider.com.ua'}, // проспект Лесі Українки, 1, Калуш, Івано-Франківська область, 77300

    //Киевская
    {lat: 50.445313, lng: 30.444174, info: "Официальный дилер Steko ТМ Центр ЛТД", email: 'katerinagaluzinskaya@gmail.com'}, //г. Киев, ул. Борщаговская, 154а  (ТЦ Аркадия)
    {lat: 50.456922, lng: 30.343922, info: "Официальный дилер Steko ЧП Тлеужев Н.Л", email: 'tleyzev@ukr.net'}, //г. Киев ул. Николая Ушакова 8-а оф.10
    {lat: 50.507986, lng: 30.427744, info: "Официальный дилер Steko ФОП Свергун П.А.", email: 'svira@email.ua'}, //г. Киев, ул. Светлицкого, 35а, оф 58
    {lat: 50.4580176, lng: 30.6090929, info: "Официальный дилер Steko ФОП Вороной Ю.Н.", email: 'dukat47n@gmail.com'}, //г.Киев, ул.Генерала Жмаченко, 2
    {lat: 49.785541, lng: 30.159004, info: "Официальный дилер Steko ФОП Вареник И. В.", email: 'steko_kievregion@ukr.net'}, //г.Белая Церковь ул.Леваневского 57
    {lat: 50.423212, lng: 30.478212, info: "Официальный дилер Steko Болотов А. А.", email: 'bolotov.okna@gmail.com'}, //г.Киев ул.Златопольская 4
    {lat: 50.340574, lng: 30.293078, info: "Официальный дилер Steko ФОП Рыбаченко А. В.", email: 'kupuy_ta_buduy@ukr.net'}, //г. Боярка, Молодежная, 26а
    {lat: 50.067690, lng: 31.444484, info: "Официальный дилер Steko ФОП Железняк А. А.", email: 'dahtafasad@ukr.net'}, //г. Переяслав-Хмельницкий ул. Школьная 44
    {lat: 50.455161, lng: 30.637806, info: "Официальный дилер Steko ФОП Шамардак А.В.", email: 'ekosteko@gmail.com'}, //г. Киев, левобережный, Магнитогорская 1и, оф.7
    {lat: 50.517374, lng: 30.600993, info: "Официальный дилер Steko ФЛП Яровая Е.В.", email: 'mobiplast@ukr.net'}, //г. Киев, левобережный, ул. Градинская 1
    {lat: 50.457811, lng: 30.642594, info: "Официальный дилер Steko ФОП Гнідая Х.В.", email: 'kriststars88@gmail.com'}, //г. Киев, левобережный, ул. Красноткацкая 42 Д
    {lat: 50.412525, lng: 30.664244, info: "Официальный дилер Steko ФОП Войтенко Р.В", email: 'kievwindow@gmail.com'}, //г. Киев, Харьковское шоссе 172 б
    {lat: 50.409947, lng: 30.603500, info: "Официальный дилер Steko ПП Ловекс-К", email: 'b.krepak@loveks.net'}, //г. Киев ул. Здолбуновская 7Д корпус 3
    {lat: 50.164985, lng: 30.327780, info: "Официальный дилер Steko Якубенко В.А", email: 'evsidveri@ukr.net'}, //г. Васильков, ул. Кармелюка, 16
    {lat: 50.3805144, lng: 30.3706331, info: "Официальный дилер Steko Якубенко В.А", email: 'evsidveri@ukr.net'}, // пгт.Крюковщина, вул. Балукова, 8Б
    {lat: 50.467923, lng: 30.627197, info: "Официальный дилер Steko ФЛП Голенко Василий Васильевич", email: 'kyiv@vitrazh.com.ua'}, //г. Киев ул Братиславская 16
    {lat: 50.520504, lng: 30.242372, info: "Официальный дилер Steko ФОП Голубєв Р.Ю.", email: 'eurobudirpen@gmail.com'}, //г.Ирпень ул. Словянская 35
    {lat: 49.375661, lng: 29.670385, info: "Официальный дилер Steko ФОП Охримович Андрій Володимирович", email: 'andrij.okhrimovich@gmail.com'}, //м Тетіїв вул.Цетральна 14б
    {lat: 50.367077, lng: 31.320769, info: "Официальный дилер Steko ФОП Головач Ігор Дмитрович", email: 'fajnyjdim@ukr.net'}, //Київська обл., смт Баришівка, вул. Київський Шлях 76 Б
    {lat: 50.502022, lng: 31.777738, info: "Официальный дилер Steko ФОП Кичатый В.В.", email: 'kiviva@ukr.net'}, //Київська обл., пгт Згуровка, Украинская улица, 20
    {lat: 49.863674, lng: 30.828469, info: "Официальный дилер Steko ФОП Іщенко Віктор Миколайович", email: 'victorischenko2019@gmail.com'}, // м.Кагарлик вул. Незалежності 24/2
    {lat: 49.970987, lng: 31.041894, info: "Официальный дилер Steko ФОП Іщенко Віктор Миколайович", email: 'victorischenko2019@gmail.com'}, // м.Ржищів вул. Ринкова 3

    //Кировоградская
    {lat: 48.501741, lng: 32.240011, info: "Официальный дилер Steko Зелений Є.В.", email: 'ukr-company@ukr.net'}, //м. Кропивницкий, вул. Євгена Тельнова, 1
    {lat: 48.507144, lng: 32.265762, info: "Официальный дилер Steko ФЛП Шишкина Виктория Олеговна", email: 'oknaok.ua@gmail.com'}, // м. Кропивницький, вул. Гоголя 80-К
    {lat: 48.4964708, lng: 32.2406598, info: "Официальный дилер Steko ЧП Тарсаков Сергей Васильевич", email: 'starsakov2608@meta.ua'}, // м. Кропивницький ул. Комарова 48, м-н Пирамида


    // Луганская
    {lat: 48.913731, lng: 38.426496, info: "Официальный дилер Steko СВ-Мастер", email: 'svmaster.okna@ukr.net'}, //г. Лисичанск, Гетьманская, 55
    {lat: 48.885332, lng: 38.477808, info: "Официальный дилер Steko ФЛП Перцев В. С.", email: 'konstantin62111@gmail.com'}, //г. Лисичанск, Октябрьская 4
    {lat: 49.206756, lng: 39.576672, info: "Официальный дилер Steko ФЛП Белолипецкий В.А.", email: 'rsk.ua2017@gmail.com'}, //Беловодский район, пгт. Беловодск, ул.Центральная, 114
    {lat: 48.942107, lng: 38.495096, info: "Официальный дилер Steko ФЛП Гонтаренко А. И.", email: 'oknasdn@gmail.com'}, //г.Северодонецк, пр.Центральный,  54-б

    // Львовская
    {lat: 49.571770, lng: 22.785695, info: "Официальный дилер Steko ФОП Тимчишин Ігор Ігорович", email: 'sashatum990@gmail.com'}, // Старосамбірський район, м. Добромиль, вул. Площа Ринок 9
    {lat: 49.442670, lng: 23.002209, info: "Официальный дилер Steko Лужецький Василь Володимирович", email: 'vasul_lyzhetskuy@ukr.net'}, // м.Старий Самбір, вул. Лева Галицького 2
    {lat: 50.479103, lng: 24.283002, info: "Официальный дилер Steko ФОП Панас Тарас Васильович", email: 'panok84@ukr.net'}, // Львівська обл, м Сокаль, вул Тартаківська 12
    {lat: 49.8650636, lng: 24.0516082, info: "Официальный дилер Steko Корпало О.А.", email: 'vikna.opt@ukr.net'}, // м. Львів вул. Липинcького 71 В
    {lat: 49.829882, lng:24.0272286, info: "Официальный дилер Steko ФОП Курносова Наталія Леонідівна 'Вікна Двері для оселі'", email:"tolik1948@ukr.net"}, //м.Львів, вул.Дмитра Вітовського 10
    {lat: 50.1017631, lng:24.3417794, info: "'ТОВ'Вікна монтаж сервіс", email:"w.i.s@ukr.nett"}, //Львівська обл, м. Кам"янка-Бузька, вул.Івана Павла ІІ, буд.2,
    // Николаевская
    {lat: 47.409016, lng: 32.437096, info: "Официальный дилер Steko ФЛП Козявко Е. П.", email: 'tepluy_dom_b@ukr.net'}, //г. Баштанка, ул.Полтавская 8/3
    {lat: 46.955021, lng: 32.039448, info: "Официальный дилер Steko Фирма OPEN", email: 'open.mk.ua@gmail.com'}, //г. Николаев, проспект Мира 2а, оф 233
    {lat: 46.950777, lng: 31.942430, info: "Официальный дилер Steko ФОП Марков Р.Ю.", email: 'steko.mk.ua@gmail.com'}, //г. Николаев, ул.Озерная 13в /5 , 2-этаж
    {lat: 46.969142, lng: 31.977599, info: "Официальный дилер Steko ЧП Евдошенко В.П.", email: 'evdoshenko1976@gmail.com'}, //г. Николаев, ул. Рюмина, 2
    {lat: 46.966030, lng: 32.007791, info: "Официальный дилер Steko ФОП Бондаренко Елена Юрьевна (Оконный нестандART)", email: 'nonstandart@ukr.net'}, // г. Николаев пр-т Центральный, 120
    {lat: 46.966430, lng: 31.975038, info: "Официальный дилер Steko ПП Козаков Роман Николаевич", email: 'krn1@ukr.net'}, // г. Николаев  ул. Рюмина, 21
    {lat: 46.974035, lng: 31.988246, info: "Официальный дилер Steko ПП Козаков Роман Николаевич", email: 'krn1@ukr.net'}, // г. Николаев  ул. ул. Спасская 37
    {lat: 46.857968, lng: 32.004612, info: "Официальный дилер Steko ПП Козаков Роман Николаевич", email: 'krn1@ukr.net'}, // г. Николаев  просп. Корабелов 1
    {lat: 46.855459, lng: 32.013920, info: "Официальный дилер Steko ПП Козаков Роман Николаевич", email: 'krn1@ukr.net'}, // г. Николаев  просп. Корабелов 14
    {lat: 46.966326, lng: 31.991684, info: "Официальный дилер Steko ФОП Кучер Н.П", email: 'greenlime.mk@gmail.com'}, // г. Николаев  ул. Московская, 42
    {lat: 47.69093746, lng: 32.51245022, info: "Официальный дилер Steko ФОП Осмолов С.Д", email: 'gogololo1233@ukr.net'}, // г. Новый буг  ул. Площадь Свободы, 67
    {lat:48.0351476 , lng:30.8540449 , info: "Официальный дилер Steko ФЛП \"Самохин Максим Анатолиевич", email: 'pegas.grup.pr@gmail.com'}, //г.Первомаиск ул.Гагарина 29
    {lat:48.0229623 , lng:30.8496585, info: "Официальный дилер Steko ФЛП \"Самохин Максим Анатолиевич", email: 'pegas.grup.pr@gmail.com'}, //г.Первомаиск ул.Одесская 78
    {lat:48.0429605 , lng: 30.8471713 , info: "Официальный дилер Steko ФЛП \"Самохин Максим Анатолиевич", email: 'pegas.grup.pr@gmail.com'}, //г.Первомаиск ул.Толстого 5
    {lat:47.5608316 , lng: 31.3377472 , info: "Официальный дилер Steko ФЛП ФОП Яворский Юрий Бориславович", email: 'yurvoz2017@gmail.com'},   //Николаевская обл., Вознесенский р-н, г.Вознесенск ул.Одесская 33, оф 26




    // Одесская
    {lat: 45.343766, lng: 28.842910, info: "Официальный дилер Steko Эдуард Зарицкий", email: 'okna-izmail@ukr.net'}, // г. Измаил ул. Осипенко 103
    {lat: 45.455756, lng: 28.278300, info: "Официальный дилер Steko ФЛП Кокалко В.А.", email: ' kokalko63@gmail.com'}, // г. Рени, Пролетарская, 12
    {lat: 45.343076, lng: 28.842748, info: "Официальный дилер Steko ФЛП Компаниец Ирина Александровна", email: 'sergej.lozo@i.ua'}, // г. Измаил, ул. Чкалова и угол ул. Котовского
    {lat: 46.29920099, lng: 30.65390199, info: "Официальный дилер Steko ФЛП Шевченко В.С.", email: 'oksan.zaharova@yandex.ru'}, // г. Черноморск, проспект Мира, 39 М
    {lat: 47.751492, lng: 29.532268, info: "Официальный дилер Steko ФОП Мамулат А. А.", email: 'svit__vikon@ukr.net'}, // г. Подольск, ул. Сельскохозяйственная,9
    {lat: 47.946132, lng: 29.621327, info: "Официальный дилер Steko ЧП Габриелян Артур Андраникович", email: 'okna_balta@bigmir.net'}, //г. Балта ул. Ломоносова 24А

    // Полтавская
    {lat: 49.066199, lng: 33.418430, info: "Официальный дилер Steko Авраменко Анатолий Юрьевич", email: 'sirius911@mail.ru'}, //г. Кременчуг , Свердлова , 6/5
    {lat: 49.579801, lng: 34.542963, info: "Официальный дилер Steko ФЛП Пыскив Н. Б.", email: 'nikolay986@ukr.net'}, //г. Полтава, ул. Европейская, 48
    {lat: 49.588864, lng: 34.536199, info: "Официальный дилер Steko ТОВ ОККОМ", email: 'okkom.poltava@gmail.com'}, //Г. Полтава, ул. Шевченка 67а
    {lat: 49.565057, lng: 34.508500, info: "Официальный дилер Steko ТОВ ОККОМ", email: 'okkom.poltava@gmail.com'}, //г. Полтава ул. Ивана Мазепы(Калинина ) 23

    // Ровенская
    {lat: 50.621989, lng: 26.242134, info: "Официальный дилер Steko ФЛП Лёгкая Елена Викторовна", email: 'vekaekodim@ukr.net'}, //г. Ровно, ул. Шевченко, 7
    {lat: 50.618543, lng: 26.258879, info: "Официальный дилер Steko ФОП Ракульцев Михаил Александрович", email: 'viknaplast.rivne@gmail.com'}, //г. Ровно, ул. Соборная 16
    {lat: 51.337817, lng: 26.601739, info: "Официальный дилер Steko ФОП Дмитров Руслан Андреевич", email: 'viknastyle2558@gmail.com'}, //г. Сарны ул. Привокзальная 31 А
    {lat: 50.619013, lng: 27.162690, info: "Официальный дилер Steko ФОП Радковский Александр Олегович", email: 'goldenopt1575@gmail.com'}, // г. Корец, пл. Киевская 2

    // Харьковская
    {lat: 49.995017, lng: 36.335856, info: "Официальный дилер Steko ФЛП Дацюк Е.А", email: 'oknadverikovka@gmail.com'}, //г. Харьков , проспект Юбилейный, 54а

    // Херсонская
    {lat: 46.647818, lng: 32.610588, info: "Официальный дилер Steko Диденко Ю.А", email: 'didenkookna72@gmail.com'}, // г. Херсон просп.Ушакова , 48
    {lat: 46.351359, lng: 34.332793, info: "Официальный дилер Steko Товары для дома", email: 'igor.okna@list.ru'}, //г. Новотроицкое ул.Ленина, 72
    {lat: 46.761100, lng: 33.371281, info: "Официальный дилер Steko ЧП Молокова М.В.", email: 'matimail777@gmail.com'}, //г.Новая Каховка ул. Промышленная, 7
    {lat: 46.814288, lng: 33.485099, info: "Официальный дилер Steko ФОП Суббота Марина Анатольевна", email: 'boss.subbota@gmail.com'}, // г. Каховка, ул. Кооперативная 3, ТЦ "Славянский базар"
    {lat: 46.812622, lng: 33.490380, info: "Официальный дилер Steko ЧП Каховская фабрика окон \"Будмайстер\" ", email: 'budmayster.okna@gmail.com'}, //г. Каховка ул. Мелитопольская 85а
    {lat: 46.526763, lng: 32.524026, info: "Официальный дилер Steko ФЛП Холодняк Е.В", email: 'merocon2005@rambler.ru'}, //г. Голая Пристань ул. Красноармейская, 12
    {lat: 46.655278, lng: 32.643699, info: "Официальный дилер Steko Окна Стеко", email: 'mprofil.kh@gmail.com'}, //г. Херсон ул.40 лет Октября , 102

    // Сумская
    {lat: 50.926385, lng: 34.785166, info: "Официальный дилер Steko ТСК \"Импульс+\"", email: 'sumy.impuls@gmail.com'}, //г. Сумы, ул. Металургов, 73
    {lat: 51.676270, lng: 33.912264, info: "Официальный дилер Steko Гордиенко А.А.", email: 'oknagluhov@gmail.com'}, //г. Глухов, пл. Свободы (Ленина) , 1
    {lat: 50.303610, lng: 34.895273, info: "Официальный дилер Steko ФЛП Железная В.В.", email: 'i-het@ukr.net'}, //г. Ахтырка , ул.Ярославского 17
    {lat: 51.247390, lng: 33.216923, info: "Официальный дилер Steko Грабко А.Г.", email: 'ecookno@ukr.net'}, //	г. Конотоп пл. Конотопских дивизий , 29
    {lat: 50.583792, lng: 34.490484, info: "Официальный дилер Steko Михайленко А.Н.", email: 'muxasik2009@i.ua'}, //г. Лебедин , пл Независимости , 7
    {lat: 51.683653, lng: 33.905536, info: "Официальный дилер Steko ФЛП Чернов О.В.", email: '4ernov@ukr.net'}, //г. Глухов , пер.Артема , 32
    {lat: 51.679278, lng: 33.909710, info: "Официальный дилер Steko ФЛП Чернов О.В.", email: '4ernov@ukr.net'}, //г. Глухов ул.Терещенко 57
    {lat: 50.902000, lng: 34.812547, info: "Официальный дилер Steko ФЛП Штепа А.М.", email: 'shtepa_sm@ukr.net'}, //г. Сумы , Харьковская , 22/1
    {lat: 50.747241, lng: 33.487235, info: "Официальный дилер Steko ЧП Матяш С. В.", email: 'oleksandrkarpenko@i.ua'}, //г.Ромны ул.Руденка 3
    {lat: 51.225786, lng: 33.196118, info: "Официальный дилер Steko ФОП Ларков И.С", email: 'viknaluxx@gmail.com'}, //г. Конотоп ул. Депутатская д.92

    // Хмельницкая
    {lat: 49.421390, lng: 26.999333, info: "Официальный дилер Steko ФЛП Шеремета Роман Александрович", email: 'ambasador1989@gmail.com'}, //г.Хмельницкий, ул.Шевченка 42

    // Черкасская
    {lat: 49.427918, lng: 32.080069, info: "Официальный дилер Steko Салон магазин \"А-ВІКНА\"", email: 'rufat@ukr.net'}, //г. Черкассы , Благовесная , 399
    {lat: 49.418179, lng: 32.068823, info: "Официальный дилер Steko Головченко И.В.", email: 'giv2965157@mail.ru'}, //г. Черкассы , ул.Черновола 112/3
    {lat: 49.246193, lng: 30.111708, info: "Официальный дилер Steko ФЛП Романюк Н. Д.", email: 'faresbud@ukr.net'}, //г. Жашков, ул. Деведенко, 71
    {lat: 49.416544, lng: 32.045556, info: "Официальный дилер Steko ФЛП Горощенко Сергей Александрович", email: 'tkachenko.info@gmail.com'}, //г. Черкассы , ул. Громова 138
    {lat: 49.437626, lng: 32.070588, info: "Официальный дилер Steko ФЛП Шевелев Дмитрий Викторович", email: 'shevelyov.dmitro@gmail.com'}, // г. Черкассы бульвар Шевченка 274/1
    {lat: 48.730437, lng: 30.216483, info: "Официальный дилер Steko Фоп Кравченко Андрій Миколайович", email: 'steko-ok@ukr.net'}, // г. Черкассы бульвар Шевченка 274/1
    {lat: 49.4336338, lng: 32.0725643, info: "Официальный дилер Steko ФЛП ФЛП Климчук О.Н.", email: 'klim.482@meta.ua'}, //ул. Пастеровская, 21, Черкассы, Черкасская область, 18000

    // Черниговская
    {lat: 50.596346, lng: 32.377313, info: "Официальный дилер Steko ФЛП Костюк В.А.", email: 'kokoc@tim.ua'}, //г. Прилуки, ул. Киевская, 263
    {lat: 51.489207, lng: 31.284935, info: "Официальный дилер Steko ОкнаБуд", email: 'oknabud1@gmail.com'}, //г.Чернигов, Пр.Победы,62
    {lat: 51.494019, lng: 31.295562, info: "Официальный дилер Steko ФОП Ерошов В.В", email: 'aeplast@gmail.com'}, //г. Чернигов, Пр.Победы, 87 оф.212
    {lat: 51.491630, lng: 31.293316, info: "Официальный дилер Steko ФЛП Джум М.В.", email: 'maxim-25@ukr.net'}, //г. Чернигов, ул. Кирпоноса 26
    {lat: 51.812086, lng: 31.949769, info: "Официальный дилер Steko ФОП Цыганок С. А.", email: 'viknaschors@ukr.net'}, //г. Сновск ул. Железнодорожная 37
    {lat: 50.583590, lng: 32.385148, info: "Официальный дилер Steko ФОП Минченко И.Н.", email: 'spriluk@i.ua'}, // г. Прилуки, ул. Вокзальная 59
    {lat: 50.587272, lng: 32.379689, info: "Официальный дилер Steko ТОВ \"ІБК\"", email: 'almaz.dekor@gmail.com'}, // г. Прилуки, ул. Ю.Коптєва 72
    {lat: 51.514824, lng: 31.307688, info: "Официальный дилер Steko Гипермаркет ВЕНА", email: 'vena-zakaz@mailcn.com.ua'}, // г. Чернигов, ул. 77-й Гвардейской Дивизии, 1

    // Черновецкая
    {lat: 48.298558, lng: 25.934883, info: "Официальный дилер Steko ФОП Жовнирчук Юрий Иванович", email: 'stekocv@gmail.com'}, //г. Черновцы, Гагарина , 13/15

    // Винницкая
    {lat: 49.238931, lng: 28.502458, info: "Официальный дилер Steko Стук Б.В.", email: 'stukboris@gmail.com'}, //г. Винница, ул.Коцюбинского, 11
    {lat: 48.3857937, lng: 28.8666411, info: "Официальный дилер Steko Новицький Олег Степанович", email: 'olegnovitskyy@gmail.com'}, // Крижопіль, вул. Долейка 15,
    {lat: 48.239331, lng: 28.272373, info: "Официальный дилер Steko Новицький Олег Степанович", email: 'olegnovitskyy@gmail.com'}, // обл. Ямпільський р-н м.Ямпіль вул.Урицького 19б
    {lat: 48.382157, lng: 28.869907, info: "Официальный дилер Steko Лошковський Валентин Анатолійович", email: 'valentin2410@meta.ua'}, // Крижопільський р-н.м.Крижопіль вул.Войцеха Дажицького 15а

    // Хмельницкая
    {lat: 49.754657, lng: 27.211541, info: "Официальный дилер Steko ТОВ \"Горда Буд\"", email: 'gordabud@ukr.net'}, //м. Старокостянтинів вул. Острозького 43 блок 2
    {lat: 49.761671, lng: 27.220100, info: "Официальный дилер Steko ТОВ \"Горда Буд\"", email: 'gordabud@ukr.net'}, //м. Старокостянтинів вул. Ізяславська 2
    {lat: 48.677430, lng: 26.591714, info: "Официальный дилер Steko ФОП Токар В.Й.", email: 'tokar-60@ukr.net'}, // Кам'янець-Подільський вул. Князів Кориатовичів 14

    // Тернопіль
    {lat: 49.546003, lng: 25.592905, info: "Официальный дилер Steko ПП Мужилівський  Назар Іванович", email: 'alanda07@bigmir.net'}, //м.Тернопіль вул.Шептицького  23а
    {lat: 49.549178, lng:  25.611091, info: "Официальный дилер Steko ПП Мацала С.В,  ", email: 'vik-dver@ukr.net'}, //м.Тернопіль вул.Малишка 1
];