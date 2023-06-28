const sum = require('./main')


describe('sum()', () => {
    test('Given 2 and 3, should sums 5', () => {
    
      expect(sum(2)(3)).toEqual(6)
    })
  })