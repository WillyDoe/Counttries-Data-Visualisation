import countries from '../data/countries_data.js';

//getting elements
const input = document.querySelector('input');
const nameButton = document.querySelector('.name');
const captitalButton = document.querySelector('.capital');
const populationReverse = document.querySelector('.population-reverse');




//adding all countries to the starting page

countries.forEach((country, i) => {

    //adding the countrydiv to dom:
    const countriesContainer = document.getElementsByClassName('countries-container');
    const countryD = document.createElement('div');
    countryD.classList.add('country');
    countriesContainer[0].appendChild(countryD);

    //adding the flag to the countryDiv;
    const countryFlag = document.createElement('div');
    countryFlag.classList.add('country-flag');
    countryD.appendChild(countryFlag);

    const countryImage = document.createElement('img');
    countryImage.classList.add('country-image');
    countryFlag.appendChild(countryImage)
    countryImage.src = country.flag;


    //adding name of the country:
    const countryName = document.createElement('p');
    countryName.classList.add('country-name');
    countryD.appendChild(countryName)
    countryName.textContent = country.name;

    //adding the information div:
    const countryInfo = document.createElement('div');
    countryInfo.classList.add('country-information');
    countryD.appendChild(countryInfo);

    //adding content to information div:

    const countryCapital = document.createElement('p');
    countryCapital.classList.add('country-capital');
    countryInfo.appendChild(countryCapital);
    countryCapital.textContent = `Capital: ${country.capital}`;

    const countryLanguages = document.createElement('p');
    countryLanguages.classList.add('country-languages');
    countryInfo.appendChild(countryLanguages);
    countryLanguages.textContent = `Languages: `;
    for (let i = 0; i < country.languages.length; i++) {

        if (i == country.languages.length - 1) {
            countryLanguages.textContent += country.languages[i];
        } else {
            countryLanguages.textContent += country.languages[i] + ', ';
        }
    }

    const countryPopulation = document.createElement('p');
    countryPopulation.classList.add('country-population');
    countryInfo.appendChild(countryPopulation);
    countryPopulation.textContent = `Population: ${country.population}`
});


input.addEventListener('input', e => {
    //adding eventlistener to search over input field:
    const userData = input.value.toLowerCase();
    const countries = document.querySelectorAll('.country');

    if (userData.length > 0) {
        countries.forEach(country => {
            const countryName = country.querySelector('.country-name').textContent.toLowerCase();
            const countryCapital = country.querySelector('.country-capital').textContent.toLowerCase();
            const countryLanguages = country.querySelector('.country-languages').textContent.toLowerCase();

            if (!countryName.includes(userData) && !countryCapital.includes(userData) && !countryLanguages.includes(userData)) {
                country.style.display = 'none';
            } else {
                country.style.display = 'flex';
            }
        });
    } else {
        countries.forEach(country => {
            country.style.display = 'flex';
        });
    }
});

