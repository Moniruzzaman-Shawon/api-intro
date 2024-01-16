function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post.title);
    }
}
function addAPost(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: 'New Post',
                body: 'This is a post',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(console.log(data))
}