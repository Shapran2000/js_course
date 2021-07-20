let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(`1. перебрати його циклом while`);
let i = 0;
while (i < arrays.length) {
    console.log(arrays[i]);
    i++;
}
console.log(`перебрати його циклом for`);
for (const array of arrays) {
    console.log(array);
}
console.log(`перебрати циклом while та вивести  числа тільки з непарним індексом`);
i=0;
while (i < arrays.length) {
    if ((i % 2 )!==0) {
        console.log(arrays[i]);
    }
i++;

}
console.log(`перебрати циклом for та вивести  числа тільки з непарним індексом`);

for (let j = 0; j < arrays.length; j++) {
    if((j % 2 )!==0) {
        console.log(arrays[j])
    }
}
console.log(`перебрати циклом while та вивести  числа тільки парні  значення`);
i=0;
while (i < arrays.length) {

    if(arrays[i]%2==0){
        console.log(arrays[i]);
    }
    i++;
}
console.log(`перебрати циклом for та вивести  числа тільки парні  значення`);

for (const array of arrays) {
    if(array%2==0){
    console.log(array);
    }
}

console.log(`замінити кожне число кратне 3 на слово "okten"`);

for (let j = 0; j < arrays.length; j++) {
    if((arrays[j] % 3 )==0) {
        arrays[j]="okten";
    }
    console.log(arrays[j]);
}
console.log(`вивести масив в зворотньому порядку.`);
for (let j = arrays.length - 1; j >= 0; j--) {

    console.log(arrays[j]);
}
console.log( 'створити пустий масив та : - заповнити його 50 парними числами за допомоги циклу.');
let newArray=[];
for (let j = 0; j < 50; j++) {
    newArray[j] = 2;
    console.log(newArray[j])

}
console.log( 'створити пустий масив та : - заповнити його 50 не парними числами за допомоги циклу.');

for (let j = 0; j < 50; j++) {
    newArray[j] = 1;
    console.log(newArray[j])

}
console.log( ' Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)');

for (let j = 0; j < 20; j++) {
    newArray[j] = Math.random();
    console.log(newArray[j])

}
console.log( 'Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)');

for (let j = 0; j < 20; j++) {
    newArray[j] = parseInt( Math.random()* (732 - 8) + 8);
    console.log(newArray[j])

}
console.log('Вивести за допомогою console.log кожен третій елемен');

for (let j = 0; j < newArray.length; j++) {
    if((j%3)==0) {
        console.log(newArray[j])
    }
}
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.');

for (let j = 0; j < newArray.length; j++) {
    if( ((j%3)==0)&&(newArray[j]%2==0)) {
        console.log(newArray[j])
    }
}
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив');
let newArr1=[];
for (let j = 0; j < newArray.length; j++) {
    if( ((j%3)==0)&&(newArray[j]%2==0)) {
        console.log(newArray[j]);
        newArr1=newArray[j];
    }
}
console.log(' Вивести кожен елемент масиву, сусід справа якого є парним\n' +
    '  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56');

let exampleArr= [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let j = 0; j < exampleArr.length; j++) {
    if((exampleArr[j+1])%2===0 ){
        console.log(exampleArr[j]);
    }
}
console.log(" Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.");
let costOfSeparatePurchase=[100,250,50,168,120,345,188];
let average=0;
for (const number of costOfSeparatePurchase) {
    average +=  number/costOfSeparatePurchase.length;

}
console.log(`середній чек : ${average}`);

console.log("Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.");
let randomArr=[];
let multipliedArray=[];
for (let j = 0; j < 10; j++) {
    randomArr[j] = parseInt( Math.random()* (20 - 0) + 0);
    console.log(randomArr[j]);


}
console.log(`помножений на 5`)
for (let j = 0; j < randomArr.length; j++) {
    randomArr[j]=randomArr[j]*5;
    console.log(randomArr[j]);
}

console.log(`перемітити в новий масив`)

for (let j = 0; j < randomArr.length; j++) {
    multipliedArray[j]=randomArr[j];
    console.log(multipliedArray[j]);
}
console.log('Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.');
let array=[1,'11',true,12,'qqq','qqq',5,false,42,'sdsd'];
let newArray1=[];

for (let j = 0 ,  i = 0; j < array.length; j++) {

    const arrayElement = array[j];
    if(Number.isInteger(arrayElement ) ){
        newArray1[i] = arrayElement;
        i++;
    }
}
for (const newArrayElement of newArray1) {
    console.log(newArrayElement);
}
console.log('- Дано 2 масиви з рівною кількістю об\'єктів.\n' +
    'Масиви:')
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
console.log('З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id" .\n' +
    'Записати цей об\'єкт в новий масив');
let usersWithCities=[];

for (let j = 0; j < usersWithId.length; j++) {
    for (let k = 0; k < citiesWithId.length; k++) {
        if(usersWithId[j].id==citiesWithId[k].user_id){
            usersWithId[j].addres=citiesWithId[k];
            usersWithCities[j]= usersWithId[j];

        }

    }

}
for (const usersWithCity of usersWithCities) {
    console.log(usersWithCity);
}
