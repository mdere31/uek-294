const greet = () => {
    const response = prompt("What is your name?");
    
    let timeOfTheDay;
    const currentTime = new Date();
    
    if (currentTime.getHours() >= 0 && currentTime.getHours() < 11) {
      timeOfTheDay = "Guten Morgen "
    } else if (currentTime.getHours() >= 11 && currentTime.getHours() < 16) {
      timeOfTheDay = "Guten Tag "
    } else if (currentTime.getHours() >= 16 && currentTime.getHours() < 21) {
      timeOfTheDay = "Guten Abend "
    } else {
      timeOfTheDay = "Gute Nacht "
    }

    alert(timeOfTheDay + response);
}

greet();