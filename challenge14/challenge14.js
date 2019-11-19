const dynamicPricing = (numberOfPeople, distanceTraveled) => {

  var ticketPrice = 1.00;
  ticketPrice += (distanceTraveled * 0.25);
  if (numberOfPeople >= 30) {
    ticketPrice += 0.25;
  }
  ticketPrice =  ticketPrice.toFixed(2);
  return "$"+ticketPrice;
}

/*

Input:

    const numberOfPeople = 15
    const distanceTraveled = 10
    
Output:
$3.50
Input:

    const numberOfPeople = 35
    const distanceTraveled = 5
    
Output:
$2.50

*/
