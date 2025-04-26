const grid = document.querySelector("#grid");

let size;
size = 16;

for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);

    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        row.appendChild(div);
    }
}