const castVote = (name, votes) => {
 
  switch(name){
    case 'Tim': votes[0]++;
    break;
    case 'Sally': votes[1]++;
    break;
    case 'Beth': votes[2]++;
    break;
    default: return votes;
  } 
  return votes;
}

/*
Input:

    const name = 'Sally';
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ]
    
Output:

    [
      0, // Tim
      3, // Sally
      1 // Beth
    ]
Input:

    const name = 'Tim';
    const votes = [
      1, // Tim
      1, // Sally
      2 // Beth
    ];
    
Output:

    [
      2, // Tim
      1 // Sally  
      2 // Beth
    ]
*/
