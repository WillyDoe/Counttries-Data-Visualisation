//getting needed elements
const main = document.querySelector('main');
const pButton = document.querySelector('.population');
const lButton = document.querySelector('.languages');
const wrapper = document.getElementsByClassName('.wrapper');
const bDiv = document.getElementsByClassName('.graph-buttons');
const h3 = document.querySelector('h3');
const graphDiv = document.querySelectorAll('.graph');
const graphWrapper = document.getElementsByClassName('.graph-wrapper');
const graphsContainer = document.querySelector('.graphs-div');
const country = document.querySelectorAll('.country');
const amount = document.querySelectorAll('.amount');
const block = document.querySelectorAll('.block');


//getting most populated countries and most spoken languages:
import countries from "../data/countries_data.js";

//population of countries
const sortedCountriesPopulation = countries.sort((a,b) => {
    return b.population - a.population
})
const tenPopulation = sortedCountriesPopulation.slice(0,10);

//world population
let worldPopulation = 0;
countries.forEach((country) => {
    worldPopulation += country.population
    
})
tenPopulation.push({"name": "World", "population": worldPopulation})
tenPopulation.sort((a,b) => {
    return b.population - a.population
})
//getting most spoken language
const mostSpoken = {};

const gettingLanguages = (countries) => {
    countries.forEach((country) => {
        for(const language of country.languages){
            if(!mostSpoken[language]){
                mostSpoken[language] = 1
            }else{
                mostSpoken[language] += 1;
            }
        }
    })
}
gettingLanguages(countries);


const arrayMostSpoken = Object.entries(mostSpoken).sort((a,b) => {
    return b[1] - a[1]
});
const topTenSpoken = arrayMostSpoken.slice(0,10);
//getting number of official languagages 
const totalLanguages = Object.entries(mostSpoken).length;
topTenSpoken.push(["Official languages world", totalLanguages]);

topTenSpoken.sort((a,b) => {
   return b[1] - a[1]
})
console.log(topTenSpoken)

//adding functions
pButton.addEventListener('click', balken => {

    country.forEach((countries, i) => {
        countries.textContent = tenPopulation[i].name
    })

    amount.forEach((mount, i) => {
        mount.textContent = tenPopulation[i].population
    })

    block.forEach((element, i) => {
        element.style.width = `${tenPopulation[i].population * 100 / worldPopulation}%`
    })

    
})


lButton.addEventListener('click', balken => {
    country.forEach((mount, i) => {
        mount.textContent = topTenSpoken[i][0]
    })

    amount.forEach((mount, i) => {
        mount.textContent = topTenSpoken[i][1]
    })

    block.forEach((element, i) => {
        element.style.width = `${topTenSpoken[i][1] * 100 / totalLanguages}%`
    })
})

