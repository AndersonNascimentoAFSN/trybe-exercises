const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 22790000,
      measurementUnit: 'Kilometers',
    },
  };
  setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

getPlanet();
// getPlanet(); // Imprime Marte depois de 4 ssegundos