let trenutna = 0;

// VALIDACIJA
function validacija() {
    if (!podaci.projekcije || podaci.projekcije.length === 0) {
        return false;
    }

    for (let p of podaci.projekcije) {
        for (let s of p.sjedista) {
            if (!["slobodno","zauzeto","rezervisano"].includes(s.status)) {
                return false;
            }
        }
    }

    return true;
}

// GLAVNA FUNKCIJA
function prikaziSalu() {

    const container = document.getElementById("sala");

    // briše sadržaj
    container.innerHTML = "";

    // validacija
    if (!validacija()) {
        container.innerHTML = "Podaci nisu validni!";
        return;
    }

    const p = podaci.projekcije[trenutna];

    // NASLOV
    const naslov = document.createElement("h2");
    naslov.textContent = p.film;

    // VRIJEME
    const vrijeme = document.createElement("p");
    vrijeme.textContent = "Vrijeme: " + p.vrijeme;

    container.appendChild(naslov);
    container.appendChild(vrijeme);

    // ✅ DODANO: BROJ SALE
    const sala = document.createElement("p");
    sala.textContent = "Sala 3";
    container.appendChild(sala);

    // PLATNO
    const platno = document.createElement("div");
    platno.className = "screen";
    platno.textContent = "PLATNO";

    container.appendChild(platno);

    // SALA
    const hall = document.createElement("div");
    hall.className = "hall";

    const redovi = ["A","B","C","D","E","F","G","H"];

    for (let red of redovi) {

        const row = document.createElement("div");
        row.className = "row";

        // oznaka reda
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = red;

        row.appendChild(label);

        for (let i = 1; i <= 10; i++) {

            const seatData = p.sjedista.find(s => s.red === red && s.broj === i);

            const seat = document.createElement("div");

            if (seatData) {
                seat.className = "seat " + seatData.status;
            } else {
                seat.className = "seat slobodno";
            }

            // KLIK
            seat.onclick = function () {
                if (seatData && seatData.status === "slobodno") {
                    seatData.status = "rezervisano";
                    prikaziSalu();
                }
            };

            row.appendChild(seat);
        }

        hall.appendChild(row);
    }

    container.appendChild(hall);
}

// NAVIGACIJA
function prethodna() {
    if (trenutna > 0) {
        trenutna--;
        prikaziSalu();
    }
}

function sljedeca() {
    if (trenutna < podaci.projekcije.length - 1) {
        trenutna++;
        prikaziSalu();
    }
}

// POKRETANJE
prikaziSalu();