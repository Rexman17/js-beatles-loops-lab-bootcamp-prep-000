function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  
  for (let i = 0; i < musiciansArray.length; i++) {
    newArray = newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return newArray;
}