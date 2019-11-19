const registerToVote = (name, unregisteredVoters) => {
 
  let arr = unregisteredVoters.filter(item => item !== name)
  return arr;
}

/*

Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    
Output:
['Jake', 'Alanna', 'Stephanie']

*/
