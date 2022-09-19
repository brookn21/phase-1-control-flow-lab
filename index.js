function scuberGreetingForFeet(num){
  if(400 >= num ){
    return('This one is on me!')
  }
  if(400 <= num && num <= 2000){
    return('That will be twenty bucks.')
  }
  if(num > 2000 && num < 2500){
    return("I will gladly take your thirty bucks.")
  }
  if(num > 2500){
    return("No can do.")
  }
}

function ternaryCheckCity(city){
  return(city === "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }}