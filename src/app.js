console.log('Hallo daar!');

import axios from 'axios';

const list = document.getElementById( "list-of-countries" );

async function fetchData() {
    const URI = 'https://restcountries.com/v2/all';

    try {
        const result = await axios.get(URI);
        console.log(result.data);

        result.data.sort ((a,b) => (a.population - b.population));

        list.replaceChildren();

        result.data.map( (country) => {
            const itemName = document.createElement( "li" );
            itemName.setAttribute('class', 'countries');
            itemName.textContent = country.name;

            const itemImg = document.createElement("img");
            itemImg.setAttribute('class', 'country-flag');
            itemImg.setAttribute('src', country.flag);

            const itemPop = document.createElement("li");
            itemPop.setAttribute('class', 'country-pop');
            itemPop.textContent = `Has a population of ${country.population} people`;

            const itemRegion = document.createElement("p");
            itemRegion.setAttribute('class', 'country-region');
            itemRegion.textContent = '';

            switch (country.region) {
                case "Africa":
                    itemName.setAttribute('id', 'africa');
                    break;
                case "Americas":
                    itemName.setAttribute('id', 'americas');
                    break;
                case "Europe":
                    itemName.setAttribute('id', 'europe');
                    break;
                case "Asia":
                    itemName.setAttribute('id', 'asia');
                    break;
                case "Oceania":
                    itemName.setAttribute('id', 'oceania');
                    break;
                default:
                    itemName.setAttribute('id', 'unknown')
            }

            list.appendChild(itemName);
            list.appendChild(itemImg);
            list.appendChild(itemPop);
            list.appendChild(itemRegion);
        } );

    } catch(err) {
        console.error(err);
    }
}

fetchData();