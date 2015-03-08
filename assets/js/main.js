$(function() {
    var boy = $('.boy');
    var girl = $('.girl');
    var present = $('.present');
    delay(1000, function() {
        goLeft(boy, 20, function() {
            $(this).find('span').show();
            delay(3000, function() {
                talk(boy, "АЛИНКА??!!!", function() {
                    delay(3000, function() {
                        talk(boy, "Аля??!!!", function() {
                            delay(2000, function() {
                                notalk(boy);
                                goLeft(boy, 60, function() {
                                    $(boy).addClass('flip');
                                    delay(1000, function() {
                                        $(boy).removeClass('flip');
                                    });
                                });
                            });
                            delay(4000, function() {
                                talk(boy, "Хм... Где же она?", function() {
                                    delay(3000, function() {
                                        talk(boy, "АЛИНКА ТЫ ГДЕ??!!", function() {
                                            delay(3000, function() {
                                                notalk(boy);
                                                girlIn(function() {
                                                    talk(girl, "Привет :-)", function() {
                                                        notalk(boy);
                                                        delay(1000, function() {
                                                            notalk(girl);
                                                            goLeft(boy, 115, function() {
                                                                talk(boy, "О-ооо! Ну наконец-то)", function() {
                                                                    goRight(girl, 100, function() {
                                                                        delay(2000, function() {
                                                                            notalk(boy);
                                                                            talk(girl, "Ты чего так искал-то меня?", function() {
                                                                                delay(3000, function() {
                                                                                    notalk(girl);
                                                                                    talk(boy, "А потому, что я тебя <b>ЛЮБЛЮ</b>!", function() {
                                                                                        delay(3000, function() {
                                                                                            notalk(boy, function() {
                                                                                                goLeft(boy, 400);
                                                                                                goRight(girl, 400, function() {
                                                                                                    $('h1').show();
                                                                                                });
                                                                                            });
                                                                                        })
                                                                                    })
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    function girlIn(callback) {
        girl.animate({
            right: 20
        }, 500, function() {
            $(this).find('span').show();
            callback();
        });
    }

    function notalk(obj, done) {
        $(obj).find('.cloud').fadeOut(400, done);
    }

    function talk(obj, text, done) {
        $(obj).find('.cloud').html(text).fadeIn(400, done);
    }

    function goLeft(obj, px, callback) {
        $(obj).animate({
            left: px
        }, 400, callback);
    }

    function goRight(obj, px, callback) {
        $(obj).animate({
            right: px
        }, 400, callback);
    }

    function delay(time, fn) {
        setTimeout(fn, time);
    }
});