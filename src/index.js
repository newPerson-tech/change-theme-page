document.addEventListener('DOMContentLoaded', documentOnReady);

function documentOnReady() {
    const checkThemeEl = document.getElementById('checkTheme');
    const smileWrapEl = document.getElementById('smileWrapEl');
    checkThemeEl.addEventListener('change', function () {
        const blackColor = "#151515";
        const whiteColor = "#aaaaaa";

        const arrSmiles = ['🎓', '👠', '👑', '💍', '💼', '🌏', '🧘‍♀️', '🥑 ', ' 🎯', '🚗 ', '🏖 ', ' 🏡'];

        for (let i = 0; i <= arr.length; i++) {
            console.log('element from simple for: ', arr[i], i);
        }

        arr.forEach(function (i, index) {
            console.log('element from forEach', i, index);
        });

        checkThemeEl.addEventListener('change', function () {
            const styleObj = document.documentElement.style;
            if (checkThemeEl.checked) {
                styleObj.setProperty("--primary-color", whiteColor);
                styleObj.setProperty("--contrast-color", blackColor);
            } else {
                styleObj.setProperty("--primary-color", blackColor);
                styleObj.setProperty("--contrast-color", whiteColor);
            }
        });

        arrSmiles.forEach((i) => {
            const newEl = document.createElement('div');
            newEl.textContent = i;
            newEl.classList.add('smile-card');
            smileWrapEl.appendChild(newEl);
        });

    })
}