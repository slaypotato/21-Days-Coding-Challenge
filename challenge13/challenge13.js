// Tip: Work on one of these functions at a time.

const lightsOn = function(lights) {
  // Code here!
  for (var light of lights){
    //console.log(light['id']+": "+light['on']);
    light['on'] = true;
    //console.log('changed to: '+light['id']+": "+light['on']);
  }
  return lights;
}

const lightsOff = function(lights) {
  // Code here!
  for (var light of lights){
    //console.log(light['id']+": "+light['on']);
    light['on'] = false;
    //console.log('changed to: '+light['id']+": "+light['on']);
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  // Code here!
  //console.log("current "+lightsAreOn);
  if (!lightsAreOn){
    lightsOn(lights);
  } else{
    lightsOff(lights);
  }
  return lights;
}


/*

Input:

    // for lightsOff() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]
    
Output:
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ],
Input:

    // for lightsOn() function
    const lights = [
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]
    
Output:
[
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]
Input:

    // for toggleLights() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]

    const lightsAreOn = true
    
Output:
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]
	
	*/