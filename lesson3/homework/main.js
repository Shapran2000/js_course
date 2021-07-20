console.log(`- створити функцію яка обчислює та повертає площу прямокутника висотою`);
function areaOfRectangle(a,b){
    return a*b;
}

console.log(`- створити функцію яка обчислює та повертає площу кола`);
function areaOfCircle(r){
    return Math.PI*Math.pow(r,2);
}

console.log(`- створити функцію яка обчислює та повертає площу циліндру`);

function AreaOfCylinder(r,h){
    return 2*Math.PI*r*(r+h);
}

console.log( `- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);`)
function foo(arr){
    let small=arr[0];
    let big=arr[0];
    for (const arrElement of arr) {
        if(arrElement<small){
            small=arrElement;
        }else if(arrElement>big){
            big=arrElement;
        }
    }
    console.log(`Найбільше число : ${big}`);
    return small;
}

console.log(`- створити функцію яка  створює блок з текстом. Текст задати через аргумент`);
function blockWithText(text){
    document.write(`<div>${text}</div>`)
}


console.log(`- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);
function ulWithLi(text){
    document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
         </ul>`);

}

console.log(`- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)`);
function ulWithLi1(text,number){
    document.write(`<ul>`);
        for(let i = 0 ; i<number;i++){
            document.write(` <li>${text}</li>`);
        }

    document.write(`</ul>`);
}

console.log( `- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`);
function buildList(arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(` <li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
