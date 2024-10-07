let temp;
let latit;
let longtit;

async function fetchLoc(lat, long)   {
    let data;
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)

        .then(res => {
            if (!res.ok) {
                throw new Error('Failed');
            }
            else
                return res.json();
        })

        .then(json => {data = json})

        .catch(err => console.log(err));

        temp = data.current_weather.temperature;
        latit = data.latitude;
        longtit = data.longitude;
}



async function showWeather(lat, long, name)    {


    await fetchLoc(lat, long);


    const box = document.createElement("div");

    const header = document.createElement("h2");
    header.textContent = name;
    box.appendChild(header);

    const latP = document.createElement("p");
    latP.textContent = "Latitude: " + latit;
    box.appendChild(latP);

    const longP = document.createElement("p");
    longP.textContent = "Longtitude: " + longtit;
    box.appendChild(longP);

    const tempP = document.createElement("p");
    tempP.textContent = "Temperature : " + temp + "°C";
    box.appendChild(tempP);


    document.getElementById("weather").appendChild(box);

}




async function main()   {


    await showWeather(60.805155, 10.677210, "My house (GJOVIK)");

    await showWeather(59.911491, 10.757933, "OSLO");

    await showWeather(35.652832, 139.839478, "TOKYO");

    await showWeather(40.730610, -73.935242, "NEW YORK CITY");

    await showWeather(52.377956, 4.897070, "AMSTERDAM");

}

main();
setInterval(main, 999000); //999 seconds?