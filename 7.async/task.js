
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if (!id) {
        throw new Error('id будильника не передан');
      }

      if (this.alarmCollection.some(item => item.id === id)) {
        console.error('Такой id уже есть');
        return null
      } 
      
      this.alarmCollection.push({
        time: time, 
        callback: callback, 
        id: id
      });
      
    }


    removeClock(id){
    let start = this.alarmCollection.length;

    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);       
    

    let finish = this.alarmCollection.length;

    return start > finish;
    
    }

    getCurrentFormattedTime() {
      let date = new Date();
      let minutes = date.getMinutes();
      let hours = date.getHours();

      return (hours + ':' + minutes);
    }

    start() {
      const checkClock = (callTime) => {
        if (callTime.time === this.getCurrentFormattedTime()) {
          callTime.callback();
        }
    };

    if (this.timerId === null) {
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach((callTime) =>
                checkClock(callTime)
            );
        }, 1000);
    }


  }

    stop() {
      if (this.timerId !== null) {
       clearInterval(this.timerId);
      }
      this.timerId = null;
    }
  
    printAlarms() {
      console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
      this.alarmCollection.forEach(item => console.log('id звонка: ' + item.id + ', время звонка: ' + item.time));
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
}

