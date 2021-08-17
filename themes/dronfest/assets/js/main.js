jQuery(function($) {
    'use strict';
    (function() {
        $(".home-body").backstretch(["/themes/dronfest/assets/images/slider/slider1.jpg", "/themes/dronfest/assets/images/slider/slider2.jpg", "/themes/dronfest/assets/images/slider/slider3.jpg"], {
            fade: 750,
            duration: 3000
        });
        $(".body-multiple").backstretch(["/themes/dronfest/assets/images/slider/slider7.jpg", "/themes/dronfest/assets/images/slider/slider8.jpg", "/themes/dronfest/assets/images/slider/slider9.jpg"], {
            fade: 750,
            duration: 3000
        });
        $(".body-band").backstretch(["/themes/dronfest/assets/images/slider/slider4.jpg", "/themes/dronfest/assets/images/slider/slider5.jpg"], {
            fade: 750,
            duration: 3000
        });
        $(".body-personal").backstretch(["/themes/dronfest/assets/images/slider/slider6.jpg", "/themes/dronfest/assets/images/slider/slider2.jpg"], {
            fade: 750,
            duration: 3000
        });
    }());
    (function() {
        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: '3dflip',
            gapVertical: 20,
            gapHorizontal: 20,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 992,
                cols: 4
            }, {
                width: 768,
                cols: 3
            }, {
                width: 475,
                cols: 2
            }, {
                width: 0,
                cols: 1
            }],
        });
    }());
    (function() {
        $(".clients-slider").owlCarousel({
            items: 4,
            nav: true,
            autoplay: true,
            dots: false,
            navText: false,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                480: {
                    items: 2,
                    slideBy: 1
                },
                768: {
                    items: 3,
                    slideBy: 1
                },
                991: {
                    items: 4,
                    slideBy: 1
                },
            }
        });
        $(".twitter-slider").owlCarousel({
            items: 1,
            nav: true,
            autoplay: true,
            dots: false,
            navText: false
        });
        $(".products-slider").owlCarousel({
            items: 1,
            nav: true,
            autoplay: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
        $(".slider").owlCarousel({
            items: 3,
            nav: true,
            autoplay: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                480: {
                    items: 1,
                    slideBy: 1
                },
                768: {
                    items: 2,
                    slideBy: 1
                },
                991: {
                    items: 2,
                    slideBy: 1
                },
                1200: {
                    items: 3,
                    slideBy: 1
                },
            }
        });
        $(".albums-slider").owlCarousel({
            items: 4,
            nav: true,
            autoplay: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                480: {
                    items: 2,
                    slideBy: 1
                },
                768: {
                    items: 3,
                    slideBy: 1
                },
                991: {
                    items: 4,
                    slideBy: 1
                },
            }
        });
    }());
    (function() {
        $('.jp-play.play-icon').on('click', function() {
            $(this).addClass('icon-hide');
        });
        $('button.jp-play').on('click', function() {
            $('.play-icon.play-icon').removeClass('icon-hide');
        });
    }());
    (function() {
        $('.video-link').magnificPopup({
            type: 'iframe'
        });
    }());
    (function() {
        $('.showcase-icons.popup a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }());
    $('.rating-bar').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function() {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).off('inview');
        }
    });
    (function() {
        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });
    }());
    (function() {
        var map;
        map = new GMaps({
            el: '#gmap',
            lat: 53.301178,
            lng: -1.463027,
            scrollwheel: false,
            zoom: 18,
            zoomControl: true,
            panControl: false,
            streetViewControl: true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = 'https://dronfest.test/themes/dronfest/assets/images/map-icon.png';
        map.addMarker({
            lat: 53.301178,
            lng: -1.463027,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
        });
        var styles = [{
            "featureType": "road",
            "stylers": [{
                "color": "#979797"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#aaaaaa"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#e2e2e2"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "color": "#b9b9b9"
            }]
        }, {
            "elementType": "labels.text",
            "stylers": [{
                "saturation": 1
            }, {
                "weight": 0.1
            }, {
                "color": "#101010"
            }]
        }];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }());
});