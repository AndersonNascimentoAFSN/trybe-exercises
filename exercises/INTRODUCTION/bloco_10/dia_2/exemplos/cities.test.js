const { 
  getCities,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
  resetCities,
  removeCity,
} = require('./cities');

// const { TestScheduler } = require('jest');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });
  
  afterEach(() => {
    resetCities();
  });
  
  it('Once I remove some city, my array should have 1 city left', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1);
  });
  
  it('should have 2 city after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from api', () => {
  beforeEach(() => {
    return requestCities();
  });
  
  afterEach(() => {
    resetCities();
  });

  it('should have 8 cities after requesting from api', () => {
    expect(getCities().length).toBe(8);
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });
});


