const { sum, myRemove, myFizzBuzz,encode, decode, techList } = require('./script');

describe('sum: ', () => {
    test('Tests if 4 + 5 = 9.', () => {
        expect(sum(4, 5)).toBe(9)
    });
    
    test('Tests if 0 + 0 = 0.', () => {
        expect(sum(0, 0)).toBe(0)
    });
    
    test('Tests if error is thrown on string.', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow('parameters must be numbers')
    });
});

describe('myRemove: ', () => {
    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('myFizzBuzz: ', () => {
    test('Tests if 15 returns fizzbuzz.', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    });

    test('Tests if 3 returns fizz.', () => {
        expect(myFizzBuzz(3)).toEqual('fizz')
    });

    test('Tests if 5 returns buzz.', () => {
        expect(myFizzBuzz(5)).toEqual('buzz')
    });

    test('Tests if 2 returns 2.', () => {
        expect(myFizzBuzz(2)).toBe(2)
    });

    test('Tests if NaN returns false.', () => {
        expect(myFizzBuzz('not number')).toBeFalsy()
    });
});

describe('encode/decode: ', () => {
    test('Tests if encode is a function.', () => {
        expect(typeof encode).toBe('function')
    });

    test('Tests if decode is a function.', () => {
        expect(typeof decode).toBe('function')
    });

    test('Tests if encode turns aeiou into 12345.', () => {
        expect(encode('aeiou')).toBe('12345')
    });

    test('Tests if decode turns 12345 into aeiou.', () => {
        expect(decode('12345')).toBe('aeiou')
    });

    test('Tests if encode keeps other letters unchanged.', () => {
        expect(encode('rtsgh')).toBe('rtsgh')
    });

    test('Tests if decode keeps other numbers unchanged.', () => {
        expect(decode('6789')).toBe('6789')
    });

    test('Tests if encode keeps string length.', () => {
        expect(encode('rtsgh').length).toBe(5)
    });

    test('Tests if decode keeps string length.', () => {
        expect(decode('6789').length).toBe(4)
    });
});

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });