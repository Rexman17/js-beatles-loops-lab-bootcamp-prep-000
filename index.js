function theBeatlesPlay(musiciansArray, instrumentsArray) {
  for (let i = 0; i < musiciansArray.length; i++) {
    const newArray = newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return newArray;
}