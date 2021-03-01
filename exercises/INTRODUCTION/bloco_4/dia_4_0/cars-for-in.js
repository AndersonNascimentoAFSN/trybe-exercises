let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
  console.log(cars[key]);
}


let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let key in car) { 
  console.log(key, car[key]);
}

