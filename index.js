function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  
  for (let i = 0; i < musiciansArray.length; i++) {
    newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return newArray;
}


function johnLennonFacts(jlFacts) {
  
  const newJlFactsArray = [];
  
  while (jlFacts.length) {
    let i = 0;
    newJlFactsArray.push(`${jlFacts[i]}!!!`);
    i++;
  }
  return newJlFactsArray.join(`, `);
}