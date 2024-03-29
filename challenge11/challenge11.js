const busTimes = buses => {

  result = {};
  for(var bus in buses){
    result[bus] =  buses[bus]['distance']/buses[bus]['speed'];
  }
  return result;
}

/*

Input:

    const buses = {
      pickadilly: {
          distance: 10,
          speed: 5
      },
      uptown: {
          distance: 13,
          speed: 10
      }
    }
    
Output:

    {
      pickadilly: 2,
      uptown: 1.3
    }
	
*/
