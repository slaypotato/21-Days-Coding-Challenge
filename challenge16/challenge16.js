const festivalColours = color1 => {
  /*
    A split-complementary color scheme is a three-color combination that consists of a base color (H0) and two colors (H1 and H2) that are 150 degrees and 210 degrees apart from H0 respectively.
    formula: H1 = |(H0 + 150 degrees) - 360 degrees|
    formula: H2 = |(H0 + 210 degrees) - 360 degrees|
  */
  var color2 = Math.floor((color1+150));
  var color3 = Math.floor((color1+210));
  
  return [color2,color3];
}

/*

Input:

    const color1 = 100
    
Output:
[250, 310]

*/
