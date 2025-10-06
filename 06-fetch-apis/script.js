
let abutton = document.querySelector("#shake");
let text = document.querySelector("#result");
let lastjson;
let foxpicture = document.querySelector("#guh");
let running = false;

foxpicture.style.visibility = 'hidden';
abutton.addEventListener("click", e => dothefunction());

async function dothefunction() {
    if (running) {
        return;
    }
    running = true;
    abutton.disabled = true;
    abutton.textContent = "wait a bit";
    await eightball();
    abutton.disabled = false;
    running = false;
    abutton.textContent = "SHAKE ORB";
}



async function eightball() {
    if (Math.random() < 0.5) {
        await advice();
    } else {
        await picture();
    }
}

async function advice() {
    foxpicture.style.visibility = 'hidden';
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    if (lastjson == null) {
        lastjson = data;
    } else {
        while (lastjson.slip.id == data.slip.id) {
            response = await fetch("https://api.adviceslip.com/advice");
            data = await response.json();
        }
    }
    lastjson = data;
    console.log(data)
    text.textContent = data.slip.advice;
    resize();
    text.style.visibility = 'visible';
}

function resize() {
    let size = 48;
    text.style.fontSize = size + "px";
    while (text.scrollWidth > text.clientWidth || text.scrollHeight > text.clientHeight) {
        size -= 1;
        text.style.fontSize = size + "px";
    }
}

async function picture() {
    text.style.visibility = 'hidden';
    let fox = await fetch("https://randomfox.ca/floof/");
    let foxdata = await fox.json();
    foxpicture.src = foxdata.image;
    foxpicture.style.visibility = 'visible';
}

