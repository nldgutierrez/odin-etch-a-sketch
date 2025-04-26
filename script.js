const grid = document.querySelector("#grid");
const input = document.querySelector(".user-input")

let size;

const applySize = document.querySelector("#apply-size");
const gridSize = document.querySelector("#grid-size");

const para = document.querySelector("#size-value");
para.textContent = `Size: 16 x 16`;

gridSize.addEventListener("input", () => {
    para.textContent = `Size: ${gridSize.value} x ${gridSize.value}`;
})

applySize.addEventListener("click", createGrid);

function createGrid() {
    grid.innerHTML = '';

    size = gridSize.value;

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
    
        for (let i = 0; i < size; i++) {
            const div = document.createElement("div");
            div.setAttribute("class", "square");
            row.appendChild(div);

            let r = Math.floor(Math.random()*250);
            let g = Math.floor(Math.random()*250);
            let b = Math.floor(Math.random()*250);
            let randomColor = `rgb(${r}, ${g}, ${b})`;
    
            let o = 0;

            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = randomColor;
                div.style.opacity = `${o += 0.1}`;
            });

            const reset = document.querySelector("#reset");

            reset.addEventListener("click", resetGrid);
            function resetGrid() {
                div.style.backgroundColor = '';
                div.style.opacity = '1';
            }
        }
    }
}

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        row.appendChild(div);

        let r = Math.floor(Math.random()*250);
        let g = Math.floor(Math.random()*250);
        let b = Math.floor(Math.random()*250);
        let randomColor = `rgb(${r}, ${g}, ${b})`;

        let o = 0;

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = randomColor;
            div.style.opacity = `${o += 0.1}`;
        });

        const reset = document.querySelector("#reset");

        reset.addEventListener("click", resetGrid);
        function resetGrid() {
            div.style.backgroundColor = '';
            div.style.opacity = '1';
        }

    }
}