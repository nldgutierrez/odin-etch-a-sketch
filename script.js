const grid = document.querySelector("#grid");
const input = document.querySelector(".user-input")

let size;

const button = document.createElement("button");
button.setAttribute("class", "button");
button.textContent = 'Set grid size';
input.appendChild(button);

button.addEventListener("click", createGrid);

function createGrid() {
    grid.innerHTML = '';

    while (true) {
        size = prompt('Enter grid size:');
        size = Number(size);
        if (size < 101 && size > 0) {
            break;
        } else {
            alert('Enter a number from 1-100');
            continue;
        }
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
    
        for (let i = 0; i < size; i++) {
            const div = document.createElement("div");
            row.appendChild(div);
    
            div.addEventListener("mouseenter", ()=> {
                div.setAttribute("class", "sketch");
            });
        }
    }
}

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        row.appendChild(div);

        div.addEventListener("mouseenter", ()=> {
            div.setAttribute("class", "sketch");
        });
    }
}