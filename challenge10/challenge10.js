const whereCanIPark = (spots, vehicle) => {
  // Code here!
  var x = 0;
  var y = 0;
  
  if (spots.length > 0){
    for ( y=0; y < spots.length; y++){
      for (x=0; x < spots[y].length; x++){
        var spot = spots[y][x];
        if (vehicle == "regular"){
          if (spot === 'R'){
            console.log("1:found for "+vehicle);
            return [x,y];
          }
        } else if (vehicle == "small"){
          if (spot === 'R' || spot === 'S'){
            console.log("2:found for "+vehicle);
            return [x,y];
          }
        } else if (vehicle == "motorcycle"){
          if (spot === 'R' || spot === 'S' || spot === 'M'){
            console.log("3:found for "+vehicle);
            return [x,y];
          }
        }
      }
    }
  }
  console.log("failed to find for "+vehicle);
  return false;
}

/*

Input:

    const spots = [
      // COLUMNS ARE X
      //    0    1    2    3    4    5
          ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
          ['s', 'M', 's', 'S', 'R', 'M'], // 1
          ['s', 'M', 's', 'S', 'R', 'm'], // 2
          ['S', 'r', 's', 'm', 'R', 'M'], // 3
          ['S', 'r', 's', 'm', 'R', 'M'], // 4
          ['S', 'r', 'S', 'M', 'M', 'S'], // 5
      ]

      const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'
    
Output:
[4, 0]

*/