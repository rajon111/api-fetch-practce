const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies=data=>{
    // console.log(data)
    const buddies = data.results
    // console.log(buddies)
    const sec = document.getElementById('buddies')
    for(const buddy of buddies){
        console.log(buddy)
        const div = document.createElement('div')
        div.innerHTML=`
        <h2>${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h2>
        <p> ${buddy.email} <p>


        `;
        sec.appendChild(div)
    }    
}