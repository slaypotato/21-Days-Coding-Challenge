const finalPosition = (moves) => {

  var direction = {
    'north':[0,1],
    'south':[0,-1],
    'west':[-1,0],
    'east':[1,0]
  }
  
  var end = [0,0];
  
  for (var m of moves){
    end[0] += direction[m][0];
    end[1] += direction[m][1];
  }
  
  console.log(end);
  return end;
}

/*

Input:

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
    
Output:
[-1, 4]

*/
