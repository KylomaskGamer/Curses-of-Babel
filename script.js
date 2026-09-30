const list = [];

let x = [];
let y = [];

async function loadLists() {
    x = (await fetch("https://raw.githubusercontent.com/KylomaskGamer/Curses-of-Babel/refs/heads/main/x.txt").then(response => response.text()))
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    y = (await fetch("https://raw.githubusercontent.com/KylomaskGamer/Curses-of-Babel/refs/heads/main/y.txt").then(response => response.text()))
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");
}

function loadcurses() {
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
			if (x[i].includes("{x}")){
				list.push(
					`${i + 1}ν${j + 1} ${x[i].replaceAll("{x}", y[j])}`
				);
			} else {
								list.push(
					`${i + 1}ν${j + 1} ${x[i]} ${y[j]}`
				);
			}
        }
    }
}

function displaycurses() {
    const curselist = document.getElementById("curselist");

    for (const curse of list) {
        const curseElement = document.createElement("a");
        curseElement.textContent = curse;

        curselist.appendChild(curseElement);
        curselist.appendChild(document.createElement("br"));
    }
}

async function main() {
    await loadLists();
    loadcurses();
    displaycurses();
}

main();
