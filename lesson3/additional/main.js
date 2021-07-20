console.log(`- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
`)
function addTwoArr(arr1,arr2){
    let newArr=[];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i]+arr2[i];

    }
    return newArr;
}
// let arr1=[1,2,3,4];
// let arr2=[2,3,4,5];
// console.log(addTwoArr(arr1, arr2));
console.log( `- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.`);
let arr =['a', 'b', 'c'];
let element=[1, 2, 3 ];
for (let i = 0; i < element.length; i++) {
    arr.push(element[i]);

}
console.log(arr);
console.log(`- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].`);
//let element=[1, 2, 3 ];
let newElement=[];
for (let i = 0,j=element.length-1; i < element.length; i++) {

    newElement[j] = element[i];
    j--;
}
console.log(newElement);

console.log(`- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.`);
let el =[4,5,6];
for (const number of el) {
    element.push(number);

}
console.log(element);
console.log(`- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.`);
let element1=[1,2,3];
for (const number of [6,5,4]) {
    element1.unshift(number);
}
console.log(element1);

console.log(`- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].`);
let element2=[1,2,3,4,5];
element2.shift();
element2.shift();
element2.shift();
console.log(element2);
console.log(`- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.`);
let arr1=[ 'a', 'b', 'c'];
let res='';
for (let i = 0; i < arr1.length; i++) {
    const arr1Element = arr1[i];
    res +=arr1Element;
}
console.log(res);
console.log(`-   функція Приймає масив та число "i", та міняє місцями об\`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]`);
function foo(arr,i){
   let number=arr[i];
   arr[i]=arr[i+1];
   arr[i+1]=number;
   return arr;
}

console.log(foo([9, 8, 0, 4], 3));
console.log(`- Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'`);
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';
function validation(str){
    let res1= str.trim();
    return res1.replace(/\s+/g, ' ');
}

console.log(validation(n1));
console.log(validation(n2));
console.log(validation(n3));
console.log(`- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100`);
function formatArr(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==0){
            let splice=parseInt( arr.splice(i,1));
            arr.push(splice);
        }

    }
    return arr;
}
let nnn =[0,1,2,3,4];
console.log(formatArr(nnn));