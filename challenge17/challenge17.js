const judgeVegetable = (vegetables, metric) => {
  // Code here!
  var bestSubmitter = 'none';
  var bestValue = 0;
  for (var veggie of vegetables){
    if (veggie[metric] > bestValue){
      bestSubmitter = veggie['submitter'];
      bestValue = veggie[metric];
    }
  }
  return bestSubmitter;
}

/*

Input:

   const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ]

    const metric = 'redness'
    
Output:
Old Man Franklin

*/