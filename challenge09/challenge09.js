const carPassing = (cars, speed) => {

  var time = Date.now();
  cars.push({'time':time,'speed':speed});
  return cars;
}


/*

Input:

    const cars = [
      {
        time: 1568329654807,
        speed: 40,
      },
      {
        time: 1568329821632,
        speed: 42,
      },
      {
        time: 1568331115463,
        speed: 35
      }
    ]
   

   const speed = 38
    
Output:
[
      {
        time: 1568329654807,
        speed: 40,
      },
      {
        time: 1568329821632,
        speed: 42,
      },
      {
        time: 1568331115463,
        speed: 35
      },
      {
        time: 1568431216417,
        speed: 38
      }
    ]
	
*/
