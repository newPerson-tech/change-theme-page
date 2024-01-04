document.addEventListener("DOMContentLoaded", documentOnReady);

//  common function that start when html is ready
function documentOnReady() {
    //vars
    const outerVar = 10;
    createTable(10);
    createSmiles();
    changeTheme();
    createSampler();
    // practiceWithClasses();
    //
}

// helper functions

function getEl(id) {
    const symbol = id[0];
    if (symbol === "#") {
        return document.getElementById(id.slice(1));
    } else if (symbol === ".") {
        return document.getElementsByClassName(id.slice(1));
    } else {
        return document.getElementsByTagName(id);
    }
}

function createEl(tag) {
    return document.createElement(tag);
}

// end helper functions

function createTable(count = 10) {
    const tabelEl = getEl("#table");
    const tableCount = count;
    for (let i = 0; i < tableCount; i++) {
        const rowEl = createEl("tr");
        for (let j = 0; j < tableCount; j++) {
            const tdEl = createEl("td");
            tdEl.innerHTML = j + 1 + i * 10;
            rowEl.appendChild(tdEl);
        }
        tabelEl.appendChild(rowEl);
    }
}

function createSmiles() {
    const smileWrapEl = getEl("#smileWrapEl");
    const arrSmiles = [
        "📐",
        "🌤️",
        "🇲🇽",
        "1️⃣",
        "🈹",
        "🌜",
        "👨‍💻",
        "🇲🇦",
        "🌱",
        "🍛",
        "🇻🇬",
        "🍯",
    ];
    arrSmiles.forEach((i) => {
        const newEl = document.createElement("div");
        newEl.textContent = i;
        newEl.classList.add("smile-card");
        smileWrapEl.appendChild(newEl);
    });
}

function changeTheme() {
    // get html elements
    const black = "#151515";
    const white = "#aaaaaa";

    const checkThemeEl = getEl("#checkTheme");
    checkThemeEl.addEventListener("change", function () {
        const styleObj = document.documentElement.style;
        if (checkThemeEl.checked) {
            styleObj.setProperty("--primary-color", white);
            styleObj.setProperty("--contrast-color", black);
        } else {
            styleObj.setProperty("--primary-color", black);
            styleObj.setProperty("--contrast-color", white);
        }
    });
}

function createSampler() {
    function getAudioPath(nameAudio, pathToAudio = "./assets/samples/") {
        return pathToAudio + nameAudio;
    }
    const pathSampler = "./assets/samples/sampler/";
    const keyBtnNames = [
        {
            key: "q",
            pathToAudio: getAudioPath("drum-beat.wav"),
        },
        { key: "w", pathToAudio: getAudioPath("js.m4a") },
        { key: "e", pathToAudio: getAudioPath("let_const.m4a") },
        { key: "a", pathToAudio: getAudioPath("scratch-8.wav") },
        { key: "s", pathToAudio: getAudioPath("sint-2.wav") },
        { key: "d", pathToAudio: getAudioPath("JavascriptNinja.m4a") },
        {
            key: "z",
            pathToAudio: getAudioPath("672382__courtneyeck__dark-beats.mp3"),
        },
        {
            key: "x",
            pathToAudio: getAudioPath("641186__johnnie_holiday__bs-korg-jh.wav"),
        },
        {
            key: "c",
            pathToAudio: getAudioPath(
                "477426__thrashzilla404__dark-hip-hop-loop.wav"
            ),
        },
    ];
    const keyBtnSimpleNames = [
        { key: "q", pathToAudio: getAudioPath("balloon-bass-04.wav", pathSampler) },
        {
            key: "w",
            pathToAudio: getAudioPath("electro-flanged-snare.wav", pathSampler),
        },
        {
            key: "e",
            pathToAudio: getAudioPath(
                "electronic-closed-high-hat-1.wav",
                pathSampler
            ),
        },
        {
            key: "a",
            pathToAudio: getAudioPath("kick_soft-bright_1.wav", pathSampler),
        },
        {
            key: "s",
            pathToAudio: getAudioPath("kick-house-drum-2.wav", pathSampler),
        },
        { key: "d", pathToAudio: getAudioPath("JavascriptNinja.m4a") },
        {
            key: "z",
            pathToAudio: getAudioPath("672382__courtneyeck__dark-beats.mp3"),
        },
        {
            key: "x",
            pathToAudio: getAudioPath("641186__johnnie_holiday__bs-korg-jh.wav"),
        },
        {
            key: "c",
            pathToAudio: getAudioPath(
                "477426__thrashzilla404__dark-hip-hop-loop.wav"
            ),
        },
    ];
    const samlerWrapEl = getEl("#sampel-ref");
    const selectTypeDrum = getEl("#selectBeatMachine");
    const TYPES_DRUM = {
        switcher: "switcher",
        downUp: "downUp",
    };
    if (selectTypeDrum && samlerWrapEl) {
        let selectedTypeDrum = selectTypeDrum.value;
        let keyBtnEls = {};
        const keyName = "Key";
        onListenKeyUp();
        // listhen drop select menu for drum machine type
        selectTypeDrum.addEventListener("change", function (e) {
            selectedTypeDrum = selectTypeDrum.value;
            onListenKeyUp();
        });

        function onChangeAudioFiles(keyBtnNames) {
            keyBtnNames.forEach((item, index) => {
                const audio = new Audio(item.pathToAudio);
                const newKeyName = keyName + item.key.toUpperCase();
                if (keyBtnEls[newKeyName]) {
                    keyBtnEls[newKeyName].audio = audio;
                } else {
                    const btnEl = createEl("button");
                    btnEl.innerHTML = item.key;
                    btnEl.classList.add("sample-btn");
                    keyBtnEls[newKeyName] = {
                        audio,
                        btnEl,
                        isPlay: false,
                    };
                    samlerWrapEl.appendChild(btnEl);
                }
            });
        }

        function onKeyPress(event) {
            const pressedBtn = keyBtnEls[event.code];
            if (pressedBtn) {
                if (pressedBtn.isPlay === false) {
                    pressedBtn.audio.play();
                    pressedBtn.btnEl.classList.add("active");
                    pressedBtn.isPlay = true;
                } else {
                    pressedBtn.audio.pause();
                    pressedBtn.audio.currentTime = 0;
                    pressedBtn.btnEl.classList.remove("active");
                    pressedBtn.isPlay = false;
                }
            }
        }

        function onKeyDown(event) {
            const pressedBtn = keyBtnEls[event.code];
            if (pressedBtn) {
                pressedBtn.audio.play();
                pressedBtn.btnEl.classList.add("active");
            }
        }
        function onKeyUp(event) {
            const pressedBtn = keyBtnEls[event.code];
            if (pressedBtn) {
                pressedBtn.audio.pause();
                pressedBtn.audio.currentTime = 0;
                pressedBtn.btnEl.classList.remove("active");
            }
        }
        function onListenKeyUp() {
            if (selectedTypeDrum === TYPES_DRUM.switcher) {
                onChangeAudioFiles(keyBtnNames);
                document.addEventListener("keypress", onKeyPress);
                document.removeEventListener("keydown", onKeyDown);
                document.removeEventListener("keyup", onKeyUp);
            } else if (selectedTypeDrum === TYPES_DRUM.downUp) {
                onChangeAudioFiles(keyBtnSimpleNames);
                document.removeEventListener("keypress", onKeyPress);
                document.addEventListener("keydown", onKeyDown);
                document.addEventListener("keyup", onKeyUp);
            }
        }
    }
}

function practiceWithClasses() {
    // practice with class
    class Car {
        brand = "";
        constructor(brand) {
            this.brand = brand;
        }

        run() {
            console.log("run is ", this.brand);
        }
    }

    const fordCar = new Car("ford");
    const hondaCar = new Car("honda");
    fordCar.run();
    hondaCar.run();
    console.log("ford car", fordCar);
    console.log("honda car", hondaCar);
}