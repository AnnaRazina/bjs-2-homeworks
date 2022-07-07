class AlarmClock {
    constructor (alarmCollection = [], timerId = null) {
        Object.assign(this, {alarmCollection, timerId});
    }
    addClock (time, f, id) {
       if (!id) {throw new Error ("Невозможно идентифицировать будильник. Параметр id не передан.")};
       if (this.alarmCollection.some((el) => el.id === id) === true) {
        console.log("Будильник с таким id уже существует.");
    } else {
        this.alarmCollection.push({id, time, f})
    };
        return this.alarmCollection;
    }
    removeClock (id) {
        let result = this.alarmCollection.filter(function(element) {
           return element.id !== id;
          }); 
        if (this.alarmCollection.length !== result.length) {
            console.log("trye");
            return this.alarmCollection = result;
        } else {
            console.log("falsh")
            return this.alarmCollection;
        }
    }
    getCurrentFormattedTime () {
        let date = new Date(); 
        let Hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`;
        let Minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        let currentTime = `${Hours}:${Minutes}`;
        return currentTime;
    }
    start () {
        let checkClock = (alarm) => {if(alarm.time === this.getCurrentFormattedTime()) {
           return alarm.f()};
        };
        let forEachCall = () => this.alarmCollection.forEach(checkClock);
        if (this.timerId === null) {
        this.timerId = setInterval(forEachCall, 1000);
        this.timerId++;
        }
        
    }
    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms () {
       console.log(`печать всех будильников: ${this.alarmCollection.length}`);
       this.alarmCollection.forEach(element => console.log(`будильник №${element.id}, заведён на ${element.time}`));
    }
    clearAlarms () {
        stop ();
        this.alarmCollection = [];
    }
};
function testCase () {
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("19:15", () => console.log("Пора вставать!"), 1);
phoneAlarm.addClock("19:18", () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 2);
console.log(phoneAlarm.addClock("19:19", () => {console.log("Вставай, а то проспишь!");
 phoneAlarm.clearAlarms();
 phoneAlarm.printAlarms()}, 3));
phoneAlarm.addClock("19:20", () => console.log("Вставай!"), 3);
phoneAlarm.printAlarms();
phoneAlarm.start()
};
