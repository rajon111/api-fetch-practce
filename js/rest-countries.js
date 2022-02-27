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
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`
        <img width=150px src="${country.flag}" alt="">
        <h3> ${country.name} </h3>
        <p> ${country.capital} </p> 
        
        
        <button onclick="loadCountryByname('${country.name}')"> details </button>
        `;
        countryDiv.appendChild(div)
    }
}
const loadCountryByname =name=>{
    const url =`https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res=> res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    const countryDetailsDiv = document.getElementById('country-detils')
    countryDetailsDiv.innerHTML=`
    <h3> ${country.name} </h3>
        <p> ${country.capital} </p> 
        <p> ${country.population} </p> 
        <img width=150px src="${country.flag}" alt="">
    `;
    
}