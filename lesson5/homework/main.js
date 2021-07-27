console.log('    -- отримує текст з параграфа з id "content"\n');
let content = document.getElementById("content");
console.log(content.textContent);
console.log('    -- отримує текст з блоку з id "rules"\n');
let rules = document.getElementById("rules");
console.log(rules.textContent);
console.log('    -- замініть текст параграфа з id \'content\' на будь-який інший\n');
content.innerHTML='some other text';
console.log('    -- замініть текст параграфа з id \'rules\' на будь-який інший\n');
rules.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sunt.';

// -- змініть кожному елементу колір фону на червоний
document.body.style.background='red';
// -- змініть кожному елементу колір тексту на синій
document.body.style.background='blue';

console.log('    -- отримати весь список класів елемента з id=rules і вивести їх в console.log\n');
let elementByIdRules = document.getElementById('rules');
console.log(elementByIdRules.classList);
//    -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь



// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules=  document.getElementsByClassName('fc_rules');

for (let fcRule of fc_rules) {
    fcRule.style.color='red';
}
for (let fcRule of fc_rules) {
    fcRule.onclick = function (ev) {
        console.log(ev.target.textContent);
        //console.log(fcRule.textContent);
        ev.target.innerText='some text';
    };
}




