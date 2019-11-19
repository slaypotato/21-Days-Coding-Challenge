const pumpkinSpice = money => {
  var result = [0,0,0,0];
  
  while (money >= 5){
    money -= 5;
    result[0] += 1;
  }
  while (money >= 3){
    money -= 3;
    result[1] += 1;
  }
  while (money >= 1){
    money -= 1;
    result[2] += 1;
  }
  
  result[3] = (result[0] * 30) + (result[1] * 15) + (result[2] * 3);
  
  console.log(result);
  return result;
}

/*

Input:

    const money = 9
    
Output:
[1, 1, 1, 48]

*/