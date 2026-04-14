import persons from "./persons.json" with { type: "json" };

// Toggle-Variablen
let ageAsc = true;
let nameAsc = true;
let originAsc = true;
let heightAsc = true;
let weightAsc = true;
let idAsc = true;
let birthAsc = true;

function renderPersons() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    for (const person of persons) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = person.id;
        tr.appendChild(tdId);

        const tdName = document.createElement("td");
        tdName.textContent = person.name;
        tr.appendChild(tdName);

        const tdAge = document.createElement("td");
        tdAge.textContent = person.alter;
        tr.appendChild(tdAge);

        const tdHeight = document.createElement("td");
        tdHeight.textContent = person.groesse;
        tr.appendChild(tdHeight);

        const tdBirthDate = document.createElement("td");
        tdBirthDate.textContent = person.geburtsdatum;
        tr.appendChild(tdBirthDate);

        const tdOrigin = document.createElement("td");
        tdOrigin.textContent = person.herkunft;
        tr.appendChild(tdOrigin);

        const tdWeight = document.createElement("td");
        tdWeight.textContent = person.gewicht;
        tr.appendChild(tdWeight);

        tbody.appendChild(tr);
    }
}

// ALTER
document.getElementById("thage").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (ageAsc) {
            return a.alter - b.alter;
        } else {
            return b.alter - a.alter;
        }
    });

    ageAsc = !ageAsc;
    renderPersons();
});

// NAME
document.getElementById("thname").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (nameAsc) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    nameAsc = !nameAsc;
    renderPersons();
});

// HERKUNFT
document.getElementById("thorigin").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (originAsc) {
            return a.herkunft.localeCompare(b.herkunft);
        } else {
            return b.herkunft.localeCompare(a.herkunft);
        }
    });

    originAsc = !originAsc;
    renderPersons();
});

// GRÖSSE
document.getElementById("thsize").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (heightAsc) {
            return a.groesse - b.groesse;
        } else {
            return b.groesse - a.groesse;
        }
    });

    heightAsc = !heightAsc;
    renderPersons();
});

// GEWICHT
document.getElementById("thweight").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (weightAsc) {
            return a.gewicht - b.gewicht;
        } else {
            return b.gewicht - a.gewicht;
        }
    });

    weightAsc = !weightAsc;
    renderPersons();
});

// ID
document.getElementById("thid").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (idAsc) {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    });

    idAsc = !idAsc;
    renderPersons();
});

// GEBURTSDATUM
document.getElementById("thbirth").addEventListener("click", () => {
    persons.sort((a, b) => {
        if (birthAsc) {
            return new Date(a.geburtsdatum) - new Date(b.geburtsdatum);
        } else {
            return new Date(b.geburtsdatum) - new Date(a.geburtsdatum);
        }
    });

    birthAsc = !birthAsc;
    renderPersons();
});

window.renderPersons = renderPersons;
renderPersons();