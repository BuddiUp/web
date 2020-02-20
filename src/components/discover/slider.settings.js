const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1105,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 642,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default settings;
