/*---------------------1------------------------------*/
let arrOfNumbers = [1, 2, 3, 4, 5];
let arrOfStrings = ['one', 'two', 'three', 'four', 'five'];
let arrays = [1, 'two', true, false, 'five', 2];

for (const arrElement of arrOfNumbers) {
    console.log(arrElement);
}
for (const arrElement of arrOfStrings) {
    console.log(arrElement);
}
for (const arrElement of arrays) {
    console.log(arrElement);
}

/*---------------------------2------------------------------*/
let newArr=[];
newArr[0]="hello";
newArr[1]=1;
newArr[2]=true;
newArr[3]=null;
newArr[5]="bye";