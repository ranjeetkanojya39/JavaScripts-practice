let count = 0;
let second = 5;

let progress = document.querySelector("#progressBar");
let progressText = document.querySelector("#percent");


let iniv = setInterval(function () {

    if (count < 100) {

        count++;

        progress.style.width = `${count}%`;

        progressText.textContent = `${count}%`;

    } else {

        document.querySelector("h2").textContent =
            "Download Complete ✅";
        document.querySelector("h2").style.color = "green"


        clearInterval(iniv);
    }

}, (second * 1000) / 100);