let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [37.653662, 55.757656],
        zoom: 11,
        controls: []
    });


    const coords = [
        [37.636124, 55.755558],
        [37.616993, 55.752335],
        [37.615718, 55.759596],
        [37.622336, 55.747611]
];

    const myCollection = new ymaps.GeoObjectCollection ({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "../img/marker.png",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord))
    });

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');

}
ymaps.ready(init);