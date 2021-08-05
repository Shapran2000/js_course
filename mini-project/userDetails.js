const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser);
let userBox = document.getElementsByClassName("user-details")[0];
let userWrap = document.createElement("div");
userWrap.className = 'user-wrap';
let userDet = document.createElement("div");
userDet.className = 'user-det';
let postsBox = document.createElement("div");
postsBox.className = 'posts-box'
let postsUl = document.createElement("ul");


let userDiv = document.createElement("div");

userDiv.innerText = JSON.stringify(user, null, 2);
let postBtn = document.createElement("button");
postBtn.innerHTML = "post of current user";
postBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            postsBox.innerText = '';
            let postsDiv = document.createElement("div");
            postsDiv.className = 'posts-div';
            let title = document.createElement('h2');


            for (const post of posts) {


                let postDiv = document.createElement("div");
                let postTitle = document.createElement("div");
                postTitle.append(post.title);
                postDiv.append(postTitle);
                postsDiv.append(postDiv);
                let button = document.createElement("button");

                button.innerHTML = 'details';
                button.onclick = function () {
                    location.href = `post-details.html?post=${JSON.stringify(post)}`;
                }
                postDiv.append(button);
                postsBox.append(postsDiv);
            }
        })
}
userWrap.append(userDiv, postBtn);

userDet.append(userWrap, postsBox);
userBox.append(userDet);
