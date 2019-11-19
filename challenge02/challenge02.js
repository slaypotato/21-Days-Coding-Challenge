const interviewAnswer = (topic) => {
  
  var response = {
    'arts funding':'We\'ll have to get creative!',
    'economy': 'Time is money.',
    'transportation': 'It\'s going to be a long road, so we better get moving.'
  }
  
  if (response[topic]){
    return response[topic];
  } else {
    return "QUACK!";
  }

}


/*
Input: const topic = 'economy'
Output: Time is money.
Input: const topic = 'transportation'
Output: It's going to be a long road, so we better get moving.
*/
