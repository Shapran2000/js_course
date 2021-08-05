let usersWrap = document.getElementsByClassName("users-wrap")[0];

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(value => {

        for (const valueElement of value) {
            let usersInf = document.createElement("div");
            usersInf.className='user-inf';
            let userName = document.createElement("div");
            userName.className='user-name';
            let user = document.createElement("div");
            user.className='user';
            userName.innerHTML = `${valueElement.id} - ${valueElement.name}`;
            let button = document.createElement("button");

            button.innerHTML = 'details';
            button.onclick = function () {
                location.href=`user-details.html?user=${JSON.stringify(valueElement)}`;
            }
            user.append(userName,button);
            usersInf.append(user);
            usersWrap.append(usersInf);
        }
    })