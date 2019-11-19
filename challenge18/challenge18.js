const countTickets = (tickets) => {

  var response = {
    red:0,
    green:0,
    blue:0
  }
  
  for (var ticket of tickets){
    response[ticket] += 1;
  }
  
  return response
}

const bestOdds = (tickets, raffleEntries) => {

  var myTickets = countTickets(tickets);
  var lowest;
  var lowestName;
   for (var ticket in raffleEntries){
     if (lowest !== undefined  && lowest > raffleEntries[ticket]){
       lowest = raffleEntries[ticket];
       lowestName = ticket;
     } else if (lowest === undefined){
       lowest = raffleEntries[ticket];
       lowestName = ticket;
     }
   }
   return 'You have the best odds of winning the '+lowestName+' raffle.'
}

/*

Input:

// for bestOdds() function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
Output:
"You have the best odds of winning the red raffle."
Input:

// for countVotes() helper function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]
Output:
 
{
  red: 2,
  green: 2,
  blue: 1
}

*/
