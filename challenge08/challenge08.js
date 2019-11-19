const smartGarbage = (trash, bins) => {

    bins[trash] += 1;
    return bins;
}

/*

Input:

    const bins = {
        waste: 4,
        recycling: 2,
        compost: 5
    }

    const trash = 'recycling'
    
Output:
{
        waste: 4,
        recycling: 3,
        compost: 5
    }
	
	*/
