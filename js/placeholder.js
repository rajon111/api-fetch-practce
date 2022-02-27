function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json.id))
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUsers(data))
}
function displayUsers(data){
  // console.log(data.map(p => p.name))
  const ul= document.getElementById('users')
  for (const user of data){
    // console.log(user)
    const li = document.createElement('li')
    li.innerHTML= `
      <p> ${user.name} </p>
    `;
    ul.appendChild(li);
  }
}
