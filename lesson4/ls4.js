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
        return {
            n
        }
    });
    console.log(a);
}
mapFunction(10);