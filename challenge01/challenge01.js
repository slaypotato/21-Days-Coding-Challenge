    const volunteers = [
      'Sally',
      'Jake',
      'Brian',
      'Hamid'
    ];


    const neighbourhoods = [
      'Central Valley',
      'Big Mountain',
      'Little Bridge',
      'Bricktown',
      'Brownsville',
      "Paul's Boutique",
      'Clay Park',
      'Fox Nest'
    ];
	
    const doorToDoor = (volunteers, neighbourhoods) => {
    
    var totalVolunteers = volunteers.length;
    var totalNeighbourhoods = neighbourhoods.length;
    
    result = totalNeighbourhoods / totalVolunteers;
    
    return Math.floor(result);
	
//output = 2
