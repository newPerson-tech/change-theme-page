document.addEventListener('DOMContentLoaded', documentOnReady);

function documentOnReady() {
    const checkThemeEl = document.getElementById('check-theme');
    checkThemeEl.addEventListener('change', function () {
        const blackColor = "#151515";
        const whiteColor = "#aaaaaa";
        const styleObj = document.documentElement.style;
        if (checkThemeEl.checked) {
            styleObj.setProperty("--primary-color", whiteColor);
            styleObj.setProperty("--contrast-color", blackColor);
        } else {
            styleObj.setProperty("--primary-color", blackColor);
            styleObj.setProperty("--contrast-color", whiteColor);
        }
    })
}