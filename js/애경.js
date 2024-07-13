$(document).ready(function () {

    const swiper1 = new Swiper('.mySwiper', {

        effect: 'fade',
        clickable: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        speed: 1500,
    });
    // swiper end

    const swiper2 = new Swiper('.second', {

        slidesPerView: 2.5,
        spaceBetween: 20,
        clickable: true,
        speed: 1500,
        autoplay: {
            delay: 4000
        },
        breakpoints: {
            200: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2.5
            }
        }
    });

    // swiper end

    const swiper3 = new Swiper('.third', {

        effect: 'fade',
        fadeEffect: { crossFade: true },
        clickable: true,
        speed: 500,
        autoplay: true,

        navigation: {
            nextEl: ".third .swiper-button-next",
            prevEl: ".third .swiper-button-prev",
        },

        breakpoints: {
            1024: {
                autoplay: false
            }
        },

    });

    swiper3.on('resize', function (swiper) {
        if (swiper.currentBreakpoint === '1024') {
            swiper.autoplay.stop()
        } else {
            swiper.autoplay.start()
        }
    })



    // swiper end


    $('.gnb, .header_hover_back').mouseenter(function () {
        $('header').addClass('active');
        $('.gnb').addClass('active');
    });
    $('.gnb, .header_hover_back').mouseleave(function () {
        $('.gnb').removeClass('active');

        if ($(window).scrollTop() < 201 && !$('.header_search_back').hasClass('active')) {
            $('header').removeClass('active');
        }
    });

    $('.search').click(function () {
        if ($('.header_search_back').hasClass('active')) {
            $('.header_search_back').removeClass('active')
            if ($(window).scrollTop() < 201) {
                $('header').removeClass('active')
            }
        } else {
            $('.header_search_back').addClass('active')
            $('header').addClass('active')
        }
    });

    $('.header_search_back_wrap a').click(function () {
        $('.header_search_back').removeClass('active')
    });

    $('.ko').click(function () {
        if ($('.language').hasClass('active')) {
            $('.language').removeClass('active')
        } else {
            $('.language').addClass('active')
        }
    })

    $('.family_site_show').click(function () {
        if ($('.family_site').hasClass('active')) {
            $('.family_site').removeClass('active')
        } else {
            $('.family_site').addClass('active')
        }
    })

    $('.sec01_click_tab>li').click(function () {
        const key = $(this).attr('data-key');
        let target;

        $('.sec01_click_tab>li').removeClass('active');
        $(this).addClass('active');

        $('.box-item').each(function (i, item) {
            if ($(item).attr('data-key') === key) {
                target = item;
            }
        })

        $('.box-item').removeClass('active')
        $(target).addClass('active')

    })


    $(window).scroll(function () {

        if ($(this).scrollTop() > 800) {
            $('.scroll_btn').fadeIn();
        } else {
            $('.scroll_btn').fadeOut();
        }

        if ($(this).scrollTop() > 200) {
            $('header').addClass('active')
        } else if (!$('.header_search_back').hasClass('active')) {
            $('header').removeClass('active')
        }
    });

    $('.scroll_btn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false;
    });


    // let prevSt = 0;

    // // $(window).scroll(function () {

    // //     let nowSt = $(window).scrollTop();
    // //     if (nowSt > prevSt) {
    // //         $('header').addClass('active2');
    // //     } else {
    // //         $('header').removeClass('active2');
    // //     }

    // //     prevSt = nowSt;

    // // }); active2에 트랜스폼 Y축 -100%넣고 했음




    // $(window).resize(function () {
    //     if (window.innerWidth < 1280) {
    //         $('header').mouseenter(function () {
    //             $(this).removeClass('active')
    //             $(this).addClass('active2')
    //             $('header').mouseleave(function () {
    //                 $(this).removeClass('active2');
    //             });
    //         })
    //     } else {
    //         $('header').mouseenter(function () {
    //             $(this).addClass('active')
    //             $(this).removeClass('active2')
    //         })
    //     }
    // }).resize();



    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active-1');
    });



    $('.menu-trigger').click(function () {
        if ($('.note_tab').hasClass('trigger')) {
            $('.note_tab').removeClass('trigger')
        } else {
            $('.note_tab').addClass('trigger')
        }
    });

}); //end 