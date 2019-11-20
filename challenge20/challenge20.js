// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
  return (4/3)*Math.pow(radius,3)*PI;
}

const coneVolume = function (radius, height) {
  return PI*Math.pow(radius,2)*(height/3);
}

const prismVolume = function (height, width, depth) {
  return (width*depth)*height;
}

const totalVolume = function (solids) {
  //console.log(solids);
  var total = 0;
  for(var obj of solids){
    switch(obj["type"]){
      case 'sphere': total += sphereVolume(obj["radius"]);
                     break;
      case 'cone': total += coneVolume(obj["radius"],obj["height"]);
                   break;
      case 'prism': total += prismVolume(obj["height"],obj["width"],obj["depth"]);
                    break;
    } 
    //console.log(obj["type"]+"' "+total);
  }
  return total;
}

/*

Input:

    const sphere = {
      type: 'sphere',
      radius: 2
    }

    sphereVolume(sphere.radius)
    
Output:
33.5102
Input:

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    coneVolume(cone.radius, cone.height)
    
Output:
47.12385
Input:

    const prism = {
      type: 'prism',
      height: 3,
      width: 4,
      depth: 5
    }

    prismVolume(prism.height, prism.width, prism.depth)
    
Output:
60
Input:

    const largeSphere = {
      type: 'sphere',
      radius: 40
    }

    const smallSphere = {
      type: 'sphere',
      radius: 10
    }

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    const duck = [
      largeSphere,
      smallSphere,
      cone
    ]

    totalVolume(duck)
    
Output:
272318.257

*/