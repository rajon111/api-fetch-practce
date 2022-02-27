function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts()
function  displayPosts(posts){
    // console.log(post);
    // console.log(post.map(p => p.title));
    const sec = document.getElementById('posts')
    for (const post of posts){
        const div =document.createElement('div')
        div.classList.add('post')
        div.innerHTML =`
            <h3> ${post.title} </h3>  
            <p>${post.body.slice(0,30)} </p>  
        `;
        sec.appendChild(div)
    }
}

//post method

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{

        method:'POST',
        body:JSON.stringify({
            title:"it's working!",
            dis: 'hello, hello, hello',
            id: 1
        }),
        headers:{
            
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))  
}