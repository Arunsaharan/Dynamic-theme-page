function changeBgDark() {
  let newDay = new Date();
  let thisHour = newDay.getHours();

  if (thisHour < 12) {
    // morning
    greetings.textContent = 'Good Morning ';

  } else if (thisHour < 18) {
    // Afternoon
    greetings.textContent = 'Good Afternoon ';
  } else {
    // evening
    greetings.textContent = 'Good Evening ';
  }
}

changeBgDark();