input.addEventListener('input', e => {
    const userData = input.value;
    if (userData.length > 0) {

        if (populationButton.classList.contains('active')) {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const regEx = /[\d+]{1,}/;
            countrys.forEach((country) => {
                if (getComputedStyle(country).display === 'flex') {
                    const nameValue = country.querySelector('.country-name').textContent;
                    const populationValue = parseInt(country.querySelector('.country-population').textContent.match(regEx));
                    flexCountries.push([nameValue, populationValue])
                }
            });

            flexCountries.push(['World', worldPopulation]);
            const soretedFlexCountries = flexCountries.sort((a, b) => {
                return b[1] - a[1];
            });

            const topSorted = soretedFlexCountries.slice(0, 10);

            existingData.forEach(element => element.remove());

            topSorted.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / worldPopulation}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });

        } else if (languagesButton.classList.contains('active')) {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const languageObject = {};
            const regEx = /Languages: ([\w,\s]+)/;
            countrys.forEach(country => {
                if (getComputedStyle(country).display === 'flex') {

                    const languageValue = country.querySelector('.country-languages').textContent.match(regEx);
                    const langA = languageValue[1].split(', ');

                    langA.forEach(lang => flexCountries.push(lang))
                }
            });

            flexCountries.forEach(lang => {
                if (!languageObject[lang]) {
                    languageObject[lang] = 1;
                } else {
                    languageObject[lang] += 1;
                }
            });

            languageObject.Total = total;

            const sortedLanguages = Object.entries(languageObject).sort((a, b) => {
                return b[1] - a[1]
            });

            const topTen = sortedLanguages.slice(0, 10);


            existingData.forEach(element => element.remove());

            topTen.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / total}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });
        } else {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const regEx = /[\d+]{1,}/;
            countrys.forEach((country) => {
                if (getComputedStyle(country).display === 'flex') {
                    const nameValue = country.querySelector('.country-name').textContent;
                    const populationValue = parseInt(country.querySelector('.country-population').textContent.match(regEx));
                    flexCountries.push([nameValue, populationValue])
                }
            });

            flexCountries.push(['World', worldPopulation]);
            const soretedFlexCountries = flexCountries.sort((a, b) => {
                return b[1] - a[1];
            });

            const topSorted = soretedFlexCountries.slice(0, 10);

            existingData.forEach(element => element.remove());

            topSorted.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / worldPopulation}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });
        }


    } else {
        if (populationButton.classList.contains('active')) {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const regEx = /[\d+]{1,}/;
            countrys.forEach((country) => {
                if (getComputedStyle(country).display === 'flex') {
                    const nameValue = country.querySelector('.country-name').textContent;
                    const populationValue = parseInt(country.querySelector('.country-population').textContent.match(regEx));
                    flexCountries.push([nameValue, populationValue])
                }
            });

            flexCountries.push(['World', worldPopulation]);
            const soretedFlexCountries = flexCountries.sort((a, b) => {
                return b[1] - a[1];
            });

            const topSorted = soretedFlexCountries.slice(0, 10);

            existingData.forEach(element => element.remove());

            topSorted.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / worldPopulation}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });

        } else if (languagesButton.classList.contains('active')) {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const languageObject = {};
            const regEx = /Languages: ([\w,\s]+)/;
            countrys.forEach(country => {
                if (getComputedStyle(country).display === 'flex') {

                    const languageValue = country.querySelector('.country-languages').textContent.match(regEx);
                    const langA = languageValue[1].split(', ');

                    langA.forEach(lang => flexCountries.push(lang))
                }
            });

            flexCountries.forEach(lang => {
                if (!languageObject[lang]) {
                    languageObject[lang] = 1;
                } else {
                    languageObject[lang] += 1;
                }
            });

            languageObject.Total = total;

            const sortedLanguages = Object.entries(languageObject).sort((a, b) => {
                return b[1] - a[1]
            });

            const topTen = sortedLanguages.slice(0, 10);


            existingData.forEach(element => element.remove());

            topTen.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / total}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });
        } else {

            const existingData = document.querySelectorAll('.containerDiv');
            const countrys = document.querySelectorAll('.country');
            const flexCountries = [];
            const regEx = /[\d+]{1,}/;
            countrys.forEach((country) => {
                if (getComputedStyle(country).display === 'flex') {
                    const nameValue = country.querySelector('.country-name').textContent;
                    const populationValue = parseInt(country.querySelector('.country-population').textContent.match(regEx));
                    flexCountries.push([nameValue, populationValue])
                }
            });

            flexCountries.push(['World', worldPopulation]);
            const soretedFlexCountries = flexCountries.sort((a, b) => {
                return b[1] - a[1];
            });

            const topSorted = soretedFlexCountries.slice(0, 10);

            existingData.forEach(element => element.remove());

            topSorted.forEach((element, i) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('containerDiv');
                dataDiv.appendChild(containerDiv);
                containerDiv.style.height = '3rem';
                containerDiv.style.display = 'flex';
                containerDiv.style.margin = '5px 0';


                const nameDiv = document.createElement('div');
                nameDiv.classList.add('nameD');
                containerDiv.appendChild(nameDiv);
                nameDiv.textContent = element[0];
                nameDiv.style.flex = '0 0 15%';
                nameDiv.style.display = 'flex';
                nameDiv.style.justifyContent = 'center';
                nameDiv.style.alignItems = 'center';

                const graphContainer = document.createElement('div');
                graphContainer.classList.add('graphContainer');
                containerDiv.appendChild(graphContainer);
                graphContainer.style.width = '70%';


                const graph = document.createElement('div');
                graph.classList.add('graph');
                graphContainer.appendChild(graph);
                graph.style.backgroundColor = '#f2a93b';
                graph.style.height = '3rem';
                graph.style.width = `${100 * element[1] / worldPopulation}%`;


                const amount = document.createElement('div');
                amount.classList.add('amount');
                containerDiv.appendChild(amount);
                amount.textContent = element[1];
                amount.style.flex = '0 0 15%';
                amount.style.display = 'flex';
                amount.style.justifyContent = 'center';
                amount.style.alignItems = 'center';

            });
        }
    }

})


//adding eventlisteners to change the alphabetical direction:
//change for name:

let sortOrder = 1;

