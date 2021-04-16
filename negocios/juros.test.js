const { expect } = require('chai')
const juros = require('./juros')

describe('Modulo Juros', () => {
  it('calcula juros compostos', () => {
    const test1010 = juros.jurosCompostos(1000, 0.01, 1)
    expect(test1010).to.equal(1010)

    const test1020 = juros.jurosCompostos(1000, 0.02, 1)
    expect(test1020).to.equal(1020)
  })
})