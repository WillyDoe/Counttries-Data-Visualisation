//importing neccasary data:
import countries from "../data/countries.js";

//getting neccasry elements
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const startsWith = document.querySelector('.starting');
const contains = document.querySelector('.containing');
const reverse = document.querySelector('.reverse');
const container = document.querySelector('.countries-container');
const countryViereck = document.getElementsByClassName('country');
const text = document.querySelector('p');


//adding functions
//adding the click effect

buttons.forEach(button => {
    button.addEventListener('click', e => {
        buttons.forEach(bla => bla.classList.remove('active'));
        button.classList.add('active');
    })
})


//adding countries to dom
countries.forEach((country) => {
    const newCountry = document.createElement('div');
    newCountry.setAttribute('class', 'country');
    container.appendChild(newCountry);
    newCountry.textContent = country;
})




//adding function that takes input value and changes countries
input.addEventListener('input', e => {
    const activeButton = document.getElementsByClassName('active');
    const userInput = input.value
    if(userInput.length === 0){
        countries.forEach((country) => {
            const newCountry = document.createElement('div');
            newCountry.setAttribute('class', 'country');
            container.appendChild(newCountry);
            newCountry.textContent = country;
            text.textContent = `Total countries shwon: ${countries.length}`
        })
    }else if(userInput.length > 0 && activeButton.length === 0){
        Array.from(countryViereck).map(el => el.remove());

        const regEx = new RegExp(`^`+userInput, 'gi');
        const searchedCountries = countries.filter(country => country.match(regEx));
        
        searchedCountries.forEach(country => {
            const newCountry = document.createElement('div');
            newCountry.setAttribute('class', 'country');
            container.appendChild(newCountry);
            newCountry.textContent = country;
        });

        text.textContent = `Total countries shwon: ${searchedCountries.length}`
    }else if(userInput.length >= 0  && activeButton.length > 0){
        
        if(startsWith.classList.contains('active')){
            Array.from(countryViereck).map(el => el.remove());
            const regEx = new RegExp(`^`+userInput, 'gi');
            const searchedCountries = countries.filter(country => country.match(regEx));

            searchedCountries.forEach(country => {
                const newCountry = document.createElement('div');
                newCountry.setAttribute('class', 'country');
                container.appendChild(newCountry);
                newCountry.textContent = country;
            });

            text.textContent = `Countries starting with ${userInput}: ${searchedCountries.length}`

        }else if(contains.classList.contains('active')){
            
            Array.from(countryViereck).map(el => el.remove());
            const pattern = userInput.toLowerCase();
            const searchedCountries = countries.filter(country => country.toLowerCase().includes(pattern));

            searchedCountries.forEach(country => {
                const newCountry = document.createElement('div');
                newCountry.setAttribute('class', 'country');
                container.appendChild(newCountry);
                newCountry.textContent = country;
            })
            text.textContent = `Countries including ${userInput}: ${searchedCountries.length}`
        }
    }

})



//adding function so that input current input.value gets still used, when we click another button
//and that i can reverse the order of the countries
Array.from(buttons).forEach(button => button.addEventListener('click', e => {
    if(reverse.classList.contains('active')){
        let currentCountries = Array.from(document.getElementsByClassName('country')).reverse();
    Array.from(countryViereck).map(el => el.remove());
    currentCountries.forEach(country => {
                const newCountry = document.createElement('div');
                newCountry.setAttribute('class', 'country');
                container.appendChild(newCountry);
                newCountry.textContent = country.innerHTML;
    })
    }else if(contains.classList.contains('active')){
        Array.from(countryViereck).map(el => el.remove());
            const pattern = input.value.toLowerCase();
            const searchedCountries = countries.filter(country => country.toLowerCase().includes(pattern));

            searchedCountries.forEach(country => {
                const newCountry = document.createElement('div');
                newCountry.setAttribute('class', 'country');
                container.appendChild(newCountry);
                newCountry.textContent = country;
            })
            text.textContent = `Countries including ${input.value}: ${searchedCountries.length}`
    }else if(startsWith.classList.contains('active')){
        Array.from(countryViereck).map(el => el.remove());
            const regEx = new RegExp(`^`+input.value, 'gi');
            const searchedCountries = countries.filter(country => country.match(regEx));

            searchedCountries.forEach(country => {
                const newCountry = document.createElement('div');
                newCountry.setAttribute('class', 'country');
                container.appendChild(newCountry);
                newCountry.textContent = country;
            });

            text.textContent = `Countries starting with ${input.value}: ${searchedCountries.length}`
    }
}))
    








