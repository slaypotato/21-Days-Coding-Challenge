const checkAir = function (samples, threshold) {
  // Code here!
  var pollutedSample = 0;
  for (var sample of samples){
    if (sample == 'dirty'){
      pollutedSample += 1;
    }
  }
  var currentAir = pollutedSample/samples.length ; 
  
  if (currentAir < threshold){
    return 'Clean';
  } else {
    return 'Polluted';
  }
}

/*

Input:

    const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
    const threshold = 0.3
    
Output:
Polluted

*/