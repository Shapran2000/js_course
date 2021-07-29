function wakeUp(cb) {
    setTimeout(() => {
        console.log("Прокинутись ");
        cb('Ще 5 хв і встаю');
    }, 300)
}

function haveBreakfast(cb) {

    setTimeout(() => {
        console.log("Поснідати ");

        cb('ммм смачий омлет');
    }, 1000)


}

function takeShower(cb) {

    setTimeout(() => {
            console.log("Піти в душ");

            cb('бррр холодна вода');
        }
        , 500)

}

function waitForTheBus(cb) {

    setTimeout(() => {
            console.log("Дочекатись автобус");

            cb('вже 3 повністю забитий , оо їде');
        }
        , 3000)


}

function haveDinner(cb) {

    setTimeout(() => {
        console.log("Пообідати");

        cb('як смачно ');
    }, 1000)


}

function backToWork(cb) {

    setTimeout(() => {
        console.log("Знову до роботи");
        cb("Так ще декілька тасків і все ")
    }, 200)

}

function waitForTheBusToHome(cb) {

    setTimeout(() => {
        console.log("Встигнати на автобус");

        cb(' ооо їде , клас !!!');
    }, 800)


}

function goToTheShop(cb) {

    setTimeout(() => {
        console.log("Піти в магазин");

        cb('Щоб таке купити смачне?)');
    }, 3000)


}

function haveSupper(cb) {

    setTimeout(() => {
        console.log("Вечеря");

        cb('що б мені таке подивитись в ютубі ?');
    }, 500)


}

function sleep(freeMany,cb) {

    setTimeout(() => {
        if(freeMany>1000){
            console.log("Спати");
            cb(null,'Йду спати, взавтра на відпонок, їду на море ');
        }else {
            console.log("Спати");

            cb('такс ще не вистачає на відпочинок , поїду з наступного тижня ',null);
        }

    }, 1000)


}

wakeUp((value) => {
    console.log(value);
    haveBreakfast((value) => {
        console.log(value);
        takeShower((value) => {
            console.log(value);
            waitForTheBus((value) => {
                console.log(value);
                haveDinner((value) => {
                    console.log(value);
                    backToWork((value) => {
                        console.log(value);
                        waitForTheBusToHome((value) => {
                            console.log(value);
                            goToTheShop((value) => {
                                console.log(value);
                                haveSupper((value) => {
                                    console.log(value);
                                    sleep(50000,(err,value) => {
                                        if(err){
                                            console.log(err)
                                        }else {
                                            console.log(value);
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})