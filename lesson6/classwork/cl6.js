fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        let postsBox = document.getElementsByClassName("posts-box")[0];

        for (const valueElement of value) {
            let pPosts = document.createElement('p');
            pPosts.innerText = `${valueElement.id}  title: ${valueElement.title}`;
            let detailsBtn = document.createElement(`button`);
            detailsBtn.innerText = 'details';
            let ulElement = document.createElement('ul');
            let divElement = document.createElement('div');
            detailsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${valueElement.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {

                        ulElement.innerHTML = "";


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
            pPosts.append(detailsBtn);
            postsBox.append(pPosts);
        }
    })
