$(function () {
    // // $('#container').children().css('color', '#990000');
    // let container = $('#container');
    //
    // // $('p.child', container).css('color', '#990000');
    // // container.find('p.child').css('color', '#336699');
    //
    // // $('#container p').first().css('color', '#990000');
    // $('p').eq(4).css('color', '#990000');
    //
    // console.log($('p').first().css('color'));
    // // console.log($("p").eq(4).css('color', function(idx, '#990000') {
    // //     return '#446688';
    // // }));
    //
    // console.log(parseInt($('p').first().css('top')));
    //
    // // $('p').first().css({
    // //     'margin-top': parseInt($('p').first().css('margin-top')) + 200 + 'px'
    // // })
    //
    // $('p').first().css('margin-top', function (idx, old) {
    //     return parseInt(old) + 150 + 'px';
    // })
    //
    //
    // $("p[aa='123']").css('color', '#900');


    // localStorage.setItem('name', 'aaa');
    // localStorage.setItem('age', 20);
    //
    // for (var key in localStorage){
    //     console.log(key);
    //     console.log(localStorage.getItem(key));
    // }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('Longitude: ' + position.coords.longitude + ' - ' + 'Latitude: ' + position.coords.latitude)
        }, function (error) {
            console.log(error.code + ' - ' + error.message);
        })
    }
});