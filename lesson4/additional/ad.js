console.log('- Створити клас або функцію конструктор, за допомоги якої можна створювати об\'єкти наступного вигляду.\n' +
    'Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об\'єктів\n');

class User {
    constructor(name, username, email, street, suite, city, zipcode,lat,lng,phone,website ) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address={street,suite,city,zipcode,geo:{lat,lng}}
        this.phone =phone;
        this.website =website;
    }
    //Зробив окремою функцією , бо співпадають назви аолів - name
    addCompany(name,catchPhrase,bs){
        this.company={name,catchPhrase,bs};
    }

}

let user = new User('Leanne Graham', 'Bret', 'Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442',
    'hildegard.org');
user.addCompany('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
console.log(user);

//Останнє не зробив
console.log("-  Створити функцію конструктор / клас  який описує об'єкт тегу\n" +
    "Поля :\n" +
    " -назва тегу ()\n" +
    " - опис його дій\n" +
    " - масив з атрибутами (2-3 атрибути максимум)\n" +
    " Кожен атрибут описати як окремий який буде містити\n" +
    " -назву атрибуту\n" +
    " -опис дії атрибуту\n" +
    " інформацію брати з htmlbook.ru");
class Tag {
    constructor(titleOfTag,action, titleOfAttr,actionOfAttr) {
        this.titleOfTag = titleOfTag;
        this.action = action;
    }
}
let a  = new Tag("a" ,'','wqwqw','qwqw');
console.log(a);
