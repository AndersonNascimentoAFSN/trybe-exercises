const math = require('./math.js');


// describe('#mock funções', () =>  {
//   it('chamada subtrair', () => {
//     math.subtrair = jest.fn();
//     math.subtrair();
//     expect(math.subtrair).toHaveBeenCalled();
//     expect(math.subtrair).toHaveBeenCalledTimes(1);
//   });

//   it('chamada multiplicar', () => {
//     math.multiplicar = jest.fn()
//     .mockReturnValue(10);
//     math.multiplicar(10);
//     expect(math.multiplicar).toHaveBeenCalled();
//     expect(math.multiplicar).toHaveBeenCalledTimes(1);
//     expect(math.multiplicar).toHaveBeenCalledWith(10);
//     expect(math.multiplicar()).toBe(10);
//   });

//   it('função dividir', () => {
//     math.dividir = jest.fn().mockReturnValue(15)
//     .mockReturnValueOnce(2)
//     .mockReturnValueOnce(5);

//     expect(math.dividir).toHaveBeenCalledTimes(0);
//     expect(math.dividir(2)).toBe(2);
//     expect(math.dividir).toHaveBeenCalled();
//     expect(math.dividir).toHaveBeenCalledTimes(1);
//     expect(math.dividir).toHaveBeenCalledWith(2);
    
//     expect(math.dividir(5)).toBe(5);
//     expect(math.dividir).toHaveBeenCalled();
//     expect(math.dividir).toHaveBeenCalledTimes(2);
//     expect(math.dividir).toHaveBeenCalledWith(5);

//     expect(math.dividir(15)).toBe(15);
//     expect(math.dividir).toHaveBeenCalled();
//     expect(math.dividir).toHaveBeenCalledTimes(3);
//     expect(math.dividir).toHaveBeenCalledWith(15);
//   });
// });

// jest.mock('./math.js');

describe('Mock módulo', () => {
  math.somar = jest.fn();
  it('funcão somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
});

// math.subtrair.mockRestore();

describe('mock spyOn', () => {
  it('função subtrair', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair(2, 1);
    expect(mockSubtrair(2, 1)).toBe(1);
  });
});
