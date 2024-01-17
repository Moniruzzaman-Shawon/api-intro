function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbums()

function displayAlbums(albums){
    // console.log(albums);
    const albumContainer = document.getElementById('albums');
    for ( const album of albums){
        const p = document.createElement('p');
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }

}
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadComments()

function displayComments(comments){
    // console.log(comments);
    const commentContainer = document.getElementById('comments');
    for( const comment of comments){
        const com = document.createElement('div');
        com.classList.add('comment');
        com.innerHTML = `
            <h3>${comment.email}</h3>
            <p>${comment.body}</p>
        `
        commentContainer.appendChild(com);
    
    }
}