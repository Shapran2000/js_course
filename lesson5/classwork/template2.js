//    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader= document.getElementById('main_header');
mainHeader.style.color='red';
mainHeader.innerText ="june-2021-tuesday";
//    b) робить шириниу елементу ul 400px
let elUl =document.getElementsByTagName("ul")[0];
elUl.style.width = "400px";
//    c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList= document.getElementsByClassName("linkList");
for (let linkListElement of linkList) {
    linkListElement.style.width = "50%"
}
//    d) отримує текст який зберігається в елементі з класом listElement2
let listElement2= document.getElementsByClassName('listElement2');
for (const listElement2Element of listElement2) {
    console.log(listElement2Element.textContent);
}
//    e) отримує всі елементи li та змінює ім колір фону на сірий

for (const elementsByTagNameElement of document.getElementsByTagName("li")) {
    elementsByTagNameElement.style.background='silver';
}
//    f) отримує всі елементи 'a' та додає їм клас anchor
for (const elementsByTagNameElement of document.getElementsByTagName("a")) {
    elementsByTagNameElement.classList.add('anchor');
}
//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const elementsByTagNameElement of document.getElementsByTagName("a")) {
    if(elementsByTagNameElement.textContent==='link3'){
        elementsByTagNameElement.style.fontSize='40px';
    }
}
//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const elementsByTagNameElement of document.getElementsByTagName("a")) {
    elementsByTagNameElement.textContent
    elementsByTagNameElement.classList.add(`element_${elementsByTagNameElement.textContent}`);

}
//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let background= prompt("enter your background");
for (let elementsByClassNameElement of document.getElementsByClassName("sub-header")) {
    elementsByClassNameElement.style.background=background;
}
//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

//НЕ зрозумів завдання

//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let someText= prompt("enter text");

for (const elementsByTagNameElement of document.getElementsByClassName("content_1 ")) {
    elementsByTagNameElement.innerHTML=someText;
}
//    l) отримати елементи p та змінити їм padding на 20px

for (const elementsByTagNameElement of document.getElementsByTagName("p")) {
    elementsByTagNameElement.style.padding = '20px'

}
//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
for (const elementsByTagNameElement of document.getElementsByClassName("text2 ")) {
    elementsByTagNameElement.innerHTML='june-2021-tuesday';
}
