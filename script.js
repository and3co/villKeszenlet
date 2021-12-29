function makeCalend() {
    let cal = document.getElementById("calendar");
    let actDate = new Date();

    for (let index = 0; index < 12; index++) {
        actDate.setFullYear(2021, index + 1, 0)

        const lastDay = actDate.getDate();
        const actMonth = actDate.toLocaleDateString("hu-HU", { "month": "long" }).toLocaleUpperCase("hu-HU");
        //const days = [1, 2, 3, 4, 5, 6, 0];
        const days = { 1: "H", 2: "K", 3: "Sze", 4: "Cs", 5: "P", 6: "Szo", 0: "V" };

        actDiv = cal.appendChild(document.createElement("div"));
        actDiv.innerHTML = actMonth;
        actTable = actDiv.appendChild(document.createElement("table"));
        /*actHead = actTable.appendChild(document.createElement("th"));
        actHead.classList.add("tableHead");
        actHead.innerHTML = actMonth;*/

        let day = 1;
        actRow = actTable.appendChild(document.createElement("tr"));
        for (const key in days) {
            let actTH = actRow.appendChild(document.createElement("th"));
            actTH.innerHTML = days[key];
        }

        do {
            actRow = actTable.appendChild(document.createElement("tr"));
            for (var element in days) {
                actDate.setDate(day);
                let actTD = actRow.appendChild(document.createElement("td"));
                if (actDate.getDay() == element) {
                    actTD.innerHTML = day.toString();
                    day += 1;
                }
            };
        } while (day < lastDay)
    }
}
