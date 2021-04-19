const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(reject(number));
  }
  resolve(number);
})
.then(number => `Que sucesso! Nosso número foi: ${number}.`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso! Nosso número foi: ${number}`));