nameButton.addEventListener('click', e => {
    sortOrder = sortOrder * -1;
    const countries = document.querySelectorAll('.country');

    const sortedCountries = Array.from(countries).sort((a, b) => {
        const nameA = a.querySelector('.country-name').textContent;
        const nameB = b.querySelector('.country-name').textContent;
        return (nameA < nameB ? -1 : 1) * sortOrder;
    });

    const countriesContainer = document.querySelector('.countries-container');
    while (countriesContainer.firstChild) {
        countriesContainer.removeChild(countriesContainer.firstChild);
    }

    sortedCountries.forEach(country => {
        countriesContainer.appendChild(country);
    });
});
//change for capital:

captitalButton.addEventListener('click', e => {
    sortOrder = sortOrder * -1;
    const countries = document.querySelectorAll('.country');

    const sortedCountries = Array.from(countries).sort((a, b) => {
        const capitalA = a.querySelector('.country-capital').textContent;
        const captitalB = b.querySelector('.country-capital').textContent;
        return (capitalA < captitalB ? -1 : 1) * sortOrder;
    });

    const countriesContainer = document.querySelector('.countries-container');
    while (countriesContainer.firstChild) {
        countriesContainer.removeChild(countriesContainer.firstChild);
    }
    sortedCountries.forEach(country => {
        countriesContainer.appendChild(country);
    });
});


//change for population
populationReverse.addEventListener('click', e => {
    sortOrder = sortOrder * -1;
    const countries = document.querySelectorAll('.country');

    const sortedCountries = Array.from(countries).sort((a, b) => {
        const regEx = /[\d+]{1,}/
        const populationA = parseInt(a.querySelector('.country-population').textContent.match(regEx));
        const populationB = parseInt(b.querySelector('.country-population').textContent.match(regEx));

        return (populationA < populationB ? -1 : 1) * sortOrder;
    })

    const countriesContainer = document.querySelector('.countries-container');
    while (countriesContainer.firstChild) {
        countriesContainer.removeChild(countriesContainer.firstChild);
    }
    sortedCountries.forEach(country => {
        countriesContainer.appendChild(country)
    })
});



//adding data content to the statistics part:

const population = [];
const languages = {};
let worldPopulation = null;
//getting the world population
countries.forEach(country => {
    worldPopulation += country.population;
});
population.push({ 'name': 'World', 'population': worldPopulation });

countries.forEach(country => {
    population.push({ 'name': country.name, 'population': country.population });
})

//getting total amount of offical languages:
countries.forEach(country => {
    country.languages.forEach(language => {
        if (!languages[language]) {
            languages[language] = 1;
        } else {
            languages[language] += 1;
        }
    })
})
const total = 123;
languages.Total = total;

//sorting population:
population.sort((a, b) => {
    return b.population - a.population;
})
const topTenPopulation = population.slice(0, 10);

//sorting languages:
const sortedLanguages = Object.entries(languages).sort((a, b) => {
    return b[1] - a[1];
});

const topTenLanguages = sortedLanguages.slice(0, 10);

//adding data to the dom:
const populationButton = document.querySelector('.population');
const languagesButton = document.querySelector('.languages');
const dataDiv = document.querySelector('.data-container')
const countrys = document.querySelectorAll('.country');


topTenPopulation.forEach(element => {

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv');
    dataDiv.appendChild(containerDiv);
    containerDiv.style.height = '3rem';
    containerDiv.style.display = 'flex';
    containerDiv.style.margin = '5px 0';


    const nameDiv = document.createElement('div');
    nameDiv.classList.add('nameD');
    containerDiv.appendChild(nameDiv);
    nameDiv.textContent = element.name;
    nameDiv.style.flex = '0 0 15%';
    nameDiv.style.display = 'flex';
    nameDiv.style.justifyContent = 'center';
    nameDiv.style.alignItems = 'center';

    const graphContainer = document.createElement('div');
    graphContainer.classList.add('graphContainer');
    containerDiv.appendChild(graphContainer);
    graphContainer.style.width = '70%';


    const graph = document.createElement('div');
    graph.classList.add('graph');
    graphContainer.appendChild(graph);
    graph.style.backgroundColor = '#f2a93b';
    graph.style.height = '3rem';
    graph.style.width = `${100 * element.population / worldPopulation}%`;


    const amount = document.createElement('div');
    amount.classList.add('amount');
    containerDiv.appendChild(amount);
    amount.textContent = element.population;
    amount.style.flex = '0 0 15%';
    amount.style.display = 'flex';
    amount.style.justifyContent = 'center';
    amount.style.alignItems = 'center';


})
//adding eventlisteners to the button

