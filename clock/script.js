// setInterval(setclock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setclock() {
//   const currentDate = new Date()
//   const secondsRation = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsration + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.hetHours()) / 12
//   setRotation(secondHand, secondsRation)
//   setRotation(minuteHand, minutesRation)
//   setRotation(hourHand, hoursRation)
// }

// function secondsRatation(element, rotationRation) {
//   element.style.setProperty('--rotation', rotationRation * 360)
// }

// setclock()


setInterval(setClock,1000);
const hour=document.querySelector('[data-hour]')
const minute=document.querySelector('[data-minute]')
const second=document.querySelector('[data-second]')
function setClock(){
  const nowDate=new Date;
  const sR=nowDate.getSeconds()/60;
  const mR=(sR+nowDate.getMinutes())/60;
  const hR=(mR+nowDate.getHours())/12;
  setRotation(hour,hR);
  setRotation(minute,mR);
  setRotation(second,sR);
}

function setRotation(element,rR){
  element.style.setProperty('--r',rR*360);
}
setClock();