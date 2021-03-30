const wakeUp = () => {
  return console.log('Acordando!!');
}

const breakfast = () => {
  return console.log('Bora tomar café!!');
}

const sleep = () => {
  return console.log('Partiu dormir!!');
}

const doingThings = (things) => {
  things();
}

doingThings(wakeUp);