const grid = document.querySelector("#grid");

function column(size) {
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.style.cssText = `flex-basis: calc(100%/${size}); aspect-ratio: 1/1`
        grid.appendChild(div);
    }
}

function row(size) {
    for (let i = 0; i < size; i++) {
        column(size);
    }
}

row(16);