populationButton.addEventListener('click', e => {
    populationButton.classList.add('active');
    languagesButton.classList.remove('active');
    const existingData = document.querySelectorAll('.containerDiv');
    const countrys = document.querySelectorAll('.country');
    const flexCountries = [];
    const regEx = /[\d+]{1,}/;
    countrys.forEach((country) => {
        if (getComputedStyle(country).display === 'flex') {
            const nameValue = country.querySelector('.country-name').textContent;
            const populationValue = parseInt(country.querySelector('.country-population').textContent.match(regEx));
            flexCountries.push([nameValue, populationValue])
        }
    });

    flexCountries.push(['World', worldPopulation]);
    const soretedFlexCountries = flexCountries.sort((a, b) => {
        return b[1] - a[1];
    });

    const topSorted = soretedFlexCountries.slice(0, 10);

    existingData.forEach(element => element.remove());

    topSorted.forEach((element, i) => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');
        dataDiv.appendChild(containerDiv);
        containerDiv.style.height = '3rem';
        containerDiv.style.display = 'flex';
        containerDiv.style.margin = '5px 0';


        const nameDiv = document.createElement('div');
        nameDiv.classList.add('nameD');
        containerDiv.appendChild(nameDiv);
        nameDiv.textContent = element[0];
        nameDiv.style.flex = '0 0 15%';
        nameDiv.style.display = 'flex';
        nameDiv.style.justifyContent = 'center';
        nameDiv.style.alignItems = 'center';

        const graphContainer = document.createElement('div');
        graphContainer.classList.add('graphContainer');
        containerDiv.appendChild(graphContainer);
        graphContainer.style.width = '70%';


        const graph = document.createElement('div');
        graph.classList.add('graph');
        graphContainer.appendChild(graph);
        graph.style.backgroundColor = '#f2a93b';
        graph.style.height = '3rem';
        graph.style.width = `${100 * element[1] / worldPopulation}%`;


        const amount = document.createElement('div');
        amount.classList.add('amount');
        containerDiv.appendChild(amount);
        amount.textContent = element[1];
        amount.style.flex = '0 0 15%';
        amount.style.display = 'flex';
        amount.style.justifyContent = 'center';
        amount.style.alignItems = 'center';

    });


});

languagesButton.addEventListener('click', e => {
    languagesButton.classList.add('active');
    populationButton.classList.remove('active');
    const existingData = document.querySelectorAll('.containerDiv');
    const countrys = document.querySelectorAll('.country');
    const flexCountries = [];
    const languageObject = {};
    const regEx = /Languages: ([\w,\s]+)/;
    countrys.forEach(country => {
        if (getComputedStyle(country).display === 'flex') {

            const languageValue = country.querySelector('.country-languages').textContent.match(regEx);
            const langA = languageValue[1].split(', ');

            langA.forEach(lang => flexCountries.push(lang))
        }
    });

    flexCountries.forEach(lang => {
        if (!languageObject[lang]) {
            languageObject[lang] = 1;
        } else {
            languageObject[lang] += 1;
        }
    });

    languageObject.Total = total;

    const sortedLanguages = Object.entries(languageObject).sort((a, b) => {
        return b[1] - a[1]
    });

    const topTen = sortedLanguages.slice(0, 10);


    existingData.forEach(element => element.remove());

    topTen.forEach((element, i) => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');
        dataDiv.appendChild(containerDiv);
        containerDiv.style.height = '3rem';
        containerDiv.style.display = 'flex';
        containerDiv.style.margin = '5px 0';


        const nameDiv = document.createElement('div');
        nameDiv.classList.add('nameD');
        containerDiv.appendChild(nameDiv);
        nameDiv.textContent = element[0];
        nameDiv.style.flex = '0 0 15%';
        nameDiv.style.display = 'flex';
        nameDiv.style.justifyContent = 'center';
        nameDiv.style.alignItems = 'center';

        const graphContainer = document.createElement('div');
        graphContainer.classList.add('graphContainer');
        containerDiv.appendChild(graphContainer);
        graphContainer.style.width = '70%';


        const graph = document.createElement('div');
        graph.classList.add('graph');
        graphContainer.appendChild(graph);
        graph.style.backgroundColor = '#f2a93b';
        graph.style.height = '3rem';
        graph.style.width = `${100 * element[1] / total}%`;


        const amount = document.createElement('div');
        amount.classList.add('amount');
        containerDiv.appendChild(amount);
        amount.textContent = element[1];
        amount.style.flex = '0 0 15%';
        amount.style.display = 'flex';
        amount.style.justifyContent = 'center';
        amount.style.alignItems = 'center';

    });

});








































