
const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  if (voter_signatures.length !== voter_ids.length) return false;
  for (var i = 0; i < voter_signatures.length; i++){
    if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!";
  }
  return "All clear, we can count the votes!";

}
 /*
 
 Input:

      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Fake McFakerson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]
    
Output:
FRAUD!
Input:

      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]
    
Output:
'All clear, we can count the votes!
 
 */