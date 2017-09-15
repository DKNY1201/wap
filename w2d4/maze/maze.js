'use strict';

$(function () {
    $('#start').on('click', function () {
        $('#status').text('Move your mouse to the End point');

        $('.boundary').on('mouseover', function () {
            $('.boundary').addClass('youlose');
            $('#status').text('You lose! :)');
        });

        $('#end').on('mouseover', function () {
            $('#status').text('You win. Congratulation! :)');
        });

        $('#start').on('click', function () {
            $('.boundary').removeClass('youlose');
            $('#status').text('Move your mouse to the End point');
        });

        $('#maze').on('mouseleave', function () {
            $('.boundary').addClass('youlose');
        });
    });
});