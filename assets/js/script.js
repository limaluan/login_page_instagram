const cellphoneBg = document.getElementById("bg");

const imgs = ["url('./assets/img/instagram-celular.png')",
"url('./assets/img/instagram-celular-2.png')",
"url('./assets/img/instagram-celular-3.png')"
];

function imgSwitch(img) {
    cellphoneBg.style.backgroundImage = img;
    cellphoneBg.style.transition = "all 2s";
}

var imgCount = 0;
function cellphoneBgSwitch() {
    switch(imgCount){
        case 0:
            imgSwitch(imgs[1]);
            imgCount++;
            break;
        case 1:
            imgSwitch(imgs[2]);
            imgCount++;
            break;
        default:
            imgSwitch(imgs[0]);
            imgCount = 0;
    }
}

setInterval(cellphoneBgSwitch, 4000);
