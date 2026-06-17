function createToaster(config) {
    return function(str) {
        let div = document.createElement("div");

        div.textContent = str;

        div.className =
            "bg-gray-800 text-white px-3 py-2 rounded-lg";

        document.querySelector(".parent").appendChild(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: 3,
    duration: 3
});

toaster("Downloaded successfully");

setTimeout(() => {
    toaster("Downloaded accepted successfully");
}, 1000);