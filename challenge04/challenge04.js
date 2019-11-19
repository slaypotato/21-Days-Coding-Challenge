const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  let arr = unregisteredVoters.filter(item => item !== name)
  return arr;
  // Remember to return a value!
}

/*

Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    
Output:
['Jake', 'Alanna', 'Stephanie']

*/