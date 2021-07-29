function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Прокинутись ");

            resolve('Ще 5 хв і встаю');
        }, 300)
    })

}

function haveBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Поснідати ");

            resolve('ммм смачий омлет');
        }, 1000)
    })

}

function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Піти в душ");

            resolve('бррр холодна вода');
        }, 500)
    })
}

function waitForTheBus(wether) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(wether!=='rain'){
                console.log("Дочекатись автобус");
                resolve('вже 3-ій повністю забитий , оо їде');

            }else {
                console.log("Працюю з дому");
                reject('Вмикаємо ноут');

            }

        }, 3000)
    })

}

function haveDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Пообідати");

            resolve('як смачно ');
        }, 1000)
    })


}

function backToWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Знову до роботи");
            resolve("Так ще декілька тасків і все ")
        }, 200)
    })
}

function waitForTheBusToHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Встигнати на автобус");

            resolve(' ооо їде , клас !!!');
        }, 800)
    })

}

function goToTheShop() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Піти в магазин");

            resolve('Щоб таке купити смачне?)');
        }, 3000)
    })

}

function haveSupper() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Вечеря");

            resolve('що б мені таке подивитись в ютубі ?');
        }, 500)
    })

}

function sleep(freeMany) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Спати");

            if (freeMany > 1000) {
                resolve('Йду спати, взавтра на відпонок, їду на море ');
            } else {
                reject('такс ще не вистачає на відпочинок , поїду з наступного тижня ', null);
            }
        }, 1000)
    })

}


wakeUp().then((value) => {
    console.log(value);
    return haveBreakfast();
}).then(value => {
    console.log(value);
    return takeShower();
}).then(value => {
    console.log(value);
    return waitForTheBus('rain');

}).then(value => {
    console.log(value);
    return haveDinner();

}).then(value => {
    console.log(value);
    return backToWork();

}).then(value => {
    console.log(value);
    return waitForTheBusToHome();

}).then(value => {
    console.log(value);
    return goToTheShop();

}).then(value => {
    console.log(value);
    return haveSupper();

}).then(value => {
    console.log(value);
    return sleep(10000);
}).then(value => {
    console.log(value)
}).catch(reason => {
    console.log(reason);
})






