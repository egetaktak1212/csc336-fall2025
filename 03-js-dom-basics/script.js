class Card {
    constructor(text) {
        this.text = text;
        this.img = "../Assignment3/post it.png";
    }

    pickrandompin() {
        const pinpaths = [
            "../Assignment3/pins/red.png",
            "../Assignment3/pins/blue.png",
            "../Assignment3/pins/green.png",
            "../Assignment3/pins/pink.png",
            "../Assignment3/pins/yellow.png"
        ];
        
        return pinpaths[Math.floor(Math.random()*pinpaths.length)];
    }

    makeacard() {
        const card = document.createElement("div");
        card.className = "card center";

        const posttextbox = document.createElement("div");
        posttextbox.className = "posttextbox";

        const posttext = document.createElement("div");
        posttext.className = "posttext";

        const text = document.createElement("p");
        text.textContent = this.text;

        const pin = document.createElement("div");
        pin.className = "pin";

        const pinImage = document.createElement("img");
        pinImage.src = this.pickrandompin();
        pinImage.setAttribute("width", "20%");
        pinImage.setAttribute("height", "20%");

        const picture = document.createElement("div");
        picture.className = "picture";

        const postit = document.createElement("img");
        postit.src = this.img;
        postit.style.width = "100%";
        postit.style.height = "100%";

        
        card.appendChild(posttextbox);
        posttextbox.appendChild(posttext);
        posttext.appendChild(text);
        card.appendChild(pin);
        pin.appendChild(pinImage);
        card.appendChild(picture);
        picture.appendChild(postit);

        return card;
    }
}

function addtotable(addition, table) {
    let currentrow = null;
    let currentcell = null;
    let numberofrows = table.rows.length;
    let maximumcellsperrow = 5;
    let maximumrows = 3;

    if (numberofrows === 0) {
        currentrow = table.insertRow();
    } else {
        currentrow = table.rows[numberofrows - 1];
    }

    let numberofcellsinlastrow = currentrow.cells.length;

    if (numberofcellsinlastrow < maximumcellsperrow) {
        currentcell = currentrow.insertCell();
    } else {
        if (numberofrows < maximumrows) {
            currentrow = table.insertRow();
            currentcell = currentrow.insertCell();
        } else {
            return null;
        }
    }
    currentcell.appendChild(addition);
}

const cardAdder = document.querySelector("#cardadder");
const maintable = document.querySelector("#maintable");
const noteinput = document.querySelector("#noteinput");
const fontdown = document.querySelector("#fontdown");
const fontup = document.querySelector("#fontup");
let fontIndex = 5;
const fontSizes = ["1px", "2px", "4px", "8px", "15px", "20px", "25px", "30px", "35px", "40px", "50px"]

cardAdder.addEventListener("click", () => {
    const newcard = new Card(noteinput.value);
    addtotable(newcard.makeacard(), maintable);
    noteinput.value = "";
    updatefonts();
});

fontdown.addEventListener("click", () => {
    fontindexchanger(false)
});

fontup.addEventListener("click", () => {
    fontindexchanger(true)
});


function fontindexchanger(up) {
    if (up && fontIndex < fontSizes.length-1) {
        fontIndex++;
    } else if (!up && fontIndex > 0) {
        fontIndex--;
    }
    updatefonts();
}

function updatefonts() {
    const posttexts = document.querySelectorAll(".posttext");
    for (let i = 0; i < posttexts.length; i++) {
        posttexts[i].style.fontSize = fontSizes[fontIndex];
    }
}


