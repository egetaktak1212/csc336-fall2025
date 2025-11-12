
let regions = null;

async function loadWorld() {
    const res = await fetch("/world");
    regions = await res.json();
    populateTowns(0);
}

const body = document.querySelector("body");


function populateTowns(regionindex) {
    let townlist = document.querySelector("#townlist"); //i have to change this if i want to be adding new regions

    townlist.innerHTML = "";

    for (let i = 0; i < regions.regions[regionindex].towns.length; i++) {
        let town = regions.regions[regionindex].towns[i];

        let towncard = document.createElement("div");
        towncard.id = "towncard";
        towncard.innerHTML += `
            <div id="townimage"><img
                    src=${town.img}
                    alt="" height="100%" width="100%"></div>
            <div id="townname">${town.name}</div>
            <div id="population">Population: ${town.population}</div>
            <button id="editpeople">View<br>People</button>
        `;

        let editpeoplebutton = towncard.querySelector("#editpeople");

        editpeoplebutton.addEventListener("click", () => editPeoplePressed(regionindex, i));
        townlist.appendChild(towncard);
    }
    addTownPlusButton(regionindex, townlist);
}

function addTownPlusButton(regionindex, townlist) {
    let towncard = document.createElement("div");
    towncard.id = "townbuttoncard";
    towncard.appendChild(makeAButton("+", () => townButtonPressed(regionindex), null, "townplusbutton"));
    townlist.appendChild(towncard);
}

function makeTownPopup(regionindex) {
    let popup = document.createElement("div");

    let form = document.createElement("form");
    form.id = "addingTownPopup";

    form.innerHTML = `
        <div id="addingTownTitle">Add a Town</div>

        <div class="townNameTitle">Name:</div>
        <input type="text" name="name" id="townNameInput">

        <div class="townNameTitle">Population:</div>
        <input type="number" name="population" id="townPopInput">

        <div class="townNameTitle">Image Link:</div>
        <input type="text" name="img" id="townImgInput">

        <button type="submit" id="townSubmit">SUBMIT</button>
    `;

    form.addEventListener("submit", (e) => newTownSubmit(regionindex, popup, form, e));

    popup.appendChild(form);

    return popup;
}

function townButtonPressed(regionindex) {
    let existing = document.querySelector("#addingTownPopup");
    if (existing != null) {
        existing.remove();
    }

    body.appendChild(makeTownPopup(regionindex));

}

function newTownSubmit(regionindex, popup, form, e) {
    e.preventDefault();

    let formData = new FormData(form);
    let dataobj = Object.fromEntries(formData.entries());



    let townName = dataobj.name.trim();
    if (townName == "") {
        townName = "No Name";
    }

    let townPop = dataobj.population;
    if (!townPop) {
        townPop = "0";
    }

    let townImg = dataobj.img.trim();
    if (townImg == "") {
        townImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAymzoBHhb6vSEe_C_GXArts5MZAlAvF1m4zi7I4zTVFyU51X_SCv8m1kUDBIz7P8WTU&usqp=CAU";
    }

    let town = {
        name: townName,
        population: townPop,
        notable_people: [],
        img: townImg
    };

    regions.regions[regionindex].towns.push(town);

    popup.remove();

    populateTowns(regionindex);
    updateJSON();

}//updates json



function makeAButton(name, func, classname, idname) {
    const button = document.createElement("button");
    button.textContent = name;

    if (classname != null) {
        button.className = classname;
    }

    if (idname != null) {
        button.id = idname;
    }

    if (func != null) {
        button.addEventListener("click", func);
    }

    return button
}

function makePeoplePopUp(regionindex, townindex) {
    //make the popup
    let popup = document.createElement("div");
    popup.id = "townpopup";

    popup.innerHTML += `
        <div id="notabletitle">
            Notable People
        </div>
    `

    let notablelist = document.createElement("div");
    notablelist.id = "notablelist";

    let town = regions.regions[regionindex].towns[townindex];

    //for every person int he json, add them as a button and make an event that leads to pressed notable person
    for (let i = 0; i < town.notable_people.length; i++) {
        let name = town.notable_people[i].name;
        let notablebutton = makeAButton(name, () => pressedNotablePerson(regionindex, townindex, i), "notablebutton");
        notablelist.appendChild(notablebutton);
    }

    //add the + button at the end of it
    let plusbutton = makeAButton("+", () => plusButtonPressed(regionindex, townindex, notablelist), "notablebutton");
    notablelist.appendChild(plusbutton);


    popup.appendChild(notablelist);



    let closebutton = makeAButton("CLOSE", () => closeNotablePeople(popup), null, "peoplesubmit");

    popup.appendChild(closebutton);

    return popup;
}

