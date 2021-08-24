export const showSlidesType = () => {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.splide', {
            type: 'loop',
            perPage: 4,
            autoplay: true,
            breakpoints: {
                '1024': {
                    perPage: 2,
                    autoplay: true,
                },
                '576': {
                    perPage: 1,
                    autoplay: true,
                }
            }
        }).mount();
    });
}