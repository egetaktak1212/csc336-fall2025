let investments = [
    {
        tag: "oogle",
        company: "Oogle",
        value: 1000,
        color: "#b0c4dbff"
    },
    {
        tag: "michael",
        company: "Michael Soft",
        value: 1000,
        color: "#515d66ff"
    }
];

const map = new Map();
map.set("oogle", "Oogle");
map.set("michael", "Michael Soft");
map.set("rugs", "Rugs and Tugs");
map.set("evil", "Evil Factory");

let compvalues = new Map();
compvalues.set("oogle", 0.05);
compvalues.set("michael", 0.2);
compvalues.set("rugs", 0.1);
compvalues.set("evil", 0.6);

function populateinvestments() {
    let investlist = document.querySelector("#investlist");

    investlist.innerHTML = "";

    for (let i = 0; i < investments.length; i++) {
        let investment = investments[i];
        investlist.innerHTML += `
            <div id="investcard" style="background-color:${investment.color};">
                <div class="investtext">Investment in ${investment.company}</div>
                <div class="value">Value: $${investment.value.toLocaleString()}</div>
                <button id="sell" onclick="sellbutton(${i})">Sell</button>
            </div>
        `;
    }
}

function sellbutton(i) {
    let value = investments[i].value;
    balance += value;
    investments.splice(i, 1);
    populateinvestments();
    updateBalance();
}

let balance = 10000;
const balanceobj = document.querySelector("#balance");

function updateBalance() {
    balanceobj.textContent = "BALANCE: $" + balance.toLocaleString();
}
updateBalance();


const form = document.querySelector("#form");
form.addEventListener("submit", makeinvestment);

function makeinvestment(e) {
    e.preventDefault();

    let _tag = document.querySelector("#company").value;
    let _company = map.get(_tag);
    let _value = document.querySelector("#money").value;
    let _color = document.querySelector("#color").value;

    let newinvestment = {
        tag: _tag,
        company: _company,
        value: parseFloat(_value),
        color: _color
    }
    
    if (_value == "" || parseFloat(_value) <= 0) {
        alert("Please enter an actual number. Vandal.");
        document.querySelector("#form").reset();
        return;
    }

    if (parseFloat(_value) > balance) {
        alert("Please enter an amount you can offer. Poor.");
        document.querySelector("#form").reset();
        return;
    }

    balance -= parseFloat(_value);
    updateBalance();
    
    document.querySelector("#form").reset();

    investments.push(newinvestment);
    populateinvestments();
}

setInterval(updateValues, 1000);

function updateValues() {
    for (let i = 0; i < investments.length; i++) {
        getnewvalue(investments[i]);
    }
    populateinvestments();

}

function getnewvalue(investment) {
    investment.value += investment.value * ((Math.random() * 2 - 1) * compvalues.get(investment.tag));
    investment.value = parseFloat(investment.value.toFixed(2));
}


populateinvestments();