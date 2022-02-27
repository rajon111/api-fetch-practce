const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>showCountries(data) )
}
loadCountries()

const showCountries =countries =>{
    // console.log(countries)
    const countryDiv = document.getElementById('countries')
    for(const country of countries){
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p> 
        <img width=150px src="${country.flag}" alt="">
        <p> ${country.currencies[0].code} </p>
        `;
        countryDiv.appendChild(div)
    }
}