const podaci = {
    film: "Fast X",
    vrijeme: "20:00",
    sala: "Sala 3",

    sjedista: [
        ["free","free","taken","free","reserved","free","taken","free","free","reserved"],
        ["free","taken","free","reserved","free","free","taken","free","reserved","free"],
        ["free","free","reserved","taken","free","free","reserved","free","taken","free"],
        ["taken","free","free","reserved","free","taken","free","free","reserved","free"],
        ["free","reserved","free","taken","free","free","reserved","free","taken","free"],
        ["free","free","taken","free","reserved","free","free","taken","free","reserved"],
        ["reserved","free","free","taken","free","free","reserved","free","taken","free"],
        ["free","taken","free","free","reserved","free","taken","free","free","reserved"]
    ]
};

const salaDiv = document.getElementById("sala");

document.getElementById("film").textContent = podaci.film;
document.getElementById("vrijeme").textContent = "Vrijeme: " + podaci.vrijeme;
document.getElementById("salaNaziv").textContent = podaci.sala;

salaDiv.innerHTML = "";

let slova = ["A","B","C","D","E","F","G","H"];

for (let i = 0; i < podaci.sjedista.length; i++) {

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    let label = document.createElement("div");
    label.classList.add("label");
    label.textContent = slova[i];
    rowDiv.appendChild(label);

    for (let j = 0; j < podaci.sjedista[i].length; j++) {

        let seat = document.createElement("div");
        seat.classList.add("seat");
        seat.classList.add(podaci.sjedista[i][j]);

        rowDiv.appendChild(seat);
    }

    salaDiv.appendChild(rowDiv);
}