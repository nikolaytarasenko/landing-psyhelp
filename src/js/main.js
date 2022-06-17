const hidePreloader = () => {
    const preloaderWrapper = document.querySelector('.preloader-wrapper');

    preloaderWrapper.classList.add('hide');
}

window.addEventListener('load', hidePreloader);