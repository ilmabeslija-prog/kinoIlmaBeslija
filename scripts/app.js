function generisiSjedista() {
    const redovi = ["A","B","C","D","E","F","G","H"];
    const sjedista = [];

    for (let red of redovi) {
        for (let i = 1; i <= 10; i++) {

            let status = "slobodno";

            if (Math.random() < 0.2) status = "zauzeto";
            else if (Math.random() < 0.3) status = "rezervisano";

            sjedista.push({
                red: red,
                broj: i,
                status: status
            });
        }
    }

    return sjedista;
}

const podaci = {
    projekcije: [
        {
            film: "Avatar 2",
            vrijeme: "18:00",
            sala: "1", 
            sjedista: generisiSjedista()
        },
        {
            film: "Fast X",
            vrijeme: "20:00",
            sala: "3", 
            sjedista: generisiSjedista()
        }
    ]
};