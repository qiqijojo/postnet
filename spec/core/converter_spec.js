'use strict';

const converter = require('../../core/converter');

describe('convert2barcode', ()=> {
  it('should convert 5 digit 2 barcode', ()=> {
    let result = converter.convert2barcode('12345');
    expect(result).toEqual('|:::||::|:|::||::|::|:|:|::|:|:|');
  });
});