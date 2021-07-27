fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        let usersBox = document.getElementsByClassName("users-box")[0];
        let userDiv = document.createElement('div');
        userDiv.className = 'user';
        for (const valueElement of value) {
            let pUser = document.createElement('p');
            pUser.style.background='#7B68EE';
            pUser.style.margin=0;
            pUser.innerText = `${valueElement.id}- ${valueElement.name}`;
            userDiv.append(pUser);
            let postsBtn = document.createElement(`button`);
            postsBtn.innerText = 'posts';
            postsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${valueElement.id}/posts`)
                    .then(response => response.json())
                    .then(value => {
                        let postsBox = document.createElement("div");
                        for (const valueElement of value) {
                            let pPosts = document.createElement('p');
                            pPosts.style.background="#EE82EE";
                            pPosts.style.margin=0;
                            pPosts.innerText = `${valueElement.id}  title: ${valueElement.title}`;
                            let commentsBtn = document.createElement(`button`);
                            commentsBtn.innerText = 'comments';
                            commentsBtn.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${valueElement.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        let ulElement = document.createElement('ul');
                                        ulElement.style.background='#6495ED';
                                        ulElement.style.margin=0;

                                        let divElement = document.createElement('div');
                                        divElement.innerHTML = "";


                                        for (const comment of comments) {
                                            console.log(comment);
                                            let liElement = document.createElement('li');
                                            liElement.innerHTML = `<h4>${comment.name}</h4> ${comment.body} `;
                                            ulElement.appendChild(liElement);
                                        }
                                        pPosts.append(divElement);
                                        divElement.append(ulElement);
                                    })

                            }
                            pPosts.append(commentsBtn);
                            postsBox.append(pPosts);
                            pUser.append(postsBox);
                        }

                    });

            }
            pUser.append(postsBtn);
        }
        usersBox.append(userDiv);



    });