function editPeoplePressed(regionindex, townindex) {
    let existing = document.querySelector("#townpopup");
    if (existing != null) {
        existing.remove();
    }

    body.appendChild(makePeoplePopUp(regionindex, townindex));
}

//funcs i need:
//addANotablePerson(regionindex, townindex, notablelist) you pressed the plus button
//you have no idea how proud i am of this structure. single responsibility baby!
function notablePersonPopUp(regionindex, townindex, notablelist) {
    let popup = document.createElement("div");

    let form = document.createElement("form");
    form.id = "addingPersonPopup";


    form.innerHTML += `
        <div id="addingpersontitle">
            Name:
        </div>

        <input type="text" name="name" id="personnameinput">

        <button type="submit" id="personnamesubmit">SUBMIT</button>
    `

    form.addEventListener("submit", (e) => addANotablePerson(form, regionindex, townindex, notablelist, popup, e));

    popup.appendChild(form);

    return popup;
}

function plusButtonPressed(regionindex, townindex, notablelist) {
    let existing = document.querySelector("#addingPersonPopup");
    if (existing != null) {
        existing.remove();
    }

    body.appendChild(notablePersonPopUp(regionindex, townindex, notablelist));

}

function addANotablePerson(form, regionindex, townindex, notablelist, popup, e) {
    e.preventDefault();

    let formData = new FormData(form);
    let dataobj = Object.fromEntries(formData.entries());

    let thename = dataobj.name.trim();
    if (thename == "") {
        thename = "No Name";
    }

    let notablePerson = {
        name: thename,
        role: "idk dont worry abt it",
        item: "No Item"
    };

    regions.regions[regionindex].towns[townindex].notable_people.push(notablePerson);

    editPeoplePressed(regionindex, townindex);

    popup.remove();
    updateJSON();
}//updates json



//pressedNotablePerson(regionindex, townindex, i) when you click on a notable persons name



function ItemPopUp(regionindex, townindex, personindex) {
    let popup = document.createElement("div");


    let form = document.createElement("form");
    form.id = "itempopup";


    form.innerHTML += `
        <div id="itemstitle">
            Owns the Item:
        </div>

        <input type="text" name="name" id="iteminput">

        <button type="submit" id="itemsubmit">SUBMIT</button>

    `
    let itemNameInput = form.querySelector("#iteminput");

    itemNameInput.value = regions.regions[regionindex].towns[townindex].notable_people[personindex].item;

    form.addEventListener("submit", (e) => addAnItem(form, regionindex, townindex, personindex, popup, e));

    popup.appendChild(form);

    return popup;
}

function pressedNotablePerson(regionindex, townindex, personindex) {
    let existing = document.querySelector("#itempopup");
    if (existing != null) {
        existing.remove();
    }

    body.appendChild(ItemPopUp(regionindex, townindex, personindex));

}

function addAnItem(form, regionindex, townindex, personindex, popup, e) {
    e.preventDefault();

    let formData = new FormData(form);
    let dataobj = Object.fromEntries(formData.entries());

    let thename = dataobj.name.trim();
    if (thename == "") {
        thename = "No Item";
    }

    regions.regions[regionindex].towns[townindex].notable_people[personindex].item = thename;

    popup.remove();
    updateJSON();
}//updates json


//closeNotablePeople(regionindex, townindex, popup)
function closeNotablePeople(popup) {
    popup.remove();
}

async function updateJSON() { 
    const res = await fetch("/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regions)
    });
}

// const resetjsonbutton = document.querySelector("#resetjson");

// resetjsonbutton.addEventListener("click", () => resetJSON());

// async function resetJSON() {
//     console.log("A");
//     const res = await fetch("/test");
//     console.log("B");
//     const value = await res.json();
//     console.log("value");
// }





loadWorld();
