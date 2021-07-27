console.log("- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.\n");

function randArrOfInt() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(Math.random() * 100);

    }
    console.log(arr);
}

randArrOfInt();
console.log("- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.\n");

function randArrOfIntNew(numberOfElements) {
    let arr = [];
    for (let i = 0; i < numberOfElements; i++) {
        arr[i] = parseInt(Math.random() * 100);

    }
    console.log(arr);
    return arr;
}

randArrOfIntNew(11);
console.log('- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort\n');

function sortArr(numberOfElements) {
    let arr = [];
    console.log(`До сортування :`);
    arr = randArrOfIntNew(numberOfElements);
    arr.sort();
    console.log(`Після сортування :`);
    console.log(arr);
}

function sortArrGrowth(numberOfElements) {
    let arr = [];
    console.log(`До сортування :`);
    arr = randArrOfIntNew(numberOfElements);
    arr.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });
    console.log(`Після сортування :`);
    console.log(arr);
}

sortArr(10);
sortArrGrowth(10);
console.log("- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа\n");

function filterArr(numberOfElements) {

    let arr = [];
    console.log(`До фільтрування :`);
    arr = randArrOfIntNew(numberOfElements);
    let a = arr.filter(function (value) {
        return value%2===0;

    });
    console.log(`Після фільтрування :`);
    console.log(a);

}

filterArr(10);


console.log("- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.\n");
function mapFunction(numberOfElements){
    let arr = [];
    console.log(`До перетворення :`);
    arr = randArrOfIntNew(numberOfElements);
    let a = arr.map(function (n) {
        return n.toString();

    });
    console.log(a);
}
mapFunction(10);
console.log('- Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone\n' +
    'створити пустий масив, наповнити його 10 об\'єктами new User(....)\n' +
    'Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об\'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)');
let user = function (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [new user(1,"Leanne","Bret", "Sincere@april.biz","777-777-77-77"),
    new user(2,"Ervin","Antonette", "Shanna@melissa.tv","777-777-77-77"),
    new user(3,"Clementine","Samantha", "Nathan@yesenia.net","777-777-77-77"),
    new user(4,"Patricia","Karianne", "Julianne.OConner@kory.org","777-777-77-77"),
    new user(5,"Chelsey","Kamren", "Lucio_Hettinger@annie.ca","777-777-77-77"),
    new user(6,"Dennis","Leopoldo_Corkery", "Karley_Dach@jasper.info","777-777-77-77"),
    new user(7,"Kurtis","Elwyn", "Telly.Hoeger@billy.biz","777-777-77-77"),
    new user(8,"Nicholas","Maxime_Nienow", "Sherwood@rosamond.me","777-777-77-77"),
    new user(9,"Glenna","Delphine", "Chaim_McDermott@dana.i","777-777-77-77"),
    new user(10,"Clementina","Moriah.Stanton", "Rey.Padberg@karina.biz","777-777-77-77")];

let filterUser= users.filter(function (value) {
    return value.id%2===0;
})
filterUser.sort(function (v1,v2) {
    return v1.id-v2.id;
})
console.log(filterUser);



