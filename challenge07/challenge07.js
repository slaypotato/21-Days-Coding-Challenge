const termTopics = (interviews) => {
  
  var result = [0,0,0];
  
  for (interview of interviews){
    switch (interview){
      case 'smart city': result[0] += 1;
                         break;
      case 'arts funding': result[1] += 1;
                           break;
      case 'transportation': result[2] += 1;
                             break;
    }
  }
  return result;
}

/*

Input:

    const interviews = [
      'smart city', 
      'rebuild the lighthouse', 
      'arts funding', 
      'transportation',
      'arts funding', 
      'rebuild the lighthouse', 
      'sports funding', 
      'tax cuts', 
      'smart city',
      'arts funding', 
      'smart city'
    ]
    
Output:

    [
      3, // smart city
      3, // arts funding
      1  // transportation
    ]

*/
