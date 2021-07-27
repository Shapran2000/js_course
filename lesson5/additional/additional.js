/*
- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
*/

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let address=[];
for (const user of users) {
    address.push(user.address);
    console.log(user);
}

/*for (const user of users) {
    let itemDiv = document.createElement('div');
    itemDiv.innerText=`Name: ${user.name} age: ${user.age} status: ${user.status}
    address: {
    country: ${user.address.country}
    street: ${user.address.street}
    city: ${user.address.city}
    houseNumber: ${user.address.houseNumber}}\n`;
    document.body.appendChild(itemDiv);
}*/
for (const user of users) {
    let itemDiv = document.createElement('div>div*4');
    let nameDiv = document.createElement('div');
    let ageDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let statusDiv = document.createElement('div');
    itemDiv.innerHTML
    nameDiv.innerText=`Name: ${user.name}`;
    ageDiv.innerText=` age: ${user.age}` ;
    statusDiv.innerText=` status: ${user.status}`;
    addressDiv.innerText=` address: {
    country: ${user.address.country}
    street: ${user.address.street}
    city: ${user.address.city}
    houseNumber: ${user.address.houseNumber}}\n`;
    document.body.appendChild(nameDiv);
    document.body.appendChild(ageDiv);
    document.body.appendChild(statusDiv);
    document.body.appendChild(addressDiv);
}

