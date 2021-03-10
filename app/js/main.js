$(function() {

    $('.network__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1153,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.customers__slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: `<div class="slider-arrows prev-arrow"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 8.00291H3.925L8.4625 2.55291C8.67467 2.29764 8.77675 1.96854 8.74628 1.638C8.7158 1.30747 8.55527 1.00258 8.3 0.790408C8.04473 0.578235 7.71563 0.476157 7.3851 0.506632C7.05456 0.537107 6.74967 0.697637 6.5375 0.952908L0.2875 8.45291C0.245451 8.51256 0.207849 8.57523 0.175 8.64041C0.175 8.70291 0.175 8.74041 0.0875002 8.80291C0.0308421 8.94623 0.0011764 9.0988 0 9.25291C0.0011764 9.40702 0.0308421 9.55958 0.0875002 9.70291C0.0875002 9.76541 0.0874998 9.80291 0.175 9.86541C0.207849 9.93058 0.245451 9.99325 0.2875 10.0529L6.5375 17.5529C6.65503 17.694 6.8022 17.8075 6.96856 17.8853C7.13491 17.963 7.31636 18.0032 7.5 18.0029C7.79207 18.0035 8.07511 17.9018 8.3 17.7154C8.42657 17.6105 8.5312 17.4816 8.60789 17.3362C8.68458 17.1907 8.73183 17.0316 8.74692 16.8679C8.76202 16.7042 8.74466 16.5391 8.69586 16.3821C8.64705 16.2251 8.56775 16.0792 8.4625 15.9529L3.925 10.5029H18.75C19.0815 10.5029 19.3995 10.3712 19.6339 10.1368C19.8683 9.90237 20 9.58443 20 9.25291C20 8.92139 19.8683 8.60345 19.6339 8.36902C19.3995 8.1346 19.0815 8.00291 18.75 8.00291Z" fill="#F53838"/>
        </svg>
        </div>`,
        nextArrow: `<div class="slider-arrows next-arrow"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.25 10.5014L16.075 10.5014L11.5375 15.9514C11.3253 16.2066 11.2232 16.5357 11.2537 16.8663C11.2842 17.1968 11.4447 17.5017 11.7 17.7139C11.9553 17.926 12.2844 18.0281 12.6149 17.9976C12.9454 17.9672 13.2503 17.8066 13.4625 17.5514L19.7125 10.0514C19.7545 9.99171 19.7922 9.92904 19.825 9.86386C19.825 9.80136 19.825 9.76386 19.9125 9.70136C19.9692 9.55804 19.9988 9.40548 20 9.25136C19.9988 9.09725 19.9692 8.94469 19.9125 8.80136C19.9125 8.73886 19.9125 8.70136 19.825 8.63886C19.7922 8.57369 19.7545 8.51102 19.7125 8.45136L13.4625 0.951365C13.345 0.810262 13.1978 0.696786 13.0314 0.61901C12.8651 0.541233 12.6836 0.501066 12.5 0.501364C12.2079 0.500794 11.9249 0.602513 11.7 0.788865C11.5734 0.893801 11.4688 1.02268 11.3921 1.16811C11.3154 1.31355 11.2682 1.47268 11.2531 1.6364C11.238 1.80012 11.2553 1.96521 11.3041 2.12222C11.3529 2.27922 11.4322 2.42505 11.5375 2.55136L16.075 8.00137L1.25 8.00137C0.918479 8.00137 0.600535 8.13306 0.366115 8.36748C0.131694 8.6019 -7.94069e-07 8.91985 -7.65086e-07 9.25137C-7.36104e-07 9.58289 0.131694 9.90083 0.366115 10.1352C0.600535 10.3697 0.918479 10.5014 1.25 10.5014Z" fill="#F53838"/>
        </svg></div>`,
        responsive: [{
                breakpoint: 1153,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }

        ]
    });

    // Mobile menu
    $('.header__menu-btn').on('click', function() {
        $('.menu').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.menu__close').on('click', function() {
        $('.menu').removeClass('active');
        $('body').css('overflow', 'scroll');
    });
    $('.menu__item a').on('click', function() {
        $('.menu').removeClass('active');
        $('body').css('overflow', 'scroll');
    });



    // animation header
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $('.header').addClass('active');

        } else {
            $('.header').removeClass('active');
        }
    });

    // slow animation for links 
    let page = $('html, body');
    $('a[href*="#"]').click(function() {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - ($('.header').height() + 50)
        }, 500);
        return false;
    });



    // modal 

    $('.header__sign-icon').on('click', function() {
        $('.sign-in').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.sign__close').on('click', function() {
        $('.sign').removeClass('active');
        $('body').css('overflow', 'scroll');
    });

    $('.header__sign-in').on('click', function() {
        $('.sign-in').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.header__sign-up').on('click', function() {
        $('.sign-up').addClass('active');
        $('body').css('overflow', 'hidden');
    });

});