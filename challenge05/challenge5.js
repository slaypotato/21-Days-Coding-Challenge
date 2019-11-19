
const chooseStations = (stations) => {
  // Code here!
  let goodStations = [];
  for (const st of stations){
    if (st[1] >= 20){
      if (st[2] == 'school' || st[2] == 'community centre')
      goodStations.push(st[0]);
    }
  }
  // Remember to return a value!
  return goodStations;
}

/*

Input:

    const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];
    
Output:
['Bright Lights Elementary', 'Moose Mountain Community Centre']

*/