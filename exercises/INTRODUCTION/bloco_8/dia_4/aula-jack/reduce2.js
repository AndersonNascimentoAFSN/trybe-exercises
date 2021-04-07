const epic = ['A', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away...'];
const setence = epic.reduce((acc, curr) => `${acc} ${curr}`);
console.log(setence);
