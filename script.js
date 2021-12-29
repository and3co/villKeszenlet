function makeCalend() {
    let cal = document.getElementById("calendar");
    let actDate = new Date();

    for (let index = 0; index < 12; index++) {
        actDate.setFullYear(2021, index + 1, 0)

        const lastDay = actDate.getDate();
        const actMonth = actDate.toLocaleDateString("hu-HU", { "month": "long" }).toLocaleUpperCase("hu-HU");
        const daysNum = [1, 2, 3, 4, 5, 6, 0];
        const daysStr = ["H", "K", "Sze", "Cs", "P", "Szo", "V"];

        actDiv = cal.appendChild(document.createElement("div"));
        actDiv.innerHTML = "<p>" + actMonth + "</p>";
        actTable = actDiv.appendChild(document.createElement("table"));


        let day = 1;
        actRow = actTable.appendChild(document.createElement("tr"));

        for (let index = 0; index < daysNum.length; index++) {
            let actTH = actRow.appendChild(document.createElement("th"));
            actTH.innerHTML = daysStr[index];
        }

        do {
            actRow = actTable.appendChild(document.createElement("tr"));
            for (let index = 0; index < daysNum.length; index++) {
                actDate.setDate(day);
                let actTD = actRow.appendChild(document.createElement("td"));
                if (actDate.getDay() == daysNum[index]) {
                    actTD.innerHTML = day.toString();
                    day++;
                }
            };
        } while (day < lastDay)
    }
}