console.log('- створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)\n' +
    'створити пустий масив, наповнити його 10 об\'єктами Client\n' +
    'Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)\n');

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, "Leanne", "Bret", "Sincere@april.biz", "777-777-77-77", ['11', '22', '33', '2']),
    new Client(2, "Ervin", "Antonette", "Shanna@melissa.tv", "777-777-77-77", ['14', '22', '13', '4', '5', '77']),
    new Client(3, "Clementine", "Samantha", "Nathan@yesenia.net", "777-777-77-77", ['12', '23', '43']),
    new Client(4, "Patricia", "Karianne", "Julianne.OConner@kory.org", "777-777-77-77", ['11', '3']),
    new Client(5, "Chelsey", "Kamren", "Lucio_Hettinger@annie.ca", "777-777-77-77", ['334']),
    new Client(6, "Dennis", "Leopoldo_Corkery", "Karley_Dach@jasper.info", "777-777-77-77", ['51', '678', '42', '33']),
    new Client(7, "Kurtis", "Elwyn", "Telly.Hoeger@billy.biz", "777-777-77-77", ['71', '82', '73']),
    new Client(8, "Nicholas", "Maxime_Nienow", "Sherwood@rosamond.me", "777-777-77-77", ['19', '82', '33']),
    new Client(9, "Glenna", "Delphine", "Chaim_McDermott@dana.i", "777-777-77-77", ['71', '28', '39']),
    new Client(10, "Clementina", "Moriah.Stanton", "Rey.Padberg@karina.biz", "777-777-77-77", ['71', '62', '53'])
]
clients.sort(function (cl1, cl2) {
    return cl1.order.length - cl2.order.length;
})
console.log(clients);
let car = function (model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log( 'Model - '+this.model+'\n',' Manufacturer - ' + this.manufacturer+'\n','Year -'+this.year+'\n','Max speed -'+ this.maxSpeed +'\n','Engine capacity'+ this.engineCapacity) ;
    }
    this.increaseMaxSpeed =function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear  =function (newValue){
        this.year = newValue;
    }
    this.addDriver   =function (driver){
        this.driver = driver;

    }


}
let cars = new car("BMW","Germany",2021,500,2.0);
cars.info();
cars.addDriver({name :"Taras", experience:8});
console.log(cars.driver);



class Car{

    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    info(){
        console.log( 'Model - '+this.model+'\n',' Manufacturer - ' + this.manufacturer+'\n','Year -'+this.year+'\n','Max speed -'+ this.maxSpeed +'\n','Engine capacity'+ this.engineCapacity) ;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear   (newValue){
        this.year = newValue;
    }
    addDriver (driver){
        this.driver = driver;

    }
}
let car1 = new Car("BMW","Germany",2021,500,2.0);
car1.info();
car1.addDriver({name :"Taras", experience:8});
console.log(car1.driver);

console.log("-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.\n" +
    "Сторити об'єкт класу \"принц\" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.\n" +
    "За допомоги циклу знайти яка попелюшка повинна бути з принцом.\n" +
    "Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку\n");

class Cinderella{
    constructor(name, age ,footSize ) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{

    constructor(name, age ,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let cinderellas=[new Cinderella("Name1",19,36),
    new Cinderella("Name2",20,37),
    new Cinderella("Name3",18,36.5),
    new Cinderella("Name4",17,35),
    new Cinderella("Name5",16,34),
    new Cinderella("Name6",21,38),
    new Cinderella("Name7",22,38),
    new Cinderella("Name8",23,37),
    new Cinderella("Name9",19,37),
    new Cinderella("Name10",18,35)];
let prince = new Prince("Name",21,{footSize:36 , color:"black"});
let newCinderellas=   cinderellas.find(function (cinderella) {
    return  cinderella.footSize===prince.shoe.footSize;
})
console.log(newCinderellas);





