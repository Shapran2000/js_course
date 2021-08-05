const JSONPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JSONPost);
let postElement = document.createElement(`div`);
postElement.className='postElement';
postElement.innerText = JSON.stringify(post, null, 2);
let posts= document.getElementsByClassName("posts")[0];
posts.append(postElement);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(value => {
        let commentDiv = document.createElement(`div`);
        commentDiv.className='comment-div';

        for (const valueEl of value) {
            let valueElDiv = document.createElement(`div`);
            valueElDiv.className='comment';
            valueElDiv.innerText=valueEl.body;
            commentDiv.append(valueElDiv)
        }
        posts.append(commentDiv);

    })