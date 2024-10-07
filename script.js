let gData;
let gCounter;

async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/posts')

        .then(res => {
            if (!res.ok) {
                throw new Error('Failed');
            }
            else
                return res.json();
        })

        .then(json => {gData = json})

        .catch(err => console.log(err));

}

function makeBox(title, body)    {
    const box = document.createElement("div");


    const header = document.createElement("h2");
    header.textContent = title;
    box.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = body;
    box.appendChild(paragraph);

    document.getElementById("dynamic").appendChild(box);

}


const bottomIsVisible = () => // for recognizing scrolling down
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight - 100;




async function main()   {

    await fetchData();
    console.log(gData);
    let i;
    for (i = 0; i < 9; i++) {
        makeBox(gData[i].title, gData[i].body);
    }

    addEventListener("scroll", () => {
        if (bottomIsVisible()) {
            for (let stopp = i+3; i < stopp; i++)
                if (i < gData.length)
                makeBox(gData[i].title, gData[i].body);
        }
    })

}

main();
