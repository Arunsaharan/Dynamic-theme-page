
function myClock() {

  // Get Date
  let today = new Date();

  let myDay = today.getDay();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  // Format Date according to Desired Format
  let myFormattedDay = today.toLocaleDateString('en-US', options);

  document.getElementById('today').innerHTML = myFormattedDay;

  // Get time
  let myHour = today.getHours();
  let myMin = today.getMinutes();
  let mySec = today.getSeconds();
  let mySession = document.getElementById('session');


  // Add AM/PM
  if (myHour >= 12) {
    mySession.innerHTML = 'PM';
  } else {
    mySession.innerHTML = 'AM';
  }


  // ADD Zero in front of single digit time
  let addZero = n => parseInt(n) < 10 ? '0' + n : '' + n;

  // Update Clock
  if (myHour > 12) {
    myHour = myHour - 12;
  }
  document.getElementById('hours').innerHTML = addZero(myHour);
  document.getElementById('min').innerHTML = addZero(myMin);
  document.getElementById('sec').innerHTML = addZero(mySec);
}


setInterval(myClock, 1000);


// Change Background and Greetings

function changeBg(){
  let newDay = new Date();
  let thisHour = newDay.getHours();

  if(thisHour < 12){
    // morning
    document.getElementById('first-page').setAttribute("style", "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/morning.jpg');background-position: center;background-size: cover;background-repeat: no-repeat;")
    greetings.textContent = 'Good Morning ';

  }else if(thisHour < 18){
    // Afternoon
    document.getElementById('first-page').setAttribute("style", "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/evening.jpg');background-position: center;background-size: cover;background-repeat: no-repeat;")
    greetings.textContent = 'Good Afternoon ';
  }else{
    // evening
    document.getElementById('first-page').setAttribute("style", "background: linear-gradient(rgba(35, 24, 52, 0.5), rgba(35, 24, 52, 0.5)),url('images/night.jpg'); background-position: center;background-size: cover;background-repeat: no-repeat;")
    greetings.textContent = 'Good Evening ';
  }
}

changeBg